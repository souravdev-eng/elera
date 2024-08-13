import mongoose from 'mongoose';

enum Category {
    webdevelopment = 'web-development',
    mobile = 'mobile',
    uiux = 'ui/ux',
    ml = 'ml',
    cloud = 'cloud',
    dsa = 'dsa',
}

interface CourseAttars {
    title: string;
    image: string;
    description: string;
    price: number;
    rating: number;
    totalStudent: number;
    author: string;
    category: Category;
}

interface CourseDoc extends mongoose.Document {
    title: string;
    image: string;
    description: string;
    price: number;
    rating: number;
    totalStudent: number;
    author: string;
    category: Category;
}

interface CourseModel extends mongoose.Model<CourseDoc> {
    build(attars: CourseAttars): CourseDoc;
}

const courseSchema = new mongoose.Schema(
    {
        title: String,
        image: String,
        description: String,
        price: Number,
        rating: {
            type: Number,
            // min: 1,
            // max: 5,
        },
        totalStudent: Number,
        author: String,
        category: {
            type: String,
            enum: Category,
        },
    },
    {
        toJSON: {
            transform(_, ret) {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
            },
        },
    }
);

courseSchema.statics.build = (attars: CourseAttars) => {
    return new Course(attars);
};

const Course = mongoose.model<CourseDoc, CourseModel>('Course', courseSchema);

export default Course;
