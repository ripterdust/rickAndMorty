// Rick and morty api

const url = 'https://rickandmortyapi.com/api/';
var container = document.querySelector('#container');
var message = document.querySelector('#message');

// Main page app
getCharacters = () => {
    fetch(url + 'character/')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        message.innerHTML = 'Welcome to Rick and morty API'
        container.innerHTML = '';
        // Bucle que imprime las cartas
        for (let i = 0; i < data.results.length; i++) {
            container.innerHTML += `
            <div class="card">
                <img src="${data.results[i].image}" alt="">
                <div class="data">
                    <div class="items">
                        <p>NAME: <br/>${data.results[i].name}</p>
                        <p>SPECIE: ${data.results[i].species}</p>
                        <p>GENDER: ${data.results[i].gender}</p>
                        <p>STATUS: ${data.results[i].status}</p>
                    </div>
                </div>
            </div>
            `;
            
        }
        
    })
    .catch(err => console.log(err));
}

// All characters function
getAllCharacters = (page = 2) => {
    fetch(url + `character/?page=${page}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        message.innerHTML = 'All characters'
        container.innerHTML = '';
        // Bucle que imprime las cartas
        for (let i = 0; i < data.results.length; i++) {
            container.innerHTML += `
            <div class="card">
                <img src="${data.results[i].image}" alt="">
                <div class="data">
                    <div class="items">
                        <p>NAME: <br/>${data.results[i].name}</p>
                        <p>SPECIE: ${data.results[i].species}</p>
                        <p>GENDER: ${data.results[i].gender}</p>
                        <p>STATUS: ${data.results[i].status}</p>
                    </div>
                </div>
            </div>
            `;
            
        }
        console.log(data.info.pages);
        let list = document.querySelector('#pages');
        list.innerHTML = ''
        for (let index = 3; index <= data.info.pages; index++) {
            list.innerHTML += `
                <a onclick="getAllCharacters(${index})">${index}</a>
            `

            
        }
        
    })
    .catch(err => console.log(err));

}

getCharacters();