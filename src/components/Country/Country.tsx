import React from 'react';
import { useSelector } from 'react-redux';
import globalICon from '../../assets/img/global.svg';
import { RootState } from '../../redux/store';

const Country = () => {
  const country = useSelector(
    (state: RootState) => state.covidData.countryData
  );

  return React.useMemo(() => {
    return (
      <div className="country">
        <span className="country__name">
          {country ? country.countryName : 'Global'}
        </span>
        <img
          className="country__flag"
          src={country ? country.flag : globalICon}
          alt=""
        />
      </div>
    );
  }, [country]);
};

export default Country;
