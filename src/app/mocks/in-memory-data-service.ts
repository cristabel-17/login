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
            pws: 123456,
            countryId: 1,
        },
        {
            id: 2,
            name: 'bastian',
            lastName:'rozas',
            userName:'dalsius',
            pws: 123456,
            countryId: 2,
        },
        {
            id: 3,
            name: 'jacinta',
            lastName:'pancracia',
            userName:'jcrancia',
            pws: 123456,
            countryId: 3,
        }
    ];

        const country = [
        {
            id: 1,
            name: 'Chile'
        },
        {
            id: 2,
            name: 'Perú'
        },
        {
            id: 3,
            name: 'Colombia'
        },
        {
            id: 4,
            name: 'Venezuela'
        },
    ];
    return {user, country};
    }
}
