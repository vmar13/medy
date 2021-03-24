document.addEventListener('DOMContentLoaded', () => {

    const cardContainer = document.querySelector('.container')

    const getSearchResults = () => {
        fetch('https://api.fda.gov/drug/event.json?search=receivedate:[20040101+TO+20081231]&limit=1')
        .then(res => res.json())
        .then(populateDrugCards)
    }

    // let div = document.createElement('div')
    // div.innerHTML('MEDY')

    const populateDrugCards = (results) => {
        cardContainer.innerHTML = ''

        results.forEach(result => {

        const resultDiv = document.createElement('div')
        })
    }

     
      

    getSearchResults()
    populateDrugCards()
})