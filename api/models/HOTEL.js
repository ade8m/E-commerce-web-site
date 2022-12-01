import mongoose from 'mongoose';
const { Schema } = mongoose;

const Hotelschema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        typ: String,
        
    
    },
    address: {
        type: String,
        required: true
    },
    distance :{
        type: String,
        required: true
    },
    photos: {
        type:[String],
        
    },
    description: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min:0,
        max:5
    },
    rooms: {
        type: [String],
    },
    cheapestprice: {
        type: Number,
        required: true
    },
    featured : {
        type: Boolean,
        required: false
    },
});
export default mongoose.model("Hotel",Hotelschema)
