import {InMemoryDbService} from 'angular-in-memory-web-api'

export class InMemoryDataService implements InMemoryDbService
{
    createDb()
    {
        const user = [
        {
            id: 1,
            name: 'juanito',
            lastName:'bandolero',
            userName:'juantopo',
            pws: 123456
        },
        {
            id: 2,
            name: 'bastian',
            lastName:'rozas',
            userName:'dalsius',
            pws: 123456
        },
        {
            id: 3,
            name: 'jacinta',
            lastName:'pancracia',
            userName:'jcrancia',
            pws: 123456
        }
    ];
    return {user};
    }
}
