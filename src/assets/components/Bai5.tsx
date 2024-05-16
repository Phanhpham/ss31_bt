import React, { Component } from 'react'
interface App{
    name:string,
    status:boolean
}
export default class Bai5 extends Component<{},App> {
    constructor(props:App) {
        super(props);
        this.state={
            name:"close the form",
            status:true,
        }
        }
    changeCompany =()=>{
        this.setState({
            name:"open the form",
        });
    };
  render() {
    const {name}=this.state;
    return (
      <div>Bai5
             <span> Status:{name}</span>
        <button onClick={this.changeCompany}>Change props</button>
      </div>
    )
  }
}

