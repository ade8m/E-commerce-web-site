import HOTEL from "../models/HOTEL.js"
export const createHotel =async (req,res,next) =>{
    const newhotel= new HOTEL(req.body)
    try{
        const savHotel= await newhotel.save()
        res.status(200).json(savHotel)
    }
    catch(err){
        next(err);
    }
}
export const updateHotel =async (req,res,next) =>{
    try {
        const updatehotel = await HOTEL.findByIdAndUpdate(req.params.id, { $set:req.body} ,{new:true});
        res.status(200).json(updatehotel);
        
    } catch (error) {
       next(err);
    }
}
export const deleteHotel =async (req,res,next) =>{
    try {
        await HOTEL.findByIdAndDelete(req.params.id,)
         res.status(200).json("Hotel has ben deleted.")
     }
    catch(err){
        next(err);
    }
}
export const getHotel =async (req,res,next) =>{
    try {
        const hotel = await HOTEL.findById(req.params.id)
        res.status(200).json(hotel);
    }
    catch(err){
        next(err);
    }
}
export const getallHotel = async (req,res,next) =>{
    try {
        const Hotels = await HOTEL.find();
        res.status(200).json(Hotels);
    }
    catch(err){
        next(err);
    }
};