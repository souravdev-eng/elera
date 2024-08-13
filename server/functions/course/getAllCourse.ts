import { APIGatewayEvent, Context, APIGatewayProxyCallback } from 'aws-lambda';
import { sendResponse } from '../../utils/sendResponse';
import { dbConnect } from '../../db/dbConnect';
import Course from '../../models/courseModel';

export const handler = async (
    event: APIGatewayEvent,
    context: Context,
    cb: APIGatewayProxyCallback
) => {
    context.callbackWaitsForEmptyEventLoop = false;
    console.log('event', event);
    await dbConnect();

    const courses = await Course.find({});
    if (courses) {
        cb(null, sendResponse(200, { course: courses }));
    } else {
        cb(null, sendResponse(200, { course: [] }));
    }
};
