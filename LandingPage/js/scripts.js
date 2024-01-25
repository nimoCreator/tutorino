window.addEventListener('load', function() {
    // fetch('https://example.com/api/data')
    //     .then(response => response.json())
    //     .then(data => {
    //         // Process the fetched data here
    //     })
    //     .catch(error => {
    //         // Handle any errors that occurred during the fetch
    //     });

    this.document.getElementById('find_button').addEventListener('click', () => {
        window.location.href = './find/index.html';
    });
    this.document.getElementById('user_profile').addEventListener('click', () => {
        window.location.href = './Login/index.html';
    });
    this.document.getElementById('icon_tutorino').addEventListener('click', () => {
        window.location.href = '../index.html';
    });
});