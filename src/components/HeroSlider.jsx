import Carousel from "react-bootstrap/Carousel";
import banner from "../assets/images/freedel.webp";

function HeroSlider() {
  return (
    <Carousel controls={false} indicators={false} fade>
      <Carousel.Item>
        <div className="hero-slide">
          <img src={banner} alt="Free Delivery" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSlider;
