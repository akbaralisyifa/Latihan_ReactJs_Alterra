
const PassengerList = (props) => {
    const {item , hapusPengunjung} = props;

    
    return (
        <tr style={{textAlign:"center"}}>
                    <td>{item.nama}</td>
                    <td>{item.umur}</td>
                    <td>{item.jenisKelamin}</td>
                    <td>
                        <button onClick={() => hapusPengunjung(item.id)}>Hapus</button>
                    </td>
                </tr>
    )
}


export default PassengerList;