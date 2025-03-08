import { PactV4, MatchersV3, SpecificationVersion, Verifier } from '@pact-foundation/pact';
import { expect as expectChai } from 'chai';
import * as path from 'path';
import { ImageService } from '../src/services/image.service';
import { VoteService } from '../src/services/vote.service';
import { FavouriteService } from '../src/services/favourite.service';
import { ImageDto } from '../src/models/image.dto';
import { VoteDto } from '../src/models/vote.dto';
import { FavouriteDto } from '../src/models/favourite.dto';

describe('Pact V4 - Images, Votes, and Favourites', () => {
    let imageService: ImageService;
    let voteService: VoteService;
    let favouriteService: FavouriteService;

    // request API key here: https://thecatapi.com/
    const xApiKey = 'live_rediOtJA6uQVOLEUWougeZwMShHl217aBhFhLQrFu46blj33gqWdvygoBxT37Sy9';

    const provider = new PactV4({
        consumer: 'cat-api-consumer-v4',
        provider: 'cat-api-provider-v4',
        spec: SpecificationVersion.SPECIFICATION_VERSION_V4
    });

    const imageExample: Partial<ImageDto[]> = [
        {
            'id': 'Urb5s2Zhy',
            'url': 'https://cdn2.thecatapi.com/images/Urb5s2Zhy.jpg',
            'width': 640,
            'height': 391,
            'sub_id': 'VILE',
            'created_at': '2025-02-27T18:27:29.000Z',
            'original_filename': 'the_cat_1.jpg',
            'breed_ids': 'abob,ycho',
            'breeds': [],
            mime_type: '',
            entities: [],
            animals: [],
            categories: []
        }
    ];

    const voteExample: VoteDto = {
        image_id: 'Urb5s2Zhy',
        value: 1,
        userId: '',
        itemId: '',
        voteValue: 0,
        createdAt: ''
    };

    const favouriteExample: FavouriteDto = {
        image_id: 'Urb5s2Zhy',
        userId: '',
        itemId: '',
        createdAt: '',
        updatedAt: '',
        value: 0,
        favouriteDTO: ''
    };

    const expectedImageBody = MatchersV3.like(imageExample);
    const expectedVoteBody = MatchersV3.like({
        id: MatchersV3.string,
        image_id: voteExample.image_id,
        value: voteExample.value
    });


    // Test 1: Test fetching images
    describe('Images Pact V4', () => {
        it('should return images from the provider', () => {
            provider
                .addInteraction()
                .given('images exist')
                .uponReceiving('A request to get images')
                .withRequest('GET', '/images', (builder) => {
                    builder.headers({
                        accept: 'application/json;charset=utf-8',
                        'x-api-key': xApiKey
                    });
                })
                .willRespondWith(200, (builder) => {
                    builder.headers({
                        'Content-Type': 'application/json;charset=utf-8'
                    });
                    builder.jsonBody(expectedImageBody);
                })
                .executeTest(async (mockServer) => {
                    imageService = new ImageService(mockServer.url, xApiKey);
                    const response = await imageService.getMyImages();
                    const filteredResponse = response.find(
                        (x) => x.id === (imageExample[0] as ImageDto)?.id
                    ) as ImageDto;

                    expectChai(filteredResponse).to.contain.keys(
                        'id',
                        'url',
                        'width',
                        'height',
                        'sub_id',
                        'created_at',
                        'original_filename',
                        'breed_ids',
                        'breeds'
                    );
                    expectChai(filteredResponse.id).to.be.a('string');
                    expectChai(filteredResponse.url).to.be.a('string');
                    expectChai(filteredResponse.breed_ids).to.be.a('string');
                    expectChai(filteredResponse.width).to.be.a('number');
                    expectChai(filteredResponse.height).to.be.a('number');
                    expectChai(filteredResponse.sub_id).to.be.a('string');
                    expectChai(filteredResponse.breeds).to.be.an('array');
                });
        });
    });

    // Test 2: Test adding a vote for an image
    describe('Votes Pact V4', () => {
        it('should add a vote for the image', () => {
            provider
                .addInteraction()
                .given('a vote exists for an image')
                .uponReceiving('A request to vote for an image')
                .withRequest('POST', '/votes', (builder) => {
                    builder.headers({
                        accept: 'application/json;charset=utf-8',
                        'x-api-key': xApiKey
                    });
                    builder.jsonBody({
                        image_id: voteExample.image_id,
                        value: voteExample.value
                    });
                })
                .willRespondWith(200, (builder) => {
                    builder.headers({
                        'Content-Type': 'application/json;charset=utf-8'
                    });
                    builder.jsonBody(expectedVoteBody);
                })
                .executeTest(async (mockServer) => {
                    voteService = new VoteService(mockServer.url, xApiKey);
                    const response = await voteService.voteOnImage(voteExample.image_id, voteExample.value === 1 ? 'up' : 'down');

                    expectChai(response.message).to.equal('Vote added successfully');
                });
        });
    });

    // Test 3: Test adding an image to favourites
    describe('Favourites Pact V4', () => {
        it('should add the image to the favourites list', () => {
            provider
                .addInteraction()
                .given('an image can be added to favourites')
                .uponReceiving('A request to add an image to favourites')
                .withRequest('POST', '/favourites', (builder) => {
                    builder.headers({
                        accept: 'application/json;charset=utf-8',
                        'x-api-key': xApiKey
                    });
                    builder.jsonBody({
                        image_id: favouriteExample.image_id
                    });
                })
                .willRespondWith(200, (builder) => {
                    builder.headers({
                        'Content-Type': 'application/json;charset=utf-8'
                    });
                    builder.jsonBody({ message: 'Image added to favourites' });
                })
                .executeTest(async (mockServer) => {
                    favouriteService = new FavouriteService(mockServer.url, xApiKey);
                    const response = await favouriteService.addFavourite(favouriteExample.image_id);

                    expectChai(response.message).to.equal('Image added to favourites');
                });
        });
    });


    // Test 4: Verify the provider interactions
    describe('Pact V4 verification', () => {
        it('verify provider', () => {
            return new Verifier({
                providerBaseUrl: 'https://api.thecatapi.com/v1',
                pactUrls: [path.resolve(process.cwd(), './pacts/image-consumer-v4-image-provider-v4.json')]
            })
                .verifyProvider()
                .then(() => {
                    console.log('Pact Verification Complete!');
                });
        });
    });
});
