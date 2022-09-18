import React from "react";
import axios from "axios";
import {Book} from '../../model/book'

type GetBooks={
    data: Book[]
}

export async function Getall() {
    try {
        const {data, status} = await axios.get<GetBooks>( 'http://localhost:8080/books')
        console.log(data) 
        console.log('status', status) 
        return data
    } catch (error) {
       if (axios.isAxiosError(error)) {
        console.log(error)
       } 
       return error
    }
}