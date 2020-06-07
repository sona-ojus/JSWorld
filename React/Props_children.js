// anything included between opening and closing tag of a component
// it is passed to the corresponding component
// where it can be accessed as props.children

function testComponent(){
    return(
        <Picture a={10} b={20}>
            <p> this is the children element </p>
        </Picture>
    )
}

function Picture(props){
    <div>
        <img src="./test"/>
        {props.children} // will display the paragraph element here.
    </div>
}