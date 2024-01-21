import Carousel from 'react-bootstrap/Carousel';

function EditarCarousel(props) {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={props.imagem[0]} className='rounded-2' width={'100%'} height={300} alt='First slied' />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.imagem[1]} className='rounded-2' width={'100%'} height={300} alt="Second slide" />
        
      </Carousel.Item>
      <Carousel.Item>
        <img src={props.imagem[2]}  className='rounded-2' width={'100%'} height={300} alt="Third slide" />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default EditarCarousel;