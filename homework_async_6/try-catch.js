class apiError extends Error{
    constructor(message) {
        super(message);
        this.name='apiError';
    }
}

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new apiError('Can not fetch data from pointed url');
    }
    return response.json();
}

async function handleRequests() {
    const invalidUrl = 'https://invalid-api.example.com';
    const validUrlFail = 'https://jsonplaceholder.typicode.com/todoss/11';

    try {
        console.log('Attempting to fetch from invalid URL...');
        await fetchData(invalidUrl);
    } catch (error) {
        console.error('Error:', error.message);

        try {
            console.log('Attempting to fetch from valid URL...');
            const data = await fetchData(validUrlFail);
            console.log('Data from valid URL:', data);
        } catch (error) {
            console.error('Error:', error.message);

            throw new apiError('Both API requests failed.');
        }

    }
}

handleRequests().catch((error) => {
    console.error('Final Error:', error.message);
});
