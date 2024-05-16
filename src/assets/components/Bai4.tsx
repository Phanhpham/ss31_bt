import React, { Component } from 'react'
interface Company{
    name:string,
    status:boolean
}
export default class Bai3 extends Component<{},Company> {
    constructor(props:Company) {
        super(props);
        this.state={
            name:"hoc code de di lm",
            status:true,
        }
        }
          shouldComponentUpdate():boolean{
            return false;
          }
    changeCompany =()=>{
        this.setState({
            name:"hoc code de di choi"
        });
    };
  render() {
    return (
      <div>Bai3
             <h1>company:{this.state.name}</h1>
        <button onClick={this.changeCompany}>Change state</button>
      </div>
    )
  }
}