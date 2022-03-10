import React, {Component} from "react"
import {TooltipButton} from "./TooltipUI"


export class CardUI extends TooltipButton{
  id;
  image;
  description;

  CardUI(id,image,description){
    this.id=0
    this.image=image
    this.description=description
  }

  TooltipButton(){
    TooltipButton(this.image, this.description)
  }

}