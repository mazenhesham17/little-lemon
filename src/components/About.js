import top from "../assets/Mario and Adrian A.jpg"
import bottom from "../assets//Mario and Adrian b.jpg"

import style from "../styles/about.module.css"

const About = () => {
    return (
        <div className={style.section}>
            <div className={style.about}>
                <div>
                    <h1 className={style.heading1}>
                        Little Lemon
                    </h1>
                    <h5 className={style.heading5}>
                        Chicago
                    </h5>
                    <p className={style.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada, enim nec hendrerit iaculis, tellus quam porta purus, sit amet bibendum lectus nisi vel dolor. Cras ut tempor neque. Integer fringilla non mi at bibendum. Sed pulvinar fermentum elit a condimentum.
                    </p>
                </div>
                <div className={style.stack}>
                    <img src={bottom} className={`${style.bottom} ${style.image}`} />
                    <img src={top} className={`${style.top} ${style.image}`} />
                </div>

            </div>
        </div>
    );
}

export default About;