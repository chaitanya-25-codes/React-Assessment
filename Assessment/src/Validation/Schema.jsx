import {z} from "zod"
const Schema = z.object({
    firstName:z.string().toLowerCase().min(1,{message:"FirstName is required"}),
    Email:z.string().email({message:"The email is required"}),
    Role:z.string().min(1,{message:"Role is required"}),
    checkbox:z.boolean({message:"This feild is required"})
})
export default Schema;