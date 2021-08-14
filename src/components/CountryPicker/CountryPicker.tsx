import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCountry } from '../../redux/covidData/covidDataActions';
import { AppDispatch, RootState } from '../../redux/store';

const CountryPicker = () => {
  const { selectedCountry } = useSelector(
    (state: RootState) => state.covidData
  );
  const { countriesName } = useSelector((state: RootState) => state.countries);
  const dispatch = useDispatch<AppDispatch>();

  const handleCountrySelector = React.useCallback(
    (e) => {
      const countrySelected = e.target.value;
      dispatch(setSelectedCountry(countrySelected));
    },
    [dispatch]
  );

  return React.useMemo(() => {
    return (
      <form action="" className="country-picker text-center">
        <select
          value={selectedCountry ? selectedCountry : 'Global'}
          name=""
          id=""
          className="country-picker__select"
          onChange={handleCountrySelector}
        >
          <option value="" className="country-picker__option">
            Global
          </option>
          {countriesName.map((name: any) => (
            <option key={name} value={name} className="country-picker__option">
              {name}
            </option>
          ))}
        </select>
      </form>
    );
  }, [countriesName, selectedCountry, handleCountrySelector]);
};

export default CountryPicker;
