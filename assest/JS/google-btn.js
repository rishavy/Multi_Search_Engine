// function to perform google search
function performGoogleSearch(query) {
    // API key and search engine ID
    const apiKey = 'AIzaSyCDHeeL9vrctoNnD_3SVV_bqXHvo60ysy0';
    const cx = 'c10187e22a55b452b';
    
    // URL for google search JSON API
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}`;

    // fetching data from google search API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // clear previous results
            document.querySelector('.results').innerHTML = '';

            // Display search results
            data.items.forEach(item => {
                const resultDiv = document.createElement('div');
                resultDiv.classList.add('result');

                const title = document.createElement('h3');
                title.textContent = item.title;
                
                const link = document.createElement('a');
                link.href = item.link;
                link.textContent = item.link;
                link.setAttribute('target', '_blank');

                const snippet = document.createElement('p');
                snippet.textContent = item.snippet;

                resultDiv.appendChild(title);
                resultDiv.appendChild(link);
                resultDiv.appendChild(snippet);

                document.querySelector('.results').appendChild(resultDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// event listener for google search button
document.querySelector('.google-search-btn').addEventListener('click', function() {
    const query = document.querySelector('input[type="search"]').value;
    performGoogleSearch(query);
});
