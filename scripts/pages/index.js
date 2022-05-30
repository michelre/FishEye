/* eslint-disable require-jsdoc */
import {photographerFactory} from '../factories/photographer.js';

export async function getPhotographers() {
  const fetchData = await fetch('https://theodotcom.github.io/FishEye/data/photographers.json')
      .then((response) => {
        return response.json();
      })
      .then((data) =>{
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  return fetchData;
}

async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
};

async function init() {
  // Récupère les datas des photographes
  const {photographers, media} = await getPhotographers();
  console.log(photographers);
  const queryString = window.location.search; // "?id=243"
  const searchParams = new URLSearchParams(queryString); // => id

  const photographerId = searchParams.get('id'); // ==> 243

  media.forEach((media) => {
    // Pour chaque média, on cherche l'id du photographe
    // qui est égale a  media.photographerId
    if (photographers.find((x) => x.id === media.photographerId)) {
      const owner = photographers.find((x) => x.id === media.photographerId);

       owner.medias ? owner.medias.push(media) : owner['medias'] = [media];

      // syntaxe basique
      // if(owner.medias) {
      //   owner.push(media)
      // } else {
      //  owner['medias'] = [media]
      // }
    }
  });
  displayData(photographers);
};
init();
