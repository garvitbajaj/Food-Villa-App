

const heading = React.createElement("h1",
{
    id:"heading",
    style : {
       background : "red",
    },
    className :"title"
},
"Hello Everyone"
);

const para = React.createElement("p",
{
    id:"para",
},
"Namaste React"
);

const container = React.createElement("div",
{
    id:"container"
},
[heading,para]
);

//using createRoot to
const root = ReactDOM.createRoot(document.getElementById("root"));
//using Root render react element  
root.render(container);

