import { injectable } from 'inversify';

@injectable()
export class HttpClient {
    public port: number = 9999;
    public async get(url: string): Promise<any> {
        // return Promise.resolve({ user: 'mango' });
        const users = await fetch(url);
        return users.json();
    }
    //     get(url: string): Promise<any> {
    //         return fetch(url).then(data => data.json())
    //     }
}
