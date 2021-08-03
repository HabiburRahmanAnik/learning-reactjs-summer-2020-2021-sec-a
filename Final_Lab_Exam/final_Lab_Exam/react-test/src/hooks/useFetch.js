import { useEffect } from "react";

export const useFetch = (url, callback,callback2)=>{

    const getUserdata = async ()=>{
        callback2(true);
        const response = await fetch(url);
        const data = await response.json();
        callback2(false);
        return data;
    }

    useEffect(()=>{
       const getJsonData = async ()=> await getUserdata();
       getJsonData().then(data=>callback(data));
    }, []);
}