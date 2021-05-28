import { useContext, useMemo } from 'react';
import globalICon from '../../assets/img/global.svg'
import { CoronaContext } from '../../contexts/provider/CoronaProvider';

const Country = () => {
    const {state} = useContext(CoronaContext)
    const { countrySelected, country } = state

    return useMemo(() => {
        return (
            <div className="country">
                <span className='country__name'>{countrySelected ? countrySelected : 'Global'}</span>
                <img className='country__flag' src={country ? country.flag : globalICon} alt=""/>
            </div>
        )
    }, [countrySelected, country])
}

export default Country;