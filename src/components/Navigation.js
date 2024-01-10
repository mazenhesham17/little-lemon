import logo from "../assets/Logo .svg"


function Navigation(){
    return (
        <>
        <img src={logo} alt="little lemon logo" />
        <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order online</a></li>
            <li><a>Login</a></li>
        </ul>
        </>
    );
}

export default Navigation;