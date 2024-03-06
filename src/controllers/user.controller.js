import { asyncHandler } from "./utils/asyncHandler.js"
import { ApiError } from "..utils/ApiError"

const registerUser = asyncHandler( async(req, res) =>{
    //get user detailss from frontend
    //valodation - note empty
    //check if user already exits: username, email
    //check form images, check for avatar
    //uppload them to cloudinary, avatar
    //create user object - create entry in db
    //remove password and refresh token field from response
    //check for user creation
    //return response

    const {fullName, email, username, password} = req.body
    console.lof("email:" , email);

    if(fullName == ""){
        throw new ApiError(400,  "fullname is required")
    }
})

export { registerUser }