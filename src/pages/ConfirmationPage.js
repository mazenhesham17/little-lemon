import { generateId } from "../utils/id";
import sign from "../assets/true.png";
import style from "../styles/confirmation.module.css"


const ConfirmationPage = () => {
    const id = generateId();
    return (
        <div className={style.section}>
            <img className={style.image} src={sign} alt="correct sign" />
            <p className={style.text}>
                Congratulations! Your reservation has been successfully done.
            </p>
            <p className={style.text}>
                {`Reservation ID: ${id}`}
            </p>
            <button className={style.button}>
                Return to Home
            </button>
        </div>
    )
}

export default ConfirmationPage;