const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
  const apiURL = id ? `${API}${id}` : API; // si id existe retornar api y concatenar el id y si no existe trae todos los personajes
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  }
};

export default getData;