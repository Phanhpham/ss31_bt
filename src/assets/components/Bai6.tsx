import React, { Component } from 'react'
interface Company{
    name:string,
    status:boolean
}
interface Props{

}
export default class Bai3 extends Component<{},Company> {
    constructor(props:Props) {
        super(props);
        this.state={
            name:"interface randering",
            status:true,
        }
        }
          shouldComponentUpdate():boolean{
            return false;
          }
    changeCompany =()=>{
        this.setState({
            name:"interface randering 2"
        });
    };
  render() {
    return (
      <div>Bai6
             <h1>company:{this.state.name}</h1>
        <button onClick={this.changeCompany}>Change state</button>
      </div>
    )
  }
}