

export interface Product {
    id:string,
    title:string,
    price:number,
    category:string,
    description:string,
    image:string,
    rating:{
        rate:number,
        count:number
    }
     
}