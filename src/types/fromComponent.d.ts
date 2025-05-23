import { HtmlHTMLAttributes } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type MessegaPorps ={
    msg:string,
    type: 'error' | 'success'
}

export interface FormComponentProps {
    inputs:InputProps[]
    buttons:ButtonProps[]
    message?:MessegaPorps
}
