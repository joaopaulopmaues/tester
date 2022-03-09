import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export function TooltipButton(){
  return(
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
        ><Button variant="warning">Tooltip Button</Button>
      </OverlayTrigger>
    </div>
  )
}