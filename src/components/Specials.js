import SpecialCard from "./SpecialCard";
import salad from "../assets/greek salad.jpg"
import bruchetta from "../assets/bruchetta.jpg"
import dessert from "../assets/lemon dessert.jpg"

import style from "../styles/specials.module.css"

const Specials = () => {
    return (
        <div className={style.section}>
            <div className={style.specials}>
                <div className={style.row}>
                    <h1 className={style.heading1}>
                        Specials
                    </h1>
                    <button className={style.browse_button}>
                        Browse menu
                    </button>
                </div>
                <div className={style.specials_section}>
                    <SpecialCard name={"Greek salad"} price={"$12.99"} img={salad} />
                    <SpecialCard name={"Brochette"} price={"$9.99"} img={bruchetta} />
                    <SpecialCard name={"Lemon salad"} price={"$5.00"} img={dessert} />
                </div>
            </div>
        </div>
    )
}

export default Specials;