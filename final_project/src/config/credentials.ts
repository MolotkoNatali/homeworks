import * as dotenv from 'dotenv';
dotenv.config();

export const credentials = {
    email: process.env.EMAIL || '',
    password: process.env.PASSWORD || ''
};
