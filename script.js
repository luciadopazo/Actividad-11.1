function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            const outputDiv = document.getElementById('output');
            outputDiv.innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

