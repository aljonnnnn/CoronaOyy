import * as React from 'react';
import logo from '../../assets/img/coronaoyy.svg';
import { NavLink, Link } from 'react-router-dom';
import { setSelectedCountry } from '../../redux/covidData/covidDataActions';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';

const Header = () => {
  const [country, setCountry] = React.useState('');
  const dispatch = useDispatch();
  const { selectedCountry } = useSelector(
    (state: RootState) => state.covidData
  );
  const { countriesName } = useSelector((state: RootState) => state.countries);

  React.useEffect(() => {
    const countryLocal = localStorage.getItem('country');
    if (countryLocal) setCountry(countryLocal);
  }, []);

  React.useEffect(() => {
    localStorage.setItem('country', country);
  }, [country]);

  React.useEffect(() => {
    dispatch(setSelectedCountry(country));
  }, [country, dispatch]);

  return React.useMemo(() => {
    return (
      <header className="header">
        <nav className="header__nav container">
          <Link to="/" className="header__logo">
            <img src={logo} alt="coronaoyy" />
          </Link>

          <ul className="header__menu">
            <li className="header__item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="header__link"
              >
                Tracker
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                to="/about"
                activeClassName="active"
                className="header__link"
              >
                About Covid
              </NavLink>
            </li>
          </ul>
          <form className="header__form">
            <select
              className="header__select"
              value={selectedCountry ? selectedCountry : 'Global'}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option className="header__option" value="">
                Global
              </option>
              {countriesName.map((name: any) => (
                <option className="header__option" value={name} key={name}>
                  {name}
                </option>
              ))}
            </select>
          </form>
        </nav>
      </header>
    );
  }, [countriesName, selectedCountry]);
};

export default Header;
