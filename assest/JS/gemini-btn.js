document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.search-box');
    const input = form.querySelector('input[type="search"]');
    const resultsContainer = document.querySelector('.results');
    const wikipediaSearchBtn = document.querySelector('.wikipedia-search-btn');
    const geminiSearchBtn = document.querySelector('.gemini-search-btn');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchTerm = input.value;
        if (searchTerm) {
            searchWikipedia(searchTerm);
        }
    });



    geminiSearchBtn.addEventListener('click', function (event) {
        event.preventDefault();
        const searchTerm = input.value;
        if (searchTerm) {
            searchGemini(searchTerm);
        }
    });

    function searchWikipedia(searchTerm) {
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=500&srsearch=${encodeURIComponent(searchTerm)}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayResults(data.query.search);
            })
            .catch(error => alert('Error : ' + error));
    }

    function searchGemini(searchTerm) {
        const apiKey = 'AIzaSyB_5SLKMGNyc9cmYIMIwochDip1EkWoFSU'; // Replace 'YOUR_API_KEY' with your actual Gemini API key
        const url = `https://api.example.com/search?q=${encodeURIComponent(searchTerm)}&api_key=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayGeminiResults(data.results);
            })
            .catch(error => alert('Error : ' + error));
    }

    function displayResults(results) {
        resultsContainer.innerHTML = '';
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.className = 'result';
            resultElement.innerHTML = `
                <h3>${result.title}</h3>
                <p>${result.snippet}</p>
                <a href="https://en.wikipedia.org/?curid=${result.pageid}" target="_blank">Read More</a>
            `;
            resultsContainer.appendChild(resultElement);
        });
    }

    function displayGeminiResults(results) {
        resultsContainer.innerHTML = '';
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.className = 'result';
            resultElement.innerHTML = `
                <h3>${result.title}</h3>
                <p>${result.description}</p>
                <a href="${result.url}" target="_blank">Visit Gemini Result</a>
            `;
            resultsContainer.appendChild(resultElement);
        });
    }
});
