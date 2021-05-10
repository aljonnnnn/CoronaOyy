import logo from '../../assets/img/coronaoyy.svg'
import { NavLink, Link } from 'react-router-dom'
import { useContext } from 'react'
import { CoronaContext } from '../../App'

const Header = () => {
    const { state, dispatch } = useContext(CoronaContext)
    const { countriesName } = state

    const handleCountrySelector = (e) => {
        const countrySelected = e.target.value
        dispatch({ type: 'CHANGE_COUNTRY_NAME', payload: countrySelected})
    }

    return (
        <header className='header'>
            <nav className='header__nav container'>
                <Link to="/" className="header__logo"><img src={logo} alt="coronaoyy"/></Link>

                <ul className='header__menu'>
                    <li className='header__item'><NavLink exact to="/" activeClassName="active" className='header__link'>Tracker</NavLink></li>
                    <li className='header__item'><NavLink to="/about" activeClassName="active" className='header__link'>About Covid</NavLink></li>
                </ul>
                <form className='header__form'>
                    <select className='header__select' onChange={handleCountrySelector}>
                        <option className='header__option' value='' >Global</option>
                        {countriesName.map(name => <option className='header__option' value={name} key={name} >{name}</option>)}
                    </select>
                </form>
            </nav>
        </header>
    )
}

export default Header