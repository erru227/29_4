const root = ReactDOM.createRoot(document.getElementById("root"));

function FunctionComponent() {
   return <h1>Hello!</h1>;
}

class ClassComponent extends React.Component {
   render() {
      return <h2>This is the Second Part</h2>;
   }
}

let page = <>
   <FunctionComponent/>
   <ClassComponent/>
</>;

root.render(page);
