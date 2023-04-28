export declare class ValidationException extends Error {
    erros: any;
    statusCode: number;
    constructor(message: string, erros: any, statusCode?: number);
}
