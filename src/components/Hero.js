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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada, enim nec hendrerit iaculis, tellus quam porta purus, sit amet bibendum lectus nisi vel dolor. Cras ut tempor neque. Integer fringilla non mi at bibendum. Sed pulvinar fermentum elit a condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    </p>
                    <Link to={"/reserving"}>
                        <button className={style.button}>
                            Reserve a table
                        </button>
                    </Link>
                </div>
                <img className={style.image} src={resturant} width={300} height={410} alt="special dish from little lemon restaurant" />
            </div>
        </div>
    );
}

export default Hero;