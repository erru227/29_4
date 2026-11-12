const root = ReactDOM.createRoot(document.getElementById("root"));



let page = <>
   <functionComponent/>
   <ClassComponent/>
</>;

root.render(page);

function functionComponent() {
   return <h1>Hello!</h1>;
}

class ClassComponent extends React.Component {
   render() {
      return <h2>This is the Second Part</h2>;
   }
}

