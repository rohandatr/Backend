import { asyncHandler } from "./utils/asyncHandler.js"
import { ApiError } from "../ApiError.jsutils/ApiError"
import { User } from "../models/user.model.js"

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

    if( [fullName, email, username, password].some((field) => field?.trim() === ""))
    {
        throw new ApiError(400, "All fields are required")
    }

// -----------------------------------------------------

    const existedUser = User.findOne({
        $or: [{ username }, { email }]
    })

    if(existedUser){
        throw new ApiError(409, "User with email or username existed")
    }

    
})

export { registerUser }