// Rick and morty api

const url = 'https://rickandmortyapi.com/api/';

getAllCharacters = () => {
    fetch(url + 'character')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        var container = document.querySelector('#container');
        container.innerHTML = '';
        // Bucle que imprime las cartas
        for (let i = 0; i < data.results.length; i++) {
            container.innerHTML += `
            <div class="card">
                <img src="${data.results[i].image}" alt="">
                <div class="data">
                    <p>Nombre: ${data.results[i].name}</p>
                    <p>Especie: ${data.results[i].species}</p>
                    <p>Género: ${data.results[i].gender}</p>
                    <p></p>
                </div>
            </div>
            `;
            
        }
        
    })
    .catch(err => console.log(err));
}

getAllCharacters()