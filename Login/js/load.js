window.addEventListener('load', function() {
    fetch('https://example.com/api/data')
        .then(response => response.json())
        .then(data => {
            // Process the fetched data here
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
        });
});