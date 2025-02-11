async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Can't fetch data from ${url}`);
    }
    return response.json();
}

async function handleRequests() {
    const invalidUrl = 'https://invalid-api.example.com';
    const validUrl = 'https://jsonplaceholder.typicode.com/todos/1';

    try {
        console.log('Attempting to fetch from invalid URL...');
        await fetchData(invalidUrl);
    } catch (error) {
        console.error('Error:', error.message);

        try {
            console.log('Attempting to fetch from valid URL...');
            const data = await fetchData(validUrl);
            console.log('Data from valid URL:', data);
        } catch (error) {
            console.error('Error:', error.message);

            throw new Error('Both API requests failed.');
        }
    }
}

handleRequests().catch((error) => {
    console.error('Final Error:', error.message);
});
