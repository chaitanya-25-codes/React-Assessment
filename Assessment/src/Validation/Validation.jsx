import Schema from "./Schema";
const Validation = ({step,formData})=>{
    if(step===1){
        const result = Schema.pick({firstName:true,Email:true}).safeParse(formData)
        if(!result.success){
            const errors = {}
            result.error.issues.map((issue)=>{
                if(!errors[formData.name]){
                    errors[formData.name] = issue.message
                }
            })
            return errors
        }
    }else{
        const result=Schema.pick({Role:true,checkbox:true}).safeParse(formData)
        if(!result.success){
            const errors = {}
            result.error.issues.map((issue)=>{
                if(!errors[formData.name]){
                    errors[formData.name] = issue.message
                }
            })
            return errors
        }
    }

}
export default Validation