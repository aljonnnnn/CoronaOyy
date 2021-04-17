import global from '../global.svg'

const Country = () => {
    return (
        <div className="country">
            <span className='country__name'>Global</span>
            <img className='country__flag' src={global} alt=""/>
        </div>
    )
}

export default Country;