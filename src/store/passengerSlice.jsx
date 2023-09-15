import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"

const initialValue = [
    {
        id : uuidv4(),
        nama : "Muhamet Bayazid",
        umur : 20,
        jenisKelamin : "Pria"
    },
    {
        id : uuidv4(),
        nama : "Zubair Kirani",
        umur : 21,
        jenisKelamin : "Wanita"
    },
    {
        id : uuidv4(),
        nama : "Mehmet Jonsena",
        umur : 20,
        jenisKelamin : "Pria"
    },
    {
        id : uuidv4(),
        nama : "Murad Baraq",
        umur : 20,
        jenisKelamin : "Pria"
    },
    {
        id : uuidv4(),
        nama : "Niar Biara",
        umur : 20,
        jenisKelamin : "Wanita"
    },
]

// Mendeklarasi Reducer 
export const passengerSlice = createSlice({
    name : 'passanger',
    initialState : {
        passangers : initialValue
    },
    // reducers
    reducers:{
        hapusPengunjung : (state, action) => {
            state.passangers = state.passangers.filter((item) => {
                return item.id !== action.payload;
            })
        }, 
        tambahPengunjung : (state, action) => {
            const tambahData = {id : uuidv4(), ...action.payload};
            state.passangers = [...state.passangers, tambahData]
        }
    }
})

export const {hapusPengunjung, tambahPengunjung} = passengerSlice.actions
export default passengerSlice.reducer