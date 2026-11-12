const root = ReactDOM.createRoot(document.getElementById("root"));



let page = <>
   <classComponent/>
</>;

root.render(page);

function classComponent() {
   return <h1>Hello!</h1>;
}

class FunctionComponent extends React.Component {
   render() {
      return <h2>This is the Second Part</h2>;
   }
}

