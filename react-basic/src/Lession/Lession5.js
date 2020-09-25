import React, { Component } from "react";
import "../css/Lession5.css";

//* Form
class Lession5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: "",
      textDesc: "",
      gender: 0,
      lang: "vi",
      checkRobot: true,
    };
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="lession5">
        <h1>Form nhập liệu</h1>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input name="userName" type="text" placeholder="Username" onChange={(e) => this.handleChange(e)}/>
          <input name="passWord" type="password" placeholder="Password" onChange={(e) => this.handleChange(e)}/>
          <textarea name="textDesc" placeholder="Mô tả" onChange={(e) => this.handleChange(e)}></textarea>
          <select name="gender" defaultValue={this.state.gender} onChange={(e) => this.handleChange(e)}>
            <option value={0}>Male</option>
            <option value={1}>Female</option>
          </select>
          <div className="radio">
            <input type="radio" name="lang" value="vi" id="vi" onChange={(e) => this.handleChange(e)} checked={this.state.lang === "vi"}/>
            <label htmlFor="vi">Vietnamese</label>
          </div>
          <div className="radio">
            <input type="radio" name="lang" value="en" id="en" onChange={(e) => this.handleChange(e)} checked={this.state.lang === "en"}/>
            <label htmlFor="en">English</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" name="checkRobot" defaultValue ={true} id="checkbox" onChange={(e) => this.handleChange(e)} checked={this.state.checkRobot === true}/>
            <label htmlFor="checkbox">Tôi không phải người máy</label>
          </div>
          <div className="btn">
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Lession5;
