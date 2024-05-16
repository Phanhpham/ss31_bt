
import React, { Component } from 'react'
interface User{
    name:string;
}
export default class Bai1 extends Component<{},User> {
    constructor(prop:User) {
           super(prop);
           this.state = {
                  name: 'pham phuong anh'
            };
             }
    componetWillMount():void{
        this.setState({
            name:"phanh"
        })
       
    }
  render() {
    return (
      <div>Bai1
        <h1>Xin chào, {this.state.name}!</h1>
      </div>
    )
  }
}
