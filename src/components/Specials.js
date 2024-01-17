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
                    <SpecialCard
                        name={"Greek salad"}
                        price={"$12.99"}
                        img={salad}
                        description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese... "} />
                    <SpecialCard
                        name={"Brochette"}
                        price={"$9.99"}
                        img={bruchetta}
                        description={"Our Bruschetta is made from grilled bread that has been smeared with garlic..."}
                    />
                    <SpecialCard
                        name={"Lemon salad"}
                        price={"$5.00"}
                        img={dessert}
                        description={"Donec ac diam magna. Etiam nec interdum odio. Nullam libero elit, porttitor ac enim ut."} />
                </div>
            </div>
        </div>
    )
}

export default Specials;