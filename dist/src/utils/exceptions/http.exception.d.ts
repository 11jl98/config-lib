export declare class BadRequestException extends Error {
    statusCode: number;
    constructor(message: string, statusCode?: number);
}
