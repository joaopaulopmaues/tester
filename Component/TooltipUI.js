import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

class ImageComponent extends Component{
  link;

  ImageComponent(link){
    this.link=URL.createObjectURL(link);
  }

  render() {
      return (
          <div>
              <img src = {this.link} alt="display image" />
          </div>
      )
  }
}

class CardUI{
  image;
  description;

  CardUI(link,description){
    this.image=new ImageComponent(link);
    this.description=description;
  }

  startCard(link, description){
    return new CardUI(link, description)
  }

  TooltipButton(){
    return(
      <div>
        <h4>React-Bootstrap Tooltip Component</h4>
        <OverlayTrigger
          delay={{ hide: 450, show: 300 }}
          overlay={(props) => (
            <Tooltip {...props}>
              {this.description}
            </Tooltip>
          )}
          placement="bottom"
          >
          <Button><img src = {this.image}/></Button>
        </OverlayTrigger>
      </div>
    )
  }

}

export function TooltipButton(image, description){

  return(
    <div>
      <h4>React-Bootstrap Tooltip Component</h4>
      <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            {description}
          </Tooltip>
        )}
        placement="bottom"
        >
        <button><img src = {image}/></button>
      </OverlayTrigger>
    </div>)
  
}