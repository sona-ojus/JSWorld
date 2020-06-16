// used to prevent prop drilling
// It has a Provider and a Consumer
// Provider wraps in the top level and all child elements can access the data provided by it.
// Consumer always wraps a function, with argument context_data passed by Provider
// can pass functions also, but only one attribute "valu="

import React from 'react';

var MyContext = React.createContext();

class MyProvider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"sona",
            age: 26,
            city: "Bengaluru"
        };
    }

    render(){
        return(
            <div>
                <MyContext.Provider value={{
                    state: this.state, 
                    incrementAge: ()=>{
                        this.setState({age: ++this.state.age});
                    }
                }}>
                    {this.props.children}
                </MyContext.Provider>
            </div>
        )
    }
}

// Paret class
class ParentClass extends React.Component{
    constructor(props){
        super(props);
        // this.state = {name:"sona"};
    }

    render(){
        return(
            <MyProvider>
                <MyContext.Consumer>
                    {(data)=>{
                        return <div>Parent Age : {data.state.age}</div>
                    }}
                </MyContext.Consumer>
                <Child2 />
            </MyProvider>
        )
    }
}

// First level child component
class Child1 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Child2 />
            </div>
        )
    }
}

// Second level child component
class Child2 extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <MyContext.Consumer>
                {(context) => {

                    return(
                        <div>
                            my name is {context.state.name}<br/>
                            my age is {context.state.age}<br/>
                            my city is {context.state.city}<br/>
                            <button onClick={context.incrementAge}>
                                Click me!!
                            </button>
                        </div>
                    )
                }}
            </MyContext.Consumer>
        )
    }
}

export default ParentClass;
