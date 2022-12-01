import mongoose from 'mongoose';
const { Schema } = mongoose;

const Roomschema = new Schema(
    {
    title: {
        type: String,
        required: true,
        
    },
    price:{
        type:Number,
        required:true,
        
    },
    maxPeople: {
        type: Number,
        required: true
    },
    desc :{
        type: String,
        required: true,

    },
    roomNumber:[{number:Number, unvailableDates:{type:[Date]}}],

},

{timestamps:true}

);
export default mongoose.model("Room",Roomschema);
