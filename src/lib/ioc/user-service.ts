import { inject, injectable } from 'inversify';
import { HttpClient } from './http-client';
import { TYPES } from './types';

@injectable()
export class UsersService {

    // constructor(@inject(TYPES.HttpClient) private http: HttpClient) {
    // }

    constructor(public http: HttpClient) {
    }

    async getUsers(): Promise<any> {
        // return this.http.get('https://jsonplaceholder.type');
        const users = await this.http.get('http://jsonplaceholder.typicode.com/users');
        return users;
    }
}
