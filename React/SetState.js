// ideal syntax
this.setState({
    counter: this.counter
});

// if the state is set using current values of state and props
this.setState(function(state, props) {
   return {counter: state.counter + props.increment}
  });