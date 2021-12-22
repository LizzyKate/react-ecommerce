import logo from './images/logo.png';
import { Link } from 'react-router-dom'
function Navbar (){
    return(
        <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                     
                         <Link to="/" className="logo">
                            <img src={logo}/>
                        </Link>
                       
                        <ul className="nav">
                            <li className="scroll-to-section"><Link to="/" className="active">Home</Link></li>
                            <li className="scroll-to-section"><a href="#men">Men's</a></li>
                            <li className="scroll-to-section"><a href="#women">Women's</a></li>
                            <li className="scroll-to-section"><a href="#kids">Kid's</a></li>
                            <li className="submenu">
                                <a href="javascript:;">Pages</a>
                                <ul>
                                    <li><Link to='/About' >About Us</Link></li>
                                    <li><Link to='/Product'>Products</Link></li>
                                    <li><Link to='/Contact'>Contact Us</Link></li>
                                </ul>
                            </li>
                            {/* <li className="submenu">
                                <a href="javascript:;">Features</a>
                                <ul>
                                    <li><a href="#">Features Page 1</a></li>
                                    <li><a href="#">Features Page 2</a></li>
                                    <li><a href="#">Features Page 3</a></li>
                                    <li><a rel="nofollow" href="https://templatemo.com/page/4" target="_blank">Template Page 4</a></li>
                                </ul>
                            </li> */}
                            <li className="scroll-to-section"><Link to='/Explore'>Explore</Link></li>
                        </ul>        
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    )
    
}
export default Navbar