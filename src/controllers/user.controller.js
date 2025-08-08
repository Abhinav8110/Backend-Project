import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res)=>{
      console.log("Inside register user")
        res.status(200).json({
        message : "OK"
    })
})


export {registerUser}