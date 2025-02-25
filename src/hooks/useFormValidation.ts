import { useState, useEffect } from "react";
import { InputProps } from "@/types";

export const userFormValidation = (inputs:InputProps[])=> {
    const [ formValues, setFormValues] = useState(inputs.map((input) => input.value || ''))
    const [formValid, setFormValid] = useState(false)

    useEffect(()=>{
        const allFieldsValid = inputs.every((input, index) =>{
            if(input.type === 'email'){
                return /\S+@\S+\.\S+/.test(String(formValues[index]))
            }
            if(input.type =='password'){
                return String(formValues[index]).length > 7
            }
            return true
                
        })
        setFormValid(allFieldsValid);
    }, [formValues, inputs]);

    const handleChange = (index:number, value:string) =>{
            setFormValues((prevValues) => {
                const newValue = [...prevValues]
                    newValue[index] =value;
                    return newValue;
            })
    }

    return { formValues, formValid, handleChange}
}