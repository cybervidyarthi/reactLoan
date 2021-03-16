import React from "react";

class RoleRadioButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRadio: 'Admin'
    };
  }

  handleRadioChange = (event) => {
    this.setState({
      selectedRadio: event.currentTarget.value
    })
  };

  render() {
    return (
      <div className="radio-row">
        <div className="input-row">
          <input type="radio" name="admin" value="Admin"
            checked={this.state.selectedRadio === 'Admin'}
            onChange={this.handleRadioChange}
          />
          <label htmlFor="Admin">Admin</label>
        </div>
        <div className="input-row">
          <input type="radio" name="staff" value="Staff"
            checked={this.state.selectedRadio === 'Staff'}
            onChange={this.handleRadioChange}
          />
          <label htmlFor="Staff">Staff</label>
        </div>
      </div>
    )
  }
}

export default RoleRadioButton;