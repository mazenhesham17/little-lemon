import logo from "../assets/Asset 9@4x.png"

function Footer(){
    return (
        <>
        <img src={logo} alt="little lemon cropped logo"/>
        <>
        <h1>Links</h1>
        <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Reservations</a></li>
            <li><a>Order online</a></li>
            <li><a>Login</a></li>
        </ul>
        </>
        <>
        <h1>Contact us</h1>
        <ul>
            <li><a>Address</a></li>
            <li><a>Phone number</a></li>
            <li><a>Email Address</a></li>
            <li><a>Facebook</a></li>
        </ul>
        </>
        </>
    );
}

export default Footer;