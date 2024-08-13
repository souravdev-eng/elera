export const sendResponse = (statusCode: number, data: any) => {
    return {
        statusCode,
        body: JSON.stringify(data),
    };
};
