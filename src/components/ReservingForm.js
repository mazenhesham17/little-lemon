import { useState } from "react";
import style from "../styles/reservingform.module.css";
import { convertDate } from "../utils/date.js";


const ReservingForm = (props) => {
    const currentDate = new Date().toISOString().substring(0, 10);
    const [date, setDate] = useState(currentDate);
    const [time, setTime] = useState(props.availableTimes[0]);
    const [dinners, setDinners] = useState(1);
    const [place, setPlace] = useState(0);
    const [occasion, setOccasion] = useState("default");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState({
        "dinners": -1,
        "occaison": -1,
        "email": -1,
    });

    const validateForm = () => {
        if (dinners < 0) {
            setErrors((old) => ({
                ...old,
                "dinners": "Dinners should be more than one.",
            }));
            return false;
        }
        if (occasion == "default") {
            setErrors((old) => ({
                ...old,
                "occaison": "Occasion should be choosed.",
            }));
            return false;
        }
        if (!email.includes("@")) {
            setErrors((old) => ({
                ...old,
                "email": "Email should contain @.",
            }));
            return false;
        }
        return true;
    }

    const handleSubmit = () => {
        const data = {
            "name": name,
            "email": email,
            "phone number": phone,
            "date": date,
            "time": time,
            "dinners": dinners,
            "dinning place": (place ? "outdoors" : "indoors"),
            "comment": comment
        }
        props.submitForm(data);
    }

    return (
        <form
            className={style.container}
            onSubmit={e => {
                e.preventDefault();
                console.log("hell");
                if (validateForm()) {
                    handleSubmit();
                }
            }}>
            <div>
                <fieldset className={style.card}>
                    <label htmlFor="dinning date">
                        Pick a date
                        <p className={style.text}>
                            {convertDate(date)}
                        </p>
                    </label>
                    <input
                        type="date"
                        className={style.input}
                        value={date}
                        onChange={e => {
                            setDate(e.target.value);
                            props.setAvailableTimes(e.target.value);
                        }} />
                </fieldset>
                <fieldset className={style.card}>
                    <label htmlFor="dinnig time">
                        Dinning Time
                        <p className={style.text}>
                            {time}
                        </p>
                    </label>
                    <select
                        className={style.input}
                        value={time}
                        onChange={e => setTime(e.target.value)}>
                        {props.availableTimes.map((item, idx) => (
                            <option key={idx}>
                                {item}
                            </option>
                        ))}
                    </select>
                </fieldset>
                <fieldset className={style.card}>
                    <label htmlFor="number of dinners">
                        How many dinners
                        <p className={style.text}>
                            {`${dinners} dinner${dinners === 1 ? "" : "s"}`}
                        </p>
                    </label>
                    <input
                        type="number"
                        className={`${style.input} ${style.number}`}
                        min={1}
                        max={10}
                        value={dinners}
                        onChange={e => setDinners(e.target.value)} />
                    {errors.dinners != -1 ? <span className={style.error}>{errors.dinners}</span> : ""}
                </fieldset>
                <fieldset className={`${style.card} ${style.entry}`}>
                    <label>
                        Dinning place
                    </label>
                    <div className={style.space}>
                        <button
                            className={`${style.radio_button}  ${place ? style.active : style.disabled}`}
                            onClick={e => {
                                e.preventDefault();
                                setPlace(0)
                            }}>
                            Indoors
                        </button>
                        <button
                            className={`${style.radio_button}  ${place ? style.disabled : style.active}`}
                            onClick={e => {
                                e.preventDefault();
                                setPlace(1)
                            }}>
                            Outdoors
                        </button>
                    </div>
                </fieldset>
                <fieldset className={`${style.card} ${style.entry}`}>
                    <label>Occasion</label>
                    <select
                        className={`${style.entry_field} ${style.input}`}
                        value={occasion}
                        onChange={e => setOccasion(e.target.value)}>
                        {occasion == "default" ? <option disabled value={"default"}>Select an occasion</option> : ''}
                        <option>Anniversary</option>
                        <option>Birthday</option>
                        <option>Engagement</option>
                    </select>
                    {errors.occaison != -1 ? <span className={style.error}>{errors.occaison}</span> : ""}
                </fieldset>
            </div>
            <div>
                <fieldset className={`${style.card} ${style.entry}`}>
                    <label>
                        Name
                    </label>
                    <input type="text"
                        className={style.entry_field}
                        value={name} placeholder="Please enter your name"
                        onChange={e => setName(e.target.value)}
                        required />
                </fieldset>
                <fieldset className={`${style.card} ${style.entry}`}>
                    <label>
                        Email address
                    </label>
                    <input
                        type="email"
                        className={style.entry_field}
                        value={email} placeholder="Please enter your email"
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    {errors.email != -1 ? <span className={style.error}>{errors.email}</span> : ""}
                </fieldset>
                <fieldset className={`${style.card} ${style.entry}`}>
                    <label>
                        Phone number
                    </label>
                    <input type="text"
                        className={style.entry_field}
                        value={phone}
                        placeholder="Please enter your phone"
                        onChange={e => setPhone(e.target.value)} />
                </fieldset>
                <fieldset className={`${style.card} ${style.entry}`}>
                    <label>
                        Addtional comments
                    </label>
                    <textarea value={comment}
                        className={style.entry_field}
                        rows={4}
                        placeholder="Add your comment here"
                        onChange={e => setComment(e.target.value)} />
                </fieldset>
                <button
                    type="submit"
                    className={`${style.button}`}>
                    Reserve a Table
                </button>
            </div>
        </form>
    )
}

export default ReservingForm;