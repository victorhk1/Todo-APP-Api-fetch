//imports
import React, { Component } from 'react';
import TextHolder from './TextHolder';
import {Link} from 'react-router-dom';
import '../App.css';

//Använder av constructorn, tar del av props, this.props, super (props) tillåter acces till this.props
class DoList extends Component {
  constructor(props){
    super(props);
    this.state={
      theText:'',
      textHolders: [],
    }
  }
  //används för att ta bort texten
  changetheText(theText){
    this.setState({theText: theText.target.value})
  }
  //används för att lägga till texten till listan
  addText() {
    {/*Kollar ifall fältet är tomt*/}
    if (this.state.addText ==='') {return} 

    {/*Sätter en ny array till textHolders, get fokus till elementet */}
    let textHoldersArray = this.state.textHolders;
    textHoldersArray.push(this.state.theText);
    this.setState({ theText:''});
    this.textInput.focus();

  } 
  //används för att ta bort innehållet,tar då del av splice metoden
  deleteTextHolder(index){
    let textHoldersArray = this.state.textHolders;
    textHoldersArray.splice(index,1);
    this.setState({textHolders: textHoldersArray})
  }

  render() {
    {/*använder map metoden för att returnera valuen,keyn*/}
    let textHolders = this.state.textHolders.map((value, key) => {
      return <TextHolder key={key} text={value}
              deleteMethod={() => this.deleteTextHolder(key)} />
    })

    return (
      //div container, med en input som sätter inputen till staten av texten.
      <div className="container">
        <h1>TODO-APP</h1>
        <input type="text" ref={((input) => { this.textInput = input })}
          className="textInput" value={this.state.theText}
          //låter texten ändras
          onChange={theText => this.changetheText(theText)}
        />
        {/*Knapp som sätter in texten till listan */}
        <button onClick={this.addText.bind(this)}> Lägg till i listan</button>
        {/*Knapp som länkar vidare */}
        <Link to="/GetApiUser">
          <button>Gå vidare till API delen ></button>
        </Link>
        {/*Läser in de inskrivna svaren i listan */}
        {textHolders}
      </div>
    );
  }
}

export default DoList;
