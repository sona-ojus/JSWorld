// if a DOM instance inside child component needs to be accessed in parent

const buttonComponent = React.forwardRef((props, ref) =>{
    <button ref={ref}> {props.children}</button>
})

var ref = React.createRef();
<buttonComponent ref={ref}> Click Me </buttonComponent>