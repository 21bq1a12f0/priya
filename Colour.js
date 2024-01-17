import React,{Component} from 'react';

class Colour extends Component{
    constructor(props){
        super(props)
        this.state={color:"green"};
    }
    handleRed=( )=>{
        this.setState({color:"red"});
    }
        handleBlue=( )=>{
            this.setState({color:"blue"});
    }
    
    render( ){
        return(<div>
            <h1 onMouseOver={this.handleRed} onMouseOut ={this.handleBlue} style={this.state} >hello</h1>
        </div>)
    }

}export default Colour;