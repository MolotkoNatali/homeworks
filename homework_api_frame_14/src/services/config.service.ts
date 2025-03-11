import * as dotenv from 'dotenv-safe';
dotenv.config();

export class ConfigService {
    private apiKey: string;

    constructor() {
        this.apiKey = process.env.JOKE_API_KEY || '';
    }

    public getApiKey(): string {
        return this.apiKey;
    }
}
