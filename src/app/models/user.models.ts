
export class User 
{
    name: string;
    lastName: string;
    userName: string;
    pws: string;

    constructor(
        name?: string,
        lastName?: string,
        userName?: string,
        pws?: string,)
        {
            this.name = name;
            this.lastName = lastName;
            this.userName = userName;
            this.pws = pws;
        }
}
