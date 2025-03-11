export interface AuthConfigDto {
    jokesApi: {
        apiKey: string;
    };
}

export interface ApiConfigDto {
    jokesApi: {
        baseUrl: string;
    };
}

export interface ConfigDto {
    auth: AuthConfigDto;
    api: ApiConfigDto;
}
