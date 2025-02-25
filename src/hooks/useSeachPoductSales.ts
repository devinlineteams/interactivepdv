import { useState, useEffect } from "react";
import {InputSearchProsp} from "@/types";

export const userSearchProductosales = (inputs:InputSearchProsp)=> {

    const handleChangeSearch = ( value:string) =>{
        console.log(` os valores são: ${value}`)

    }

    return { handleChangeSearch}
}

