class Register{
  
  historic;//moves played so far

  Register(state){
    printer(state)//interface of Register
    if(!this.historic) this.historic='';
    this.historic+=state;
    waitResponse();//ask players if they want to respond the event in game
  }

  printer(state){
    console.log(state);
    //insert graphical interface to show the historic of game changes in play
  }
}