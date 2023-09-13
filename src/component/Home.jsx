
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import PassengerTabel from "./PassangerTabel";
import PassengerInput from "./passengerInput";

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

const Home = () => {

    const [data, setData] = useState(initialValue);


    // Hapus Data 
    const hapusPengunjung = (id) => {
        setData((oldData) => oldData.filter((item) => {
            return item.id !== id;
        }))
    }


    // tambah Pengunjung 
    const tambahPengunjung = (newPengunjung) => {
        const tambahData = {id : uuidv4, ...newPengunjung};

        setData((oldData) => [...oldData, tambahData])
    }


    return (
        <div>
            <h1>Halaman Penumpang</h1>
            <PassengerTabel datas={data} hapusPengunjung={hapusPengunjung} />
            <PassengerInput tambahPengunjung={tambahPengunjung} />
        </div>
    )
}


export default Home;