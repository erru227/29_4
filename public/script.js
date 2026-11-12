const root = ReactDOM.createRoot(document.getElementById("root"));



const component = <Greeting />;

function Greeting() {
   return <h1>Hello!</h1>;
}
root.render(component);
/*
class Greeting extends React.Component {
   render() {
      return <h1>Hello!</h1>;
   }
}
*/
