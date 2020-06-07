// used to create a reference to a specific DOM element
class testComponent extends React.Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
        this.customRef = React.createRef();
    }

    componentDidMount(){
        this.inputRef.current.focus();
        this.customRef.current.memberMethod(); // member function of the child component
    }

    readValue = () =>{
        console.log("value entered:" + this.inputRef.current.value);
    }

    render(){
        return(
            <>
                // ==================  simple ref
                <div>
                    <input type="text" ref={this.inputRef}/>
                    <button onClick={this.readValue}>Click Me</button>
                </div>

                // ==================  ref can invoke methods od child class directly
                <CustomClass ref={this.customRef}/>
            </>
        )
    }
}