import './about-us.styles.css';
import {images} from '../../constants';
import {SubHeading} from '../../components';

const AboutUs = () => (
  <div className="app__aboutus-content flex__center section__padding" id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G}/>
    </div>
    <div>
      <SubHeading title="About Us" />
      <p className="p__opensans">
        Welcome to Gericht, a culinary destination that captures the essence of
        exquisite dining.
      </p>
      <button type="button" className="custom__button">
        Know More
      </button>
    </div>
    <div>
      <img />
    </div>
    <div>
      <SubHeading title="Our History" />
      <p className="p__opensans">
        Our journey began with a simple vision: to combine the finest
        ingredients, innovative techniques, and a touch of artistry to craft
        gastronomic masterpieces.
      </p>
      <button type="button" className="custom__button">
        Know More
      </button>
    </div>
  </div>
);

export default AboutUs;