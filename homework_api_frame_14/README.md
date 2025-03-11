# Lesson 14 Api Test Automation Framework
During this workshop we tried to create API testing framework base that is based on Vitest

**Example contains:**

1. api-key auth example with The Cast API tests
2. Robot_Dreams request with JWT auth

Framework also includes .env file with the secrets definition and the code to maintain it

We have the following structure
1. Config service - responsible for reading/providing configuration 
2. Fetch api service - responsible for API communication using Fetch utility (implements IApiService)
3. Playwright api service - responsible for API communication using playwright APIRequestContext (implements IApiService)
4. World as a place where all the services and API objects are initialized. Is initialized in a global hook
5. API objects - objects though which we are requesting data from API using
6. DTOs - DTOs needed for communication

**Before run:**

Make sure you have created .env file that have the same variables defined as we have in .env.example

**Run**

install packages
```
npm i
```

to execute tests start 
```
npm run test
```
