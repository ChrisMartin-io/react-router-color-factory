import React from 'react';
import Color from './Color';
import AddColorForm from './AddColorForm';

class ColorsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    }
  }

  addColor(color) {
    this.setState(st => ({
      colors: [...st.colors, color]
    }));
  }

  render() {
    return (
      <div>
        <div className="add-color">
          <AddColorForm addColor={this.addColor} />
        </div>
        {this.state.colors.map(color => (
          <Color color={color} />
        ))}
      </div>
    )
  }
}

export default ColorsList;