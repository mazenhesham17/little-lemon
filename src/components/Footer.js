import logo from "../assets/Asset 9@4x.png"
import style from "../styles/footer.module.css"

function Footer() {
    return (
        <div className={style.section} >
            <div className={style.footer}>
                <img src={logo} alt="little lemon cropped logo" height={200} width={200} />
                <div>
                    <h1 className={style.heading1}>Links</h1>
                    <ul className={style.list}>
                        <li className={style.list_item}><a>Home</a></li>
                        <li className={style.list_item}><a>About</a></li>
                        <li className={style.list_item}><a>Menu</a></li>
                        <li className={style.list_item}><a>Reservations</a></li>
                        <li className={style.list_item}><a>Order online</a></li>
                        <li className={style.list_item}><a>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className={style.heading1}>Contact us</h1>
                    <ul className={style.list}>
                        <li className={style.list_item}><a>Address</a></li>
                        <li className={style.list_item}><a>Phone number</a></li>
                        <li className={style.list_item}><a>Email Address</a></li>
                        <li className={style.list_item}><a>Facebook</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;