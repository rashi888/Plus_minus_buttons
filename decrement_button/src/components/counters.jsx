import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  
        counters:[
            {id:1,value:4},
            {id:2,value:0},
            {id:3,value:0},
            {id:4,value:0},
        ]
    } ;
    // constructor(props){
    //     super(props);
    //     console.log("App-Constructor",this.props);
    // };

    // componentDidMount(){
    //     console.log('App-Mounted');
    // }



    handleReset=()=>{
        const counters=this.state.counters.map(c=>{
            c.value=0;
            return c;
        });
        this.setState({counters});
    };
    handleIncrement=counter=>{
        // console.log(counter);
        const counters=[...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index]={...counter};
        counters[index].value++;
        this.setState({counters});
        // console.log(this.state.counters[0]);
    }
    handleDecrement=counter=>{
        // console.log(counter);
        const counters=[...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index]={...counter};
        counters[index].value--;
        this.setState({counters});
        // console.log(this.state.counters[0]);
    }


    handleDelete=counterId=>{
        console.log("Event Handler called",counterId);
        const counters=this.state.counters.filter(c=>c.id !==counterId);
        this.setState({counters})
    };
    render() { 
        console.log('App-Rendered');


        // const {onReset,counters,onDelete,onIncrement}=this.props;
        return (
            <div>
            {/* <Counter/>
            <Counter/>
            <Counter/>
            <Counter/> */}
            <button onClick={this.handleReset}
            className="btn btn-primary btn-sm m-2">Reset</button>

            {this.state.counters.map(counter=> 
            <Counter 
            key={counter.id} 
            onDelete={this.handleDelete} 
            // value={counter.value} 
            // id={counter.id}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counter={counter}

            />)}
            
            </div>
        );
    }
}
 
export default Counters;