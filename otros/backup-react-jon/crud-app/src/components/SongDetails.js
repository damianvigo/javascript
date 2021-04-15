import Message from './Message';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {}
      <h2>Detalles</h2>
      {lyric.error || lyric.err || lyric.name === 'AbortError' ? (
        <Message msg={`Error: no existe la cancion' ${search.song}'`} bgColor='#dc3545' />
      ) : (
        <SongLyric />
      )}
      {bio.artists ? <SongArtist /> : <Message msg={`Error: no existe el interprete '${search.artist}'`} bgColor='#dc3545' />}
    </>
  );
};

export default SongDetails;
