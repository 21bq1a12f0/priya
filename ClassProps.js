import React,{Component} from 'react';

 class ClassProps extends Component(){
    constructor(props){
        super(props);
       this.state={age:21};
}
render()  {
   return ( <div>
          <h1>{this.props.firstname}</h1>
          <h1>{this.props.lastname}</h1>
          <h1>{this.State.age}</h1>
            </div>);
    }
}export default ClassProps;