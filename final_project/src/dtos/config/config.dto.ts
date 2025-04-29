import { AuthConfigDto } from './auth-config.dto';
import { ApiConfigDto } from './api-config.dto';

export interface ConfigDto {
    auth: AuthConfigDto;
    api: ApiConfigDto;
}
