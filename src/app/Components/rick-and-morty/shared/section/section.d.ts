interface Info {
    count: number;
    pages: number;
    next: string;
    prev?: any;
}
export interface IDataREST {
    info?: Info;
    results: any[];
}