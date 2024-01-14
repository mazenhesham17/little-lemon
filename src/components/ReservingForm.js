import { useEffect, useState } from "react";
import style from "../styles/reservingform.module.css";

const ReservingForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [dinners, setDinners] = useState(1);
    const [place, setPlace] = useState(0);
    const [occasion, setOccasion] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");

    useEffect(() => console.log(place), [place])

    return (
        <form>
            <fieldset>
                <label htmlFor="dinning date">
                    Pick a date
                </label>
                <input type="date" value={date} onChange={e => setDate(e.target.value)} />
            </fieldset>
            <fieldset>
                <label htmlFor="dinnig time">
                    Dinning Time
                </label>
                <select value={time} onChange={e => setTime(e.target.value)}>
                    <option>
                        19:30 pm
                    </option>
                    <option>
                        20:00 pm
                    </option>
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor="number of dinners">
                    How many dinners
                </label>
                <input type="number" min={1} max={10} value={dinners} onChange={e => setDinners(e.target.value)} />
            </fieldset>
            <fieldset>
                <label>
                    Dinning place
                </label>
                <label>
                    Indoors
                    <input type="radio" value={0} checked={place == 0} onChange={e => setPlace(e.target.value)} />
                </label>
                <label>
                    Outdoors
                    <input type="radio" value={1} checked={place == 1} onChange={e => setPlace(e.target.value)} />
                </label>
            </fieldset>
            <fieldset>
                <label>Occasion</label>
                <select value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option>Anniversary</option>
                    <option>Birthday</option>
                    <option>Engagement</option>
                </select>
            </fieldset>
            <fieldset>
                <label>
                    Name
                </label>
                <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            </fieldset>
            <fieldset>
                <label>
                    Email address
                </label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}></input>
            </fieldset>
            <fieldset>
                <label>
                    Phone number
                </label>
                <input type="text" value={phone} onChange={e => setPhone(e.target.value)}></input>
            </fieldset>
            <fieldset>
                <label>
                    Addtional comments
                </label>
                <textarea value={comment} onChange={e => setComment(e.target.value)}>

                </textarea>
            </fieldset>
        </form>
    )
}

export default ReservingForm;