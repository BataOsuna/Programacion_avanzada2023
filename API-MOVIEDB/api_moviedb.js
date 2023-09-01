const url = 'https://api.themoviedb.org/3/movie/550?api_key=8fa8fe67b5f6b84aedfe04b2350639db'

const options = {method: 'GET', headers: {accept: 'application/json'}}

fetch(url, options)
    .then(res => res.json())
    .then(json => {

        const title = json.title
        const overview = json.overview
        const posterPath = json.poster_path

        const titleElement = document .createElement('h1')
        titleElement.textContent = title

        const overviewElement = document.createElement('p')
        overviewElement.textContent = overview

        const posterElement = document.createElement('Ing')
        posterElement.src = 'https://image.tmdb.org/t/p/w500' + posterPath

        document.body.appendChild(titleElement)
        document.body.appendChild(overviewElement)
        document.body.appendChild(posterElement)
    })

    .catch(err => console.error('error: ' + err))