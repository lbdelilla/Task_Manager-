
import "../components/navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg mx-auto " style={{width:"99vw"}}>
            <div className=" container-fluid">
                <div className="brand">
                    <a className="navbar-brand" href="#">Tasky</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Tasky</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                About Me
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Linkedin</a></li>
                                <li><a className="dropdown-item" href="#">Github</a></li>
                                <li><a className="dropdown-item" href="#">Portfolio</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar