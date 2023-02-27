import axios from "axios"
import { baseURL, bookRoute, getHeader } from "./config"

export const getAllBooks = async()=>{
    return await axios.get(`${baseURL}${bookRoute}`,getHeader()).then((res)=>{
        return res.data;
    }).catch((err)=>{
        return {err:"error occurred"}
    })
}


export const getFilteredBooks = async(filter)=>{
    return await axios.get(`${baseURL}${bookRoute}/filter`,filter,getHeader()).then((res)=>{
        return res.data;
    }).catch((err)=>{
        return {err:"error occurred"}
    })
}

export const getBookById = async(id)=>{
    return await axios.get(`${baseURL}${bookRoute}/${id}`,getHeader()).then((res)=>{
        return res.data;
    }).catch((err)=>{
        return {err:"error occurred"}
    })
}

// export const getwishlistedbooksbyid = async(id)=>{
//     return await axios.get( tobedone  ,getHeader()).then((res)=>{
//         return res.data;
//     }).catch((err)=>{
//         return {err:"error occurred"}
//     })
// }

// export const getrecommendedbooksbyid = async(id)=>{
//     return await axios.get( tobedone  ,getHeader()).then((res)=>{
//         return res.data;
//     }).catch((err)=>{
//         return {err:"error occurred"}
//     })
// }

// export const getreadbooksbyid = async(id)=>{
//     return await axios.get( tobedone  ,getHeader()).then((res)=>{
//         return res.data;
//     }).catch((err)=>{
//         return {err:"error occurred"}
//     })
// }