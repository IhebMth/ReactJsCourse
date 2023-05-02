import React, { Component } from "react";

class Condition extends Component {
  constructor(props) {
    super(props);
    this.state = {
    selectedOption: "",
    checkedOption: false,
    radioOption: ""
  };
}

handleSelectChange = (event) => {
  this.setState({ selectedOption: event.target.value });
};

handleCheckboxChange = (event) => {
  this.setState({ checkedOption: event.target.checked });
};

handleRadioChange = (event) => {
  this.setState({ radioOption: event.target.value });
};

render() {
  const { selectedOption, checkedOption, radioOption } = this.state;

  return (
    <div>
      <div style={{marginLeft: "20vw", margin:"5vw"}}>
      <h1>Form Example</h1>
      <form>
        <label>
          Select Option:
          <select
            value={selectedOption}
            onChange={this.handleSelectChange}
          >
            <option value="">--Select--</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </label>
        <br />
        <label>
          Checkbox Option:
          <input
            type="checkbox"
            checked={checkedOption}
            onChange={this.handleCheckboxChange}
          />
          Option 1
          </label>
        <br />
        <label>
          Radio Option:
          <input
            type="radio"
            name="radioOption"
            value="option1"
            checked={radioOption === "option1"}
            onChange={this.handleRadioChange}
          />
          Option 1
          <input
            type="radio"
            name="radioOption"
            value="option2"
            checked={radioOption === "option2"}
            onChange={this.handleRadioChange}
          />
          Option 2
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
}
}

export default Condition