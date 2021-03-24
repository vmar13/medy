document.addEventListener('DOMContentLoaded', () => {

    const getSearchResults = () => {
        fetch('https://api.fda.gov/drug/event.json?search=receivedate:[20040101+TO+20081231]&limit=1')
        .then(res => res.json())
        .then(queryResults => console.log(queryResults))
    }

    // let div = document.createElement('div')
    // div.innerHTML('MEDY')

    getSearchResults()
})