import Carousel from 'react-bootstrap/Carousel';

function MyCarousel(props) {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={props.imagem[0]} width={'100%'} height={200} alt='First slied' />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.imagem[1]} width={'100%'} height={200} alt="Second slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.imagem[2]} width={'100%'} height={200} alt="Third slide" />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;