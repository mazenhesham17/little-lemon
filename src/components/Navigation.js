import logo from "../assets/Logo .svg"
import style from '../styles/navigation.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

const Navigation = () => {
    const [flag, setFlag] = useState(0);
    useEffect(() => console.log(flag), [flag]);
    return (
        <div className={`${style.section} ${flag ? style.open : ""}`} >
            <div className={style.navigation}>
                <img
                    src={logo}
                    className={style.image}
                    alt="little lemon logo" />
                <ul className={style.navigation_list}>
                    <li className={style.list_item}><a>Home</a></li>
                    <li className={style.list_item}><a>About</a></li>
                    <li className={style.list_item}><a>Menu</a></li>
                    <li className={style.list_item}><a>Reservations</a></li>
                    <li className={style.list_item}><a>Order online</a></li>
                    <li className={style.list_item}><a>Login</a></li>
                </ul>
                <FontAwesomeIcon
                    icon={flag ? faXmark : faBars}
                    size="2xl"
                    className={style.icon}
                    onClick={() => setFlag(!flag)} />
            </div>
            <div>
                <ul className={`${flag ? style.drop_down_menu : style.hide}`}>
                    <li className={style.drop_item}><a>Home</a></li>
                    <li className={style.drop_item}><a>About</a></li>
                    <li className={style.drop_item}><a>Menu</a></li>
                    <li className={style.drop_item}><a>Reservations</a></li>
                    <li className={style.drop_item}><a>Order online</a></li>
                    <li className={style.drop_item}><a>Login</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;