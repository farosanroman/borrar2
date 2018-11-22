import React from 'react';
import { Carousel} from 'react-bootstrap'
import image1 from '../images/venezuela.jpg';
import image2 from '../images/manual1.png';
import image3 from '../images/chatbot.png';
class CarouselFaro extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      index: 0,
      direction: null
    };
    
    this.handleSelect = this.handleSelect.bind(this);

  }

  handleSelect(selectedIndex, e) {
    alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  } 
  
  
  render() {
    const { index, direction } = this.state;
    return (            
      <div className="Appp">
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={image1} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={image2} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src={image3} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
     
      </div>
      );
    }
  }
  
export default CarouselFaro;
