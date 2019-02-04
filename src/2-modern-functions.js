/*
 * FUNCTIONS
 */

// old
function HelloWorldOld(props) {
  return <h1>Message: {props.message}</h1>;
}

// current
const HelloWorld = props => {
  return <h1>Message: {props.message}</h1>;
};

// current, destructuring args
const HelloWorldDestructuring = ({ message }) => {
  return <h1>Message: {message}</h1>;
};
