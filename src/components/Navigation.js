import logo from "../assets/Logo .svg"
import style from '../styles/navigation.module.css'

function Navigation() {
    return (
        <div className={style.section} >
            <div className={style.navigation}>
                <img src={logo} width={175} height={60} alt="little lemon logo" />
                <ul className={style.navigation_list}>
                    <li className={style.list_item}><a>Home</a></li>
                    <li className={style.list_item}><a>About</a></li>
                    <li className={style.list_item}><a>Menu</a></li>
                    <li className={style.list_item}><a>Reservations</a></li>
                    <li className={style.list_item}><a>Order online</a></li>
                    <li className={style.list_item}><a>Login</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;