fetch('https://catfact.ninja/docs/api-docs.json')
    .then((response) => {
        return response.json();
    })
    .then((error) => console.log('body:', error))
    .catch((error) => console.log('error', error))
    .finally(() => console.log('finally'));

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log('response', response);

    const json = await response.json();
    console.log('body', json);
    return json;
}

async function handleData() {
    const data = await getData();
    console.log('Data', data);
}
async () => {
    console.log('before start');
    await handleData();
    console.log('after start');
};
