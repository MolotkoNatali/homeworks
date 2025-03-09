import { FavouriteDto } from '../models/favourite.dto';

export class FavouriteService {
    private _headers = {
        'x-api-key': this._token,
        accept: 'application/json'
    };

    public constructor(private _baseUrl: string, private _token: string) {}

    public async addFavourite(imageId: string): Promise<{ message: string }> {
        const favouriteData: FavouriteDto = {
            userId: 'VILE',
            itemId: imageId,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            image_id: imageId,
            value: 0,
            favouriteDTO: ''
        };

        const response = await fetch(`${this._baseUrl}/favourites`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(favouriteData)
        });

        if (!response.ok) {
            throw new Error('Error adding to favourites');
        }

        return await response.json();
    }
}
