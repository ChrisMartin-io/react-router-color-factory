import React from 'react';

class Color extends React.Component {
  render() {
    return (
      <div>
        {this.props.color}
      </div>
    )
  }
}

export default Color;