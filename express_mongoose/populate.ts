import mongoose, { ConnectOptions } from 'mongoose';
import CarModel, { ICar } from './models/carModel';
import MechanicModel, { IMechanic } from './models/mechanicModel';
import ReviewModel, { IReview } from './models/reviewModel';


const options: ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
};

mongoose
    .connect(process.env.MONGODB_URI as string, options)
    .then(async () => {
        console.log('MongoDB connected');
        await Promise.all([CarModel.deleteMany({}), MechanicModel.deleteMany({}), ReviewModel.deleteMany({})]);

        const mechanics: IMechanic[] = [
            {
                name: 'Joe Mechanic',
                location: '123 Main St',
                phoneNumber: '555-1234',
            },
            {
                name: "Jane Mechanic",
                location: '456 Elm St',
                phoneNumber: '555-5678',
            },
        ];
        const savedMechanics = await MechanicModel.insertMany(mechanics);

        const cars: ICar[] = [
            {
                make: 'Toyota',
                model: 'Camry',
                year: 2022,
                color: 'silver',
                mechanics: [savedMechanics[0]._id, savedMechanics[1]._id],
            },
            {
                make: 'Honda',
                model: 'Accord',
                year: 2022,
                color: 'black',
                mechanics: [savedMechanics[1]._id],
            },
        ];
        const savedCars = await CarModel.insertMany(cars);

        const reviews: IReview[] = [
            {
                car: savedCars[0]._id,
                mechanic: savedCars[0].mechanics[0],
                rating: 4,
                comment: 'Great service!',
            },
            {
                car: savedCars[1]._id,
                mechanic: savedCars[1].mechanics[0],
                rating: 5,
                comment: 'Fantastic job!',
            },
        ];
        await ReviewModel.insertMany(reviews);

        console.log('Database seeded');
        mongoose.connection.close();
    })
    .catch((error) => {
        console.error('Error seeding database:', error);
        mongoose.connection.close();
    });
