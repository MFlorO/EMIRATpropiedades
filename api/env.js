//EMAIL JS
const PORT = process.env.PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;


//Cloudinary
const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
const UPLOAD_PRESET = process.env.UPLOAD_PRESET;




//GOOGLEMAPS
const API_KEY_GOOGLEMAPS = process.env.API_KEY_GOOGLEMAPS;





module.exports = {
    PORT,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME,
    DB_PORT,
    CLOUDINARY_NAME,
    CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET,
    UPLOAD_PRESET,
    API_KEY_GOOGLEMAPS
};
  