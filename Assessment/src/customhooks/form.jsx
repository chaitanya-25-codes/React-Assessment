import { useState } from "react";
const UseForm = ({step,formDetails,formData,setFormData})=>{
    const currentStepDetails = formDetails.filter((item)=>item[0]===step);
    console.log(currentStepDetails)
    const handleChange = (e)=>{
        setFormData(prev=>(
            {
                ...prev,
                [name]:e.target.value
            }
        ))

    }
    return(
        <>
        {currentStepDetails.map((step)=>{
                console.log(step)
                if(step.type === "select"){
                    return(
                    <select name={step.name} value={formData[step.name]} onChange={handleChange} key={step[0]}>
                        <option value=""></option>
                        <option>Developer</option>
                        <option>Designer</option>
                        <option>Manager</option>
                    </select>
                    )
                }else{
                    return(
                    <>
                    <div key={step[0]}>
                      <label htmlFor={step.name}>{step.label}</label>
                      <input type={step.type} name={step.name} onChange={handleChange} value={formData[step.name]}/>
                    </div>
                    </>
                    )
                }
            })}
            
        </>
            

    )


}
export default UseForm