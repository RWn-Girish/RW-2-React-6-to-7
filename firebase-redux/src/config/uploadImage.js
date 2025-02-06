import axios from "axios";


export const uploadImage = async (imagePath) => {

    let uploadFile = new FormData();

    uploadFile.append("file", imagePath);
    uploadFile.append("cloud_name", "dheweokqn");
    uploadFile.append("upload_preset", "products");

    let response = await axios.post(`https://api.cloudinary.com/v1_1/dheweokqn/image/upload`, uploadFile);
    // console.log(response);
    return response.data.secure_url;
}