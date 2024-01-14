import style from "../styles/specialcard.module.css"


const SpecialCard = (props) => {
    return (
        <div className={style.card}>
            <img className={style.image} src={props.img} height={240} width={250} alt={props.name} />
            <div className={style.row}>
                <p className={style.name}>
                    {props.name}
                </p>
                <p className={style.price}>
                    {props.price}
                </p>
            </div>
            <p className={style.text}>
                Donec ac diam magna. Etiam nec interdum odio. Nullam libero elit, porttitor ac enim ut.
            </p>
            <button className={style.order_button}>
                Order now
            </button>
        </div>
    )
}

export default SpecialCard;