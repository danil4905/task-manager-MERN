import Loader from '../../assets/loader.png';


const Preloader = props => {
    return (
        <div className='wrapper-preloader'>
            <img src={Loader} className='preloader' alt='...' />
        </div>
    )
}
export default Preloader;
