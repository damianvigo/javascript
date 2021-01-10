import React from 'react';
import { useParams } from 'react-router-dom';

const Civilization = () => {

  /* console.log(useParams()); */
  const { id } = useParams();
  console.log(id);

  const [pueblo, setPueblo] = React.useState([]);

  React.useEffect(() => {
    console.log('useEffect');
    const data = async () => {
      const res = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);
      const json = await res.json();
      console.log(json);
      setPueblo(json);
    };
    data();
  }, [id]);


  return (
    <div>
      <h3>{pueblo.name}</h3>
      <p>{pueblo.team_bonus}</p>
    </div>
  );
}

export default Civilization;