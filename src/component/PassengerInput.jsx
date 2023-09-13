import { useState } from "react";

const dataKosong = {
    nama         : "",
    umur         : 0,
    jenisKelamin : "",
}
const PassengerInput = (props) => {

    const [data, setData] = useState(dataKosong);
    const [editing, setEditing] = useState(true);


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

        props.tambahPengunjung(newData);

        setData(dataKosong)


    }

    const viewMode = {};
    const editMode = {};

    (editing) ? viewMode.display = "none" : editMode.display = "none";

    return (
        <div>
            <form style={viewMode} >
                <label>
                    Nama : 
                    <input 
                    type="text" 
                    name="nama"
                    value={data.nama}
                    onChange={handleChange}
                    />
                </label><br />
                <label>
                    Umur : 
                    <input 
                    type="number" 
                    name="umur"
                    value={data.umur}
                    onChange={handleChange}
                    />
                </label><br />
                <label>
                    Jenis Kelamin :
                    <input 
                    type="radio"
                    name="jenisKelamin" 
                    value="Pria"
                    checked={data.jenisKelamin === "Pria"}
                    onChange={handleChange}
                    /> <label>Pria</label>
                    <input 
                    type="radio"
                    name="jenisKelamin" 
                    value="Wanita"
                    checked={data.jenisKelamin === "Wanita"}
                    onChange={handleChange}
                    /> <label>Wanita</label>
                </label><br />
                
                <button onClick={handleSubmit} type="submit">Submit</button>
                <button onClick={handleViewMode}>Batal</button>
            </form>

            <button onClick={handleEditMode} style={editMode}>Tambah Data Pengunjung</button>
        </div>
    )
}

export default PassengerInput;