import mongoose from 'mongoose';

let cachedDb: any = null;
const MONGO_DB_URL = process.env.MONGO_DB_URL;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;

export const dbConnect = async () => {
    try {
        if (cachedDb) {
            return cachedDb;
        }
        if (!MONGO_DB_URL) {
            throw new Error('MONGO_DB_URL is required...');
        }

        if (!MONGO_USER) {
            throw new Error('MONGO_USER is required...');
        }

        if (!MONGO_PASSWORD) {
            throw new Error('MONGO_PASSWORD is required...');
        }

        mongoose.connection.on(
            'error',
            console.error.bind(console, 'MongoDB connection error 💥💥💥')
        );

        mongoose.connection.once('open', () => {
            console.log('DB connected successfully ~ 🚀🚀🚀');
        });

        cachedDb = await mongoose.connect(MONGO_DB_URL, {
            user: MONGO_USER,
            pass: MONGO_PASSWORD,
            // connectTimeoutMS: 60000,
            // serverSelectionTimeoutMS: 60000,
            dbName: 'elera',
        });

        return mongoose.connection;
    } catch (error) {
        console.log('Error while connecting mongodb ~ 💥💥💥', error);
    }
};
