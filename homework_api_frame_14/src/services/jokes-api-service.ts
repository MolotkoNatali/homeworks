import axios, { AxiosInstance } from 'axios';
import { JokeDto } from '../dtos/joke.dto';

export class JokesApiService {
    private apiClient: AxiosInstance;

    constructor() {
        this.apiClient = axios.create({
            baseURL: 'https://official-joke-api.appspot.com',
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // 1. Fetch Random Joke
    public async getRandomJoke(): Promise<JokeDto> {
        const response = await this.apiClient.get('/random_joke');
        return response.data;
    }

    // 2. Fetch Multiple Random Jokes
    public async getRandomJokes(count: number): Promise<JokeDto[]> {
        const jokes: JokeDto[] = [];
        for (let i = 0; i < count; i++) {
            const response = await this.apiClient.get('/random_joke');
            jokes.push(response.data);
        }
        return jokes;
    }

    // 3. Fetch Joke By ID
    public async getJokeById(id: string): Promise<JokeDto> {
        const response = await this.apiClient.get(`/jokes/${id}`);
        return response.data;
    }

    // 4. Fetch Joke Types
    public async getJokeTypes(): Promise<string[]> {
        const response = await this.apiClient.get('/types');
        return response.data;
    }

    // 5. Fetch Jokes by Type
    public async getJokesByType(type: string): Promise<JokeDto[]> {
        const validTypes = ['programming', 'general', 'miscellaneous', 'knock-knock'];
        
        if (!validTypes.includes(type)) {
            throw new Error(`Invalid joke type: ${type}`);
        }
    
        const url = `/jokes/${type}`;
        console.log('Making request to:', url);
    
        const response = await this.apiClient.get(url);
        return response.data;
    }
}

