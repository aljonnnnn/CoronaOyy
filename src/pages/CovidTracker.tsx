import * as React from 'react';
import Loading from '../containers/Loading/Loading';
import Cards from '../components/Card/Cards';
import Country from '../components/Country/Country';
import BarChart from '../components/ChartJS/BarChart';
import LineChart from '../components/ChartJS/LineChart';
import CountryPicker from '../components/CountryPicker/CountryPicker';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountriesName } from '../redux/countries/countriesUtils';
import { setSelectedCountry } from '../redux/covidData/covidDataActions';
import { fetchHistoryData } from '../redux/historyData/historyDataUtils';
import { fetchCountryData } from '../redux/covidData/covidDataUtils';
import { fetchGlobalData } from '../redux/covidData/covidDataUtils';
import { AppDispatch, RootState } from '../redux/store';

const CovidTracker = () => {
  const selectedCountry = useSelector(
    (state: RootState) => state.covidData.selectedCountry
  );
  const dispatch = useDispatch<AppDispatch>();
  const loadingCovidData = useSelector(
    (state: RootState) => state.covidData.loading
  );
  const loadingHistoryData = useSelector(
    (state: RootState) => state.historyData.loading
  );
  React.useEffect(() => {
    dispatch(fetchCountriesName());
    dispatch(setSelectedCountry(selectedCountry));
    dispatch(fetchHistoryData(selectedCountry));
    if (selectedCountry) {
      dispatch(fetchCountryData(selectedCountry));
    } else {
      dispatch(fetchGlobalData());
    }
  }, [dispatch, selectedCountry]);

  return React.useMemo(() => {
    return (
      <main className="main">
        {loadingCovidData ? (
          <Loading />
        ) : (
          <div>
            <Country />
            <Cards />
            {/* <CountryPicker /> */}
          </div>
        )}

        {loadingHistoryData && loadingCovidData ? (
          <Loading />
        ) : (
          <>
            <BarChart />
            <LineChart />
          </>
        )}
      </main>
    );
  }, [loadingHistoryData, loadingCovidData]);
};

export default CovidTracker;
