import React, { Component } from 'react'
interface Company{
    name:string,
    status:boolean
}
export default class Bai3 extends Component<{},Company> {
    constructor(props:Company) {
        super(props);
        this.state={
            name:"RA",
            status:true,
        }
        }
          componentWillMount():void {
            this.state.status
            ? this.setState({name:"RA"})
            : this.setState({name:"Rk"});

          }
    changeCompany =()=>{
        this.componentWillMount();
        this.setState({
            status:!this.state.status,
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

