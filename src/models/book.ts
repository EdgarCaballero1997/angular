export class Book {
    constructor(public id_book: string = '', public id_user: string = '', public title: string, public type: string, public author: string, public price: string, public photo: string){
        //Añado los parametros "id_book", "id_user" y "price" como tipo string, pero posteriormente los transformaré en Number.
    }
}