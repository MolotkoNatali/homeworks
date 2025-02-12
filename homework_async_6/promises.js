fetch('https://catfact.ninja/docs/api-docs.json')
    .then((response) => {
        return response.json();
    })
    .then((error) => console.log('body:', error))
    .catch((error) => console.log('error', error))
    .finally(() => console.log('finally'));

function getData() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                handleData(data);
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}
function handleData(resp) {
    console.log('Data', resp);
}

getData();
