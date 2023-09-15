import { useState } from "react";
import { useDispatch } from "react-redux";
import { tambahPengunjung } from "../store/passengerSlice";


import InputNamaAtomic from "../atomic/inputNamaAtomic";
import InputUmurAtomic from "../atomic/InputUmurAtomic";
import RadioGenderAtomic from "../atomic/RadioGenderAtomic";

const dataKosong = {
    nama         : "",
    umur         : 0,
    jenisKelamin : "",
}
const PassengerInput = (props) => {

    const [data, setData] = useState(dataKosong);
    const [editing, setEditing] = useState(true);
    const dispatch = useDispatch();

    const handleViewMode = () => {
        setEditing(true)
    }
    
    const handleEditMode = () => {
        setEditing(false)
    }

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;

        setData({
            ...data,
            [name] : value
        })
    }


    const handleSubmit = (e) =>{
        e.preventDefault();

        const newData = {
            nama : data.nama,
            umur : data.umur,
            jenisKelamin : data.jenisKelamin
        }

        dispatch(tambahPengunjung(newData));

        setData(dataKosong)


    }

    const viewMode = {};
    const editMode = {};

    (editing) ? viewMode.display = "none" : editMode.display = "none";

    return (
        <div>
            <form style={viewMode} >
                <InputNamaAtomic type="text" name="nama" value={data.nama} onChange={handleChange} />
                <InputUmurAtomic type="number" name="umur" value={data.umur} onChange={handleChange} />
                <RadioGenderAtomic onChange={handleChange} checked={data.jenisKelamin} name="jenisKelamin"/>
                
                <button onClick={handleSubmit} type="submit">Submit</button>
                <button onClick={handleViewMode}>Batal</button>
            </form>

            <button onClick={handleEditMode} style={editMode}>Tambah Data Pengunjung</button>
        </div>
    )
}

export default PassengerInput;