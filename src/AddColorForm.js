import React from 'react';

class AddColorForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log('handlechange', e.target);
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    console.log('handlesubmit', e);
  }

  render() {
    return (
      <div>
        <form onSubmit= { this.handleSubmit }>
          <input onChange={this.handleChange} placeholder="color name" id="color" name="color" type="text"></input>

        </form>
        {this.props.color}
      </div>
    )
  }
}

export default AddColorForm;