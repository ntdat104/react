import React, { Component } from 'react';

//* Hàm click trong REACT

function run1(){
    alert("run1")
}

class Lession3 extends Component {
    constructor(props) {
        super(props);
    }

    run2(){
        alert("run2");
    }

    run3(x){
        alert(x);
    }
    
    render() {
        return (
            <div>
                <button onClick={run1}>run1</button>
                <button onClick={this.run2}>run2</button>
                <button onClick={() => this.run2()}>run2</button>
                <button onClick={() => this.run3("run3")}>run3</button>
                <button onClick={this.run3.bind(this, "run3")}>run3</button>
            </div>
        );
    }
}

export default Lession3;