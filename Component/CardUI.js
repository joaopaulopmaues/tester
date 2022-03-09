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
          <button><img src = {this.image}/></button>
        </OverlayTrigger>
      </div>
    )
  }

}

export function TooltipButton(){
  const carta = new CardUI("https://i.pinimg.com/564x/5c/47/1b/5c471b5d08e9e5a66a2a622185712ca2.jpg","qualquer coisa")
  return(
  <div>
    {carta.TooltipButton()}
    <img src = "https://i.pinimg.com/564x/5c/47/1b/5c471b5d08e9e5a66a2a622185712ca2.jpg" alt="display image" />
</div>)
  /*(
    <div>
      <h4>React-Bootstrap Tooltip Component</h4>
      <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            Hii, I am a simple tooltip information!!!
          </Tooltip>
        )}
        placement="bottom"
        >
          <button variant="warning"><img src = "https://pin.it/4aix7GR"/></button>
      </OverlayTrigger>
    </div>
  )*/
}