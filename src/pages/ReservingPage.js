import style from "../styles/reserving.module.css"
import ReservingForm from "../components/ReservingForm";

const ReservingPage = () => {
    return (
        <div className={style.section}>
            <div className={style.reserving}>
                <h1 className={style.heading1}>
                    Reserve a Table
                </h1>
                <ReservingForm />
            </div>
        </div>
    )
}

export default ReservingPage;