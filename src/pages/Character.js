import getHash from '../utils/getHash'
import getData from '../utils/getData'

const Character = async () => {
    const id = getHash()
    const chataracter = await getData(id)
    console.log(chataracter)
    const view = `
    <div class="Characters-inner">
    <article class="Characters-card">
      <img src="${chataracter.image}" alt="${chataracter.name}">
      <h2>${chataracter.name}</h2>
    </article>
    <article class="Characters-card">
      <h3>Episodes: <span>${chataracter.episode.length}</span></h3>
      <h3>Status: <span>${chataracter.status}</span></h3>
      <h3>Species: <span>${chataracter.species}</span></h3>
      <h3>Gender: <span>${chataracter.gender}</span></h3>
      <h3>Origin: <span>${chataracter.origin.name}</span></h3>
      <h3>Last Location: <span>${chataracter.location.name}</span></h3>
    </article>
    </div>
    `;
    return view;
  };
  
  export default Character;