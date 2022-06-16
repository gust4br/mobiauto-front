// faça uma chamada rick and morty api e resgate informações do seguintes personagens (Rick Sanchez, Morty Smith, Summer Smith, Beth Smith, Jerry Smith)
// e ajustar os dados para que fiquem igual a saida de exemplo.
// API aberta não precisa de token
// Documentação
// https://rickandmortyapi.com/documentation/#rest

// Ex de Saida: [
//   {
//     nome: 'Rick Sanchez',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Morty Smith',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Summer Smith',
//     genero: 'Mulher',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Beth Smith',
//     genero: 'Mulher',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
//     especie: 'Humano'
//   },
//   {
//     nome: 'Jerry Smith',
//     genero: 'Homem',
//     avatar: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
//     especie: 'Humano'
//   }
// ]
import api from '../../services/api';

async function getRicAndMortyCharacters() {
  const charactersToSearch = ["Rick Sanchez", "Morty Smith", "Summer Smith", "Beth Smith", "Jerry Smith"];
  let charactersData = [];

  for (let i = 0; i < charactersToSearch.length; i++) {
    const charData = await api.get('character', {params: { name: charactersToSearch[i]}})
    .then(response => {
      return response.data.results[0];
    })
    .catch(err => console.error(err));

    let charObject = {
      nome: charData.name,
      genero: charData.gender == "Male" ? "Homem" : "Mulher",
      avatar: charData.image,
      especie: charData.species == "Human" ? "Humano" : "",
    }
    charactersData.push(charObject);
  }
  return charactersData;
}

module.exports = getRicAndMortyCharacters;
