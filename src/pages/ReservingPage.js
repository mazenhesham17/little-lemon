import style from "../styles/reserving.module.css"
import ReservingForm from "../components/ReservingForm";

const ReservingPage = (props) => {
    return (
        <div className={style.section}>
            <div className={style.reserving}>
                <h1 className={style.heading1}>
                    Reserve a Table
                </h1>
                <ReservingForm
                    availableTimes={props.availableTimes}
                    setAvailableTimes={props.setAvailableTimes} />
            </div>
        </div>
    )
}

export default ReservingPage;