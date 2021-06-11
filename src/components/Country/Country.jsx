import { useContext, useMemo } from 'react';
import globalICon from '../../assets/img/global.svg'
import { CoronaContext } from '../../contexts/provider/CoronaProvider';

const Country = () => {
    const {state} = useContext(CoronaContext)
    const { country } = state
    
    return useMemo(() => {
        return (
            <div className="country">
                <span className='country__name'>{country ? country.countryName : 'Global'}</span>
                <img className='country__flag' src={country ? country.flag : globalICon} alt=""/>
            </div>
        )
    }, [country])
}

export default Country;