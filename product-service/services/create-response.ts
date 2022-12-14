export enum STATUS_CODE {
    NOT_FOUND = 404,
    INTERNAL_ERROR = 501,
    SUCCESS = 200
}

export type Response = {
    statusCode: STATUS_CODE,
    headers: Record<string, any>,
    body: string,
}

export type ErrorObject = {
    message: String,
    errorCode: Omit<STATUS_CODE, 'SUCCESS'>
}

export function createResponse(
    data: Record<string, any> | ErrorObject | null | any[], 
    isError: boolean, 
    statusCode: STATUS_CODE,
    message?: string): Response {
    if(isError) {
        return {
            statusCode: statusCode,
            body: JSON.stringify({ err: data, message: (data as ErrorObject)?.message ?? message ?? 'Unexpected error occured' }),
            headers: {...getHeaders()}
        }
    }

    return {
        statusCode: statusCode,
        body: JSON.stringify(data),
        headers: {...getHeaders()}
    }
}

function getHeaders():Record<string, any> {
    return {
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*'
    }
}