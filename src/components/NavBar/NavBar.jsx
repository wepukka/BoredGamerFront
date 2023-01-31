import ("./NavBar.css")
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar () {

    const toggledropdown = () => {
        document.getElementById("dropdown").classList.toggle("dropdown-show");
}

    return  <>
            <ul className="navBar">
                <li className="mweb-logo">mWeb</li>
                <li className="nav-button">B1</li>
                <li className="nav-button">B2</li>
                <li className="nav-button">B3</li>
                <li className="nav-button nav-menu-button" onClick={() => toggledropdown()}><MenuIcon/></li>
            </ul>
            <div style={{position:"relative"}}>
                <ul id="dropdown" className="nav-dropdown-menu">
                    <li className="dropdown-item">Home</li>
                    <li className="dropdown-item">News</li>
                    <li className="dropdown-item">Contact</li>
                    <li className="dropdown-item">About</li>
                </ul>
            </div>
            </>
        
}