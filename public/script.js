const root = ReactDOM.createRoot(document.getElementById("root"));



let page = <>
   <Greeting/>
   <Content></Content>
</>;

root.render(page);

function Greeting() {
   return <h1>Hello!</h1>;
}

class Content extends React.Component {
   render() {
      return <h2>This is the Second Part</h2>;
   }
}

