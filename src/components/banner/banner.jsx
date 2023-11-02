import './banner.css';
import home_cover from '../../Assets/home_cover.png';

function Banner() {
    return (
        <div className='banner_div'>  
        <img className='banner_img' src={home_cover} alt="Photo de la bannière"/> 
          <span className='banner_backgrnd'>
            <p className='banner_text'>Chez vous, partout et ailleurs</p>
          </span>
      </div>
    );
}

  export default Banner;