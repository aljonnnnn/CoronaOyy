import logo from '../../assets/img/coronaoyy.svg'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <nav className='header__nav container'>
                <Link to="/" className="header__logo"><img src={logo} alt="coronaoyy"/></Link>

                <ul className='header__menu'>
                    <li className='header__item'><NavLink exact to="/" activeClassName="active" className='header__link'>Tracker</NavLink></li>
                    <li className='header__item'><NavLink to="/about" activeClassName="active" className='header__link'>About Covid</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header