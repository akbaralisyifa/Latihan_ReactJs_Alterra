import { hapusPengunjung } from "../store/passengerSlice";
import PassengerList from "./PassengerList";
import { useSelector, useDispatch } from "react-redux";

const PassengerTabel = () => {
    
    const passanger = useSelector((state) => state.passanger.passangers)
    const dispatch = useDispatch()

    return (
        <table>
            <thead>
                <tr style={{textAlign:"center"}}>
                    <th>Nama</th>
                    <th>Umur</th>
                    <th>Jenis Kelamin</th>
                    <th>Aksi</th>
                </tr>
            </thead>

            <tbody>
                {passanger.map((data) => <PassengerList key={data.nama} item={data} hapusPengunjung={() => dispatch(hapusPengunjung(data.id))} />)}
            </tbody>
        </table>
    )
}


export default PassengerTabel;