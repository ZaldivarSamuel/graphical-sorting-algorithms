import React from 'react';

class Rectangle extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      id: this.props.rectID,
      height: this.props.height
    };

    console.log("Created Rectangle with ID: " + this.state.id);
  }

  render(){
    return(
      <div id={this.state.id} className="rectangle" style={{left: 20 * this.state.id + 20, height : this.state.height}}>
      </div>
    )
  }
}

export default Rectangle;
