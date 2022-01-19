import React, { useState, useEffect } from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import { helpHttp } from '../helpers/helpHttp';
import Error404 from '../pages/Error404';
import SongPage from '../pages/SongPage';
import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import SongTable from './SongTable';

let mySongsInit = JSON.parse(localStorage.getItem('mySongs')) || [];

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);

  useEffect(() => {
    const fetchData = async () => {
      if (search === null) return;
      const { artist, song } = search;

      let artistUrl = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      //  console.log(artistUrl, songUrl);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      //   console.log(artistRes, songRes);
      setBio(artistRes);
      setLyric(songRes);

      setLoading(false);
    };

    fetchData();

    localStorage.setItem('mySongs', JSON.stringify(mySongs));
  }, [search, mySongs]);

  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };

  const handleSaveSong = () => {
    if (!bio.artist && lyric.err) return;

    let currentSong = {
      search,
      lyric,
      bio,
    };

    /*   let songs = [...mySongs, currentSong]
    setMySongs(songs) */
    setMySongs((mySongs) => [...mySongs, currentSong]);
    setSearch(null);

    /*   localStorage.setItem('mySongs', JSON.stringify(songs)) */
  };

  const handleDeleteSong = (id) => {
    // alert(`Eliminando cancion con el id: ${id}`);
    let isDelete = window.confirm(
      `Estas seguro de eliminar la cancion con el id "${id}"`
    );

    if (isDelete) {
      let songs = mySongs.filter((el, index) => index !== id);
      setMySongs(songs);
      /*  localStorage.setItem('mySongs', JSON.stringify(songs)); */
    }
  };

  return (
    <div>
      <HashRouter>
        <header>
          <h2>Song Search</h2>
          <Link to="/canciones">Home</Link>
        </header>
        {loading && <Loader />}
        <article className="grid-1-2">
          <Routes>
            <Route
              path="/canciones"
              element={
                <>
                  <SongForm
                    handleSearch={handleSearch}
                    handleSaveSong={handleSaveSong}
                  />
                  <SongTable
                    mySongs={mySongs}
                    handleDeleteSong={handleDeleteSong}
                  />
                  {search && !loading && (
                    <SongDetails search={search} lyric={lyric} bio={bio} />
                  )}
                </>
              }
            />
            <Route
              path="/canciones/:id"
              element={<SongPage mySongs={mySongs} />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </article>
      </HashRouter>
    </div>
  );
};

export default SongSearch;
