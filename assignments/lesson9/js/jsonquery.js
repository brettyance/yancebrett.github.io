const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
        if (towns[i].name === "Fish Haven" ||
            towns[i].name === "Preston" ||
            towns[i].name === "Soda Springs") {
            
            var town = document.getElementById(
                `${towns[i].name.replace(/ /g,"_").toLowerCase()}_summary`);

            var info = town.querySelector('.town_info');
            var picture = town.querySelector('.town_picture');
                
            let name = document.createElement('h2');
            name.textContent = towns[i].name;

            let motto = document.createElement('h3');
            motto.textContent = towns[i].motto;

            let image = document.createElement('img');
            image.setAttribute('src',`images/${towns[i].photo}`);
            image.setAttribute('alt',`Preston, ID`);

            info.appendChild(name);
            info.appendChild(motto);
            picture.appendChild(image);
        
            for(var property in towns[i]) {
                if(property === "name" || property === "photo" ||
                    property === "motto" || property === "events"){
                } else {
                    let p = document.createElement('p');
                    p.textContent = `${property}: ${towns[i][property]}`;
                    info.appendChild(p)
                }
            }
        }
    }
});