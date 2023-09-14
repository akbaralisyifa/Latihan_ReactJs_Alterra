
import PassengerTabel from "./PassangerTabel";
import PassengerInput from "./passengerInput";


const Home = () => {

    return (
        <div>
            <h1>Halaman Penumpang</h1>
            <PassengerTabel datas={data} hapusPengunjung={hapusPengunjung} />
            <PassengerInput tambahPengunjung={tambahPengunjung} />
        </div>
    )
}


export default Home;