// eslint-disable-next-line no-unused-expressions
import navbarlogo from "../../Images/ironhack-logo-xs.png";
import navbarmenu from "../../Images/menu-top-xs.png";



function Navbar() {
    return (
        <div className="Navbar">
            <img src={navbarlogo} alt="logo" className="navbar-logo" />
            <img src={navbarmenu} alt="menu" className="navbar-menu" />

        </div>

    );
}

export default Navbar
