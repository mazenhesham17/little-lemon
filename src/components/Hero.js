import { Link } from "react-router-dom";
import resturant from "../assets/restauranfood.jpg"
import style from "../styles/hero.module.css"

const Hero = () => {
    return (
        <div className={style.section}>
            <div className={style.hero}>
                <div>
                    <h1 className={style.heading1}>
                        Little Lemon
                    </h1>
                    <h5 className={style.heading5}>
                        Chicago
                    </h5>
                    <p className={style.text}>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <Link to={"/reserving"}>
                        <button className={style.button}>
                            Reserve a table
                        </button>
                    </Link>
                </div>
                <img
                    className={style.image}
                    src={resturant}
                    alt="special dish from little lemon restaurant" />
            </div>
        </div>
    );
}

export default Hero;