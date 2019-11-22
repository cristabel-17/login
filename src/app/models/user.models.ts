
export class User 
{
    id: number;
    name: string;
    lastName: string;
    userName: string;
    pws: string;
    countryId: number;

    constructor(
        name?: string,
        lastName?: string,
        userName?: string,
        pws?: string,
        countryId?: number)
        {
            this.name = name;
            this.lastName = lastName;
            this.userName = userName;
            this.pws = pws;
            this.countryId = countryId;
        }
}
