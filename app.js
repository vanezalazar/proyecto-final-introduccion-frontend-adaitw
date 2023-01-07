const $container = document.getElementById("container");

    const URL_API = "https://rickandmortyapi.com/api/character";
    
    console.log(URL_API);
    
    fetch(URL_API)
        .then((res) => res.json())
        .then((data) => {
            const characters = data.results;
            console.log(data.results);
    for (let character of characters) {
      $container.innerHTML += `
        <div class="card-container">
        <div class="image-container">
        <img class="image-card" src= "${character.image}" alt=""
        </div>
        <div class="info-card">
        <h3> ${character.name} </h3>
        <p class="info-text"> <span class="green-text">${character.status}-${character.species}</span></p>
        <p class="info-text"> Location:<span class="green-text"> ${character.location.name}</span></p>
        <p class="info-text"> Origin:  <span class="green-text"> ${character.origin.name} </span></p>
        </div>
        </div>
        </div>
      `;
    }
  });

  
