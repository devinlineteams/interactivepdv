import { HtmlHTMLAttributes } from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export type MessageProps ={
    msg:string,
    type:'' | 'buscando...'
}
export interface  SearchComponentProps{
    inputs:InputProps[]
    buttons:ButtonProps[]
    message?:MessageProps
}
