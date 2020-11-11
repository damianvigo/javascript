import api from './helpers/wp_api.js'

export function App() {
  document.getElementById('root').innerHTML = `<h1>SPA</h1>`;

  console.log(api)
}