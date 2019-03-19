//imports
import React from "react";
import {Link} from 'react-router-dom';
import '../App.css';

export default class GetApiUser extends React.Component {
  state = {
    inform: null
  };

  async componentDidMount() {
    //Laddar in datan, Rendarar componenten
    //Sätter urlen till en cost
    const url = "https://api.randomuser.me/";
    //väntar på att fetcha urlen eftersom async
    const response = await fetch(url);
    //väntar på responsen i från json filen
    const data = await response.json();
    this.setState({ inform: data.results[0] });
  }
  //Rendar innehållet
  //Ifall ingen person har kunnats tagit fram så letas det efter en person, text syns
  render() {
    if (!this.state.inform) {
      return <div>Letar efter en person</div>;
    }

    return (
      //div "kortet med datan innuti"
      <div className="card">
        {/*Läser in bilden. */}
        <img src={this.state.inform.picture.large} alt="person" />
        <div className="content">
          {/*Läser in title,firstname, lastname, nummer */}
          <div>{this.state.inform.name.title}: {this.state.inform.name.first} {this.state.inform.name.last}</div>
          <div>ålder: {this.state.inform.dob.age}</div>
          <div>telefonnummer: {this.state.inform.phone}</div>
          {/*En knapp som länkar tillbaka användaren*/}  
          <Link to="/">
            <button className="returnButton">Gå till TODO-App</button>
          </Link>

        </div>
      </div>
    );
  }
}
