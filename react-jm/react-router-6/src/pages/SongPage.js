import { useParams } from 'react-router-dom';
import SongDetails from '../components/SongDetails';

const SongPage = ({ mySongs }) => {
  let { id } = useParams();
  /*   console.log(id);
  console.log(mySongs);
  console.log(mySongs[id]); */

  let currentSong = mySongs[id];
  let { search, lyric, bio } = currentSong;
  return <SongDetails search={search} lyric={lyric} bio={bio} />;
};

export default SongPage;
