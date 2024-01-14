import style from "../styles/testimonialscard.module.css"

import star from "../assets/3.jpg"


const TestimonialsCard = (props) => {
    return (
        <div className={style.card}>
            <div className={style.upper}>
                <img src={props.img} height={80} width={80} alt="profile picture" />
                <div className={style.info} >
                    <p>
                        username
                    </p>
                    <div>
                        <img src={star} height={14} />
                        <img src={star} height={14} />
                        <img src={star} height={14} />
                        <img src={star} height={14} />
                        <img src={star} height={14} />
                    </div>
                </div>
            </div>
            <div className={style.lower}>
                Quisque facilisis quis nisi sed semper. Suspendisse at lectus erat. Cras pellentesque at justo in aliquam.
            </div>
        </div>
    )
}

export default TestimonialsCard;