import 'dotenv/config'
import InfoRequestModel from './info-request-model.js';

//Set up mongoose connection
import mongoose from 'mongoose';

let mongoDB = process.env.ENV == "PROD" ? process.env.DB_CLOUD_URI : process.env.DB_LOCAL_URI;

mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export async function createInfoRequest(requester, requestee, scopes) {
    return new InfoRequestModel({
        requester_uinfin: requester,
        requestee_uinfin: requestee,
        scopes: scopes
    })
}
