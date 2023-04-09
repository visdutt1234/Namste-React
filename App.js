const parent  = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I'm and h1 tag"),
        React.createElement("h2", {}, "I'm and h2 tag")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "I'm an h1 tag"),
        React.createElement("h1", {}, "I'm an h1 tag")
    ])
])

// JSX
console.log(parent)
const root =  ReactDOM.createRoot(document.getElementById("header"))
root.render(parent)
