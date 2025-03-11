import { expect } from 'chai';
import { JokesApiService } from '../src/services/jokes-api-service';

describe('Jokes API Service tests', function () {
    let jokesApiService: JokesApiService;
    const context: Record<string, unknown> = {};

    before(function () {
        jokesApiService = new JokesApiService();
    });

    // 1. Fetch Random Joke Test
    it('should fetch a random joke and verify it contains the required properties', async function () {
        const randomJoke = await jokesApiService.getRandomJoke();

        expect(randomJoke).to.have.property('id');
        expect(randomJoke).to.have.property('type');
        expect(randomJoke).to.have.property('setup');
        expect(randomJoke).to.have.property('punchline');

        context.jokeId = randomJoke.id;
    });

    // 2. Fetch Multiple Random Jokes Test
    it('should fetch multiple random joke objects and verify their properties', async function () {
        const randomJokes: unknown[] = await jokesApiService.getRandomJokes(5);
        
        expect(randomJokes).to.be.an('array');
        expect(randomJokes.length).to.equal(5);

        randomJokes.forEach((joke) => {
            expect(joke).to.have.property('id');
            expect(joke).to.have.property('type');
        });
    });

    // 3. Fetch Joke By ID Test
    it('should fetch a joke by its ID and verify its properties', async function () {
        const jokeId = context.jokeId as string;
        const jokeById = await jokesApiService.getJokeById(jokeId);

        expect(jokeById).to.have.property('id').that.equals(jokeId);
        expect(jokeById).to.have.property('type');
        expect(jokeById).to.have.property('setup');
        expect(jokeById).to.have.property('punchline');
    });

    // 4. Fetch Joke Types Test
    it('should fetch all available joke types and verify their structure', async function () {
        const jokeTypes: string[] = await jokesApiService.getJokeTypes();

        expect(jokeTypes).to.be.an('array');
        expect(jokeTypes.length).to.be.greaterThan(0);
        expect(jokeTypes).to.include('general');
    });

    // 5. Verify Random Joke Contains Required Properties
    it('should fetch a random joke and verify it contains the required properties', async function () {
        const randomJoke = await jokesApiService.getRandomJoke();

        expect(randomJoke).to.have.property('setup');
        expect(randomJoke).to.have.property('punchline');
        expect(randomJoke).to.have.property('type');
    });
});