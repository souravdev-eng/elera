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

    let body;

    try {
        body = event.body ? JSON.parse(event.body) : {};
        const course = Course.build({
            title: body?.title,
            author: body.author,
            category: body.category,
            description: body.description,
            image: body.image,
            price: body.price,
            rating: body.rating,
            totalStudent: body.totalStudent,
        });

        await course.save();

        if (course) {
            cb(null, sendResponse(201, { course }));
        } else {
            cb(
                null,
                sendResponse(400, {
                    error: 'Course is not created successfully',
                })
            );
        }
    } catch (error) {
        console.error('Error parsing event body', error);
        return cb(null, sendResponse(400, { message: 'Invalid request body' }));
    }
};
