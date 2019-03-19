import React, { Component } from 'react'

export default class TextHolder extends Component {
  render() {
    return (
      <div className="TextHolder" onClick={this.props.deleteMethod}>
        {this.props.text}
        
      </div>
    );
  }
}
