import axios, { AxiosPromise } from 'axios';
import { OrderDto } from '../models/order.dto';

export class PetStoreService {
    public constructor(private url: string) {}

    public createOrder = (order: OrderDto): AxiosPromise => {
        return axios.request({
            baseURL: this.url,
            headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
            method: 'POST',
            url: '/v2/store/order',
            data: order
        });
    };

    public getOrderById = (orderId: number): AxiosPromise => {
        return axios.request({
            baseURL: this.url,
            headers: { Accept: 'application/json' },
            method: 'GET',
            url: `/v2/store/order/${orderId}`
        });
    };
}
