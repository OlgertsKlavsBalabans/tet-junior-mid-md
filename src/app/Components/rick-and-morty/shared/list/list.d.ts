export interface IListOptions {
    objectPropertyName: string;
    name: string;
    link?: string;
    nestedOptions?:IListOptions[];
    arrayLink?: string;
}
