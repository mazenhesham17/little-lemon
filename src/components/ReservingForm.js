import { useEffect, useState } from "react";
import style from "../styles/reservingform.module.css";
import { convertDate } from "../utils/date.js";


const ReservingForm = () => {
    const currentDate = new Date().toISOString().substring(0, 10);
    const [date, setDate] = useState(currentDate);
    const [availableTimes, setAvailableTimes] = useState(["19:30 pm", "20:00 pm", "20:30 pm"]);
    const [time, setTime] = useState(availableTimes[0]);
    const [dinners, setDinners] = useState(1);
    const [place, setPlace] = useState(0);
    const [occasion, setOccasion] = useState("default");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");

    return (
        <form className={style.container}>
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
                    onChange={e => setDate(e.target.value)} />
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
                    {availableTimes.map((item, idx) => (
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
                        {`${dinners} dinner${dinners == 1 ? "" : "s"}`}
                    </p>
                </label>
                <input
                    type="number"
                    className={`${style.input} ${style.number}`}
                    min={1}
                    max={10}
                    value={dinners}
                    onChange={e => setDinners(e.target.value)} />
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
            </fieldset>
            <fieldset className={`${style.card} ${style.entry}`}>
                <label>
                    Name
                </label>
                <input type="text"
                    className={style.entry_field}
                    value={name} placeholder="Please enter your name"
                    onChange={e => setName(e.target.value)} />
            </fieldset>
            <fieldset className={`${style.card} ${style.entry}`}>
                <label>
                    Email address
                </label>
                <input
                    type="email"
                    className={style.entry_field}
                    value={email} placeholder="Please enter your email"
                    onChange={e => setEmail(e.target.value)} />
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
                className={`${style.button}`}
                onClick={e => {
                    e.preventDefault();
                    console.log("Form is submitted");
                }} >
                Reserve a table
            </button>
        </form>
    )
}

export default ReservingForm;