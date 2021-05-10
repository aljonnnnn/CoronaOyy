import { useContext } from 'react';
import { CoronaContext } from '../../../../App';
import globalICon from '../../../../assets/img/global.svg'
import Loading from '../../../stateless-components/Loading/Loading';

const Country = () => {
    const {state, dispatch} = useContext(CoronaContext)
    const { currentCountryName, country, loading } = state

    return (
        <div className="country">
            <span className='country__name'>{currentCountryName ? currentCountryName : 'Global'}</span>
            <img className='country__flag' src={country ? country.flag : globalICon} alt=""/>
        </div>
    )
}

export default Country;