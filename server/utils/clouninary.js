import cloudinary from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME || 'de3zhsp9r',
    api_key: process.env.CLOUDINARY_API_KEY || 939985184238424,
    api_secret: process.env.CLOUDINARY_API_SECRET ||'wzZunOYRO9xZlQGk9vBXdZQW4n0'
});
// cloudinary upload image
export const cloudinaryUploadImage = async (imagePath) => {
    try {
        const data =await cloudinary.uploader.upload(imagePath, {
            resource_type: 'auto'
        })
        return data;
    }
    catch (error) {
        return error;
    }
}
// cloudinary remove image
export const cloudinaryRemoveImage = async (imagePublicID) => {
    try {
        const result = await cloudinary.uploader.destroy(imagePublicID, {
            resource_type: 'auto'
        })
        return result;
    }
    catch (error) {
        return error;
    }
}