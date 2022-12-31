import React, { Component } from 'react';
class Counter extends Component {
    componentDidUpdate(prevProps,prevState){
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
        if(prevProps.counter.value!==this.props.counter.value){
            
        }

    }
    componentWillUnmount(){
        console.log("Counter-Unmount");
    }
    // ==============================
    // state = { 
    //     count:0,
    //     // value:this.props.value,
    //     // tags:['tag1','tag2','tag3']
    //     // tags:[]
    //     // imageUrl:"https://picsum.photos/200"
    //  } ;
     styles={
         fontWeight:"bold",
         fontSize:15
     }
    //  renderTags(){
    //      if(this.state.tags.length===0) return <p>There are no tags!</p>;
    //      return <ul>
    //      {this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}
    //  </ul>;
    //  }

    // constructor(){
    //     super();
    //     // console.log("Constructor",this);
    //     this.handleIncrement=this.handleIncrement.bind(this);
    // }
// ===========================================================================
    // handleIncrement=product=>{
    //     // console.log("Increment Clicked",this);
    //     console.log(product);
    //     // this.setState({value:this.state.count+1});
    //     this.setState({count:this.state.count+1});
    // }
    // doHandleIncrement=()=>{
    //     this.handleIncrement({id:1});
    // };

    render() { 
        console.log('Counter-Rendered');
        // console.log("props",this.props);
     
        return (
        <div className='row'>
          <div className="col-1">

        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>    
          </div>
          <div className="col">

        {/* <img src={this.state.imageUrl} alt="" /> */}
        <button 
        // onClick={this.doHandleIncrement}
        onClick={()=>this.props.onIncrement(this.props.counter)}
        // onClick={()=>this.handleIncrement(product)}
        className='btn btn-secondary btn-sm'>+</button>
        {/* {this.state.tags.length===0 && "Please create a new tag!"}
        {this.renderTags()} */}

        <button 
        // onClick={this.doHandleIncrement}
        onClick={()=>this.props.onDecrement(this.props.counter)}
        // onClick={()=>this.handleIncrement(product)}
        className='btn btn-secondary btn-sm m-2'
        disabled={this.props.counter.value===0?"disabled":""}
        
        >-</button>
        <button 
        onClick={()=>this.props.onDelete(this.props.counter.id)} 
        className="btn btn-danger btn-sm m-2">Delete</button>
          </div>


        </div>
        );
    }

    getBadgeClasses() {
        let classes = "btn m-2 btn-";
        // classes += (this.state.count === 0) ? "warning" : "primary";
        // classes += (this.props.counter.count === 0) ? "warning" : "primary";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        // const {count}=this.state;
        const {value}=this.props.counter;
        return value===0 ?'zero':value;
        // const {count}=this.props.counter;
        // return count===0 ?'zero':count;
    }
}
 
export default Counter;