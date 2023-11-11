export class User{
    public id_user: string = "";
    public photo: string = "";
    public password: string = "";
    constructor(public name: string, public surname: string, public email: string, public url: string){}
}