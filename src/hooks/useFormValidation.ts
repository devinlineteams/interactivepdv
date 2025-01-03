import { useState, useEffect } from "react";
import { InputProps } from "@/types";

export const userFormVaklidation = (inputs:InputProps[])=> {
    const [ formValue, setFormValue] = useState(inputs.map((input) => input.value || ''))
    const [formValid, setFormValid] = useState(false)

    useEffect(()=>{
        const allFieldsValid = inputs.every((input, index) =>{
            if(input.type === 'email'){
                return /\S+@\S+\.\S+/.test(String(formValue[index]))
            }
            if(input.type =='password'){
                return String(formValue[index]).length > 7
            }
            return true
                
        })
        setFormValid(allFieldsValid);
    }, [formValue, inputs]);

    const handleChange = (index:number, value:string) =>{
            setFormValue((prevValues) => {
                const newValue = [...prevValues]
                    newValue[index] =value;
                    return newValue;
            })
    }

    return { formValue, formValid, handleChange}
}