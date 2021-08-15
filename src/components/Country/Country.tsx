import React from 'react';
import { useSelector } from 'react-redux';
import globalICon from '../../assets/img/global.svg';
import { ICountryCovidData } from '../../redux/covidData/interface';
import { RootState } from '../../redux/store';

const Country = () => {
  const countryData: ICountryCovidData = useSelector(
    (state: RootState) => state.covidData.countryData
  );

  return React.useMemo(() => {
    return (
      <div className="country">
        <span className="country__name">
          {countryData ? countryData.countryName : 'Global'}
        </span>
        <img
          className="country__flag"
          src={countryData ? countryData.flag : globalICon}
          alt=""
        />
      </div>
    );
  }, [countryData]);
};

export default Country;
