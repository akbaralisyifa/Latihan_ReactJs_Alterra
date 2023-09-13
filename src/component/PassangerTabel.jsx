import PassengerList from "./PassengerList";


const PassengerTabel = (props) => {
    const {datas, hapusPengunjung} = props;

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
                {datas.map((data) => <PassengerList key={data.id} item={data} hapusPengunjung={hapusPengunjung} />)}
            </tbody>
        </table>
    )
}


export default PassengerTabel;