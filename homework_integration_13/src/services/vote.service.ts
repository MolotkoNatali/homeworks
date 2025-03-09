import { VoteDto } from '../models/vote.dto';

export class VoteService {
    private _headers = {
        'x-api-key': this._token,
        accept: 'application/json'
    };

    public constructor(private _baseUrl: string, private _token: string) {}

    public async createVote(voteData: VoteDto): Promise<unknown> {
        const response = await fetch(`${this._baseUrl}/vote`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(voteData)
        });

        if (!response.ok) {
            throw new Error('Error creating vote');
        }

        return await response.json();
    }

    public async getVotes(itemId: string): Promise<unknown> {
        const response = await fetch(`${this._baseUrl}/votes/${itemId}`, {
            headers: this._headers
        });

        if (!response.ok) {
            throw new Error('Error fetching votes');
        }

        return await response.json();
    }

    public async voteOnImage(imageId: string, vote: string): Promise<{ message: string }> {
        const voteData: VoteDto = {
            userId: 'VILE',
            itemId: imageId,
            voteValue: vote === 'up' ? 1 : -1,
            createdAt: new Date().toISOString(),
            image_id: '',
            value: 0
        };

        const response = await fetch(`${this._baseUrl}/votes`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(voteData)
        });

        if (!response.ok) {
            throw new Error('Error voting on image');
        }

        return await response.json();
    }
}

