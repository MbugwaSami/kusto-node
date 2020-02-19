export interface Error {
    name: string;
    message: string;
    stack?: string;
}


export interface KustoResult  {
    tables: Array<any>;
    tableNames: string[];
    primaryResults: Array<object>;
}