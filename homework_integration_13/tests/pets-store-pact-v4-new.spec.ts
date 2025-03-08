import { expect } from 'chai';
import * as path from 'path';
import { MatchersV3, Verifier, PactV4, SpecificationVersion } from '@pact-foundation/pact';
import { PetStoreService } from '../src/services/pet-store.service';
import { OrderDto } from '../src/models/order.dto';
const { like } = MatchersV3;

describe('PactV4 PetsStore consumer tests', () => {
    let petStoreService: PetStoreService;

    const provider = new PactV4({
        consumer: 'Pets-Web-v4',
        provider: 'Pets-API-v4',
        spec: SpecificationVersion.SPECIFICATION_VERSION_V4
    });

    const orderExample: OrderDto = new OrderDto(
        1234,
        1002,
        1,
        '2025-03-08T10:00:00Z',
        'placed',
        true
    );

    const EXPECTED_ORDER_BODY = like(orderExample);

    // Test 1: Create a store order
    describe('create /store/order', () => {
        it('creates a new order', () => {
            return provider
                .addInteraction()
                .given('order interaction')
                .uponReceiving('create a new store order')
                .withRequest('POST', '/v2/store/order', (builder) => {
                    builder.headers({ Accept: 'application/json', 'Content-Type': 'application/json' });
                    builder.jsonBody(orderExample);
                })
                .willRespondWith(200, (builder) => {
                    builder.headers({ 'Content-Type': 'application/json' });
                    builder.jsonBody(EXPECTED_ORDER_BODY);
                })
                .executeTest(async (mockServer) => {
                    petStoreService = new PetStoreService(mockServer.url);
                    const responsePost = await petStoreService.createOrder(orderExample);
                    expect(responsePost.data).to.deep.eq(orderExample);
                });
        });
    });

    // Test 2: Get a store order by ID
    describe('get /store/order/{orderId}', () => {
        it('returns the requested order by ID', () => {
            return provider
                .addInteraction()
                .uponReceiving('get a store order by ID')
                .withRequest('GET', '/v2/store/order/1234', (builder) => {
                    builder.headers({ Accept: 'application/json' });
                })
                .willRespondWith(200, (builder) => {
                    builder.headers({ 'Content-Type': 'application/json' });
                    builder.jsonBody(EXPECTED_ORDER_BODY);
                })
                .executeTest(async (mockServer) => {
                    petStoreService = new PetStoreService(mockServer.url);
                    const response = await petStoreService.getOrderById(1234);
                    expect(response.data).to.deep.eq(orderExample);
                });
        });
    });
});

describe('PetsStore Pact Verification v4: Provider', () => {
    it('validates the expectations of Matching Service', () => {
        return new Verifier({
            providerBaseUrl: 'https://petstore.swagger.io',
            pactUrls: [path.resolve(process.cwd(), './pacts/Pets-Web-v4-Pets-API-v4.json')]
        })
            .verifyProvider();
    });
});
