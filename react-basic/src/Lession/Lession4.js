import React, { Component } from 'react';

//* Tìm hiểu về state và setState + defaultValue

//* LifeCycle trong REACT - chia làm 4 phần init - mounting - update - unmounting
//* Sử dụng thuộc tính Ref

//TODO Phần mounting gồm 3 hàm:
//* componentWillMount 
//* render()
//* componentDidMount

class Lession4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switch: 0,
            title: "Tên tiêu đề muốn thay đổi",
            data: "Thay đổi tiêu đề",
        };
    }

    renderButton(){
        return (
            <button onClick={() => this.editClick()}>Edit</button>
        )
    }

    editClick(){
        this.setState({switch:1})
    }

    renderForm(){
        return (
            <div>
                <input ref={(data) => this.temp = data} defaultValue={this.state.title} type="text"/>
                <button onClick={() => this.saveClick()}>Save</button>
            </div>
        )
    }

    saveClick(){
        console.log(this.temp.value)
        this.setState({
            switch:0,
            data: this.temp.value,
        })
    }

    displayCheck(){
        if (this.state.switch === 0){
            return this.renderButton()
        } else {
            return this.renderForm()
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                {this.displayCheck()}
            </div>
        );
    }
}

export default Lession4;