import React, {Component} from "react"
import {TooltipButton} from "./TooltipUI"


export class CardUI extends TooltipButton{
  id;
  image;
  description;

  TooltipButton(){
    TooltipButton(this.image, this.description)
  }

}