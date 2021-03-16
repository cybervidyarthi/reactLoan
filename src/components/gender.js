import React from "react";

class GenderRadioButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRadio: 'Male'
    };
  }

  handleRadioChange = (event) => {
    this.setState(
      {
      selectedRadio: event.currentTarget.value}
    )
  };

  render() {
    return (
      <div className="radio-row">
        <div className="input-row">
          <input type="radio" name="Male" value="Male"
            checked={this.state.selectedRadio === 'Male'}
            onChange={this.handleRadioChange}
          />
          <label htmlFor="Male">Male</label>
        </div>
        <div className="input-row">
          <input type="radio" name="Female" value="Female"
            checked={this.state.selectedRadio === 'Female'}
            onChange={this.handleRadioChange}
          />
          <label htmlFor="Female">Female</label>
        </div>
      </div>
    )
  }
}

export default GenderRadioButton;