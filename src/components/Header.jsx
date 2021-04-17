import logo from '../coronaoyy.svg'

const Header = () => {
    return (
        <header className='header'>
            <nav className='header__nav container'>
                <a href="#" className="header__logo"><img src={logo} alt="coronaoyy"/></a>

                <ul className='header__menu'>
                    <li className='header__item'><a href="" className='header__link active'>Tracker</a></li>
                    <li className='header__item'><a href="" className='header__link'>About Covid</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header