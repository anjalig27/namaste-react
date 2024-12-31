const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "this is h1 heading"),
    React.createElement("h2", {}, "this is h2 heading"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "this is h1 heading"),
    React.createElement("h2", {}, "this is h2 heading"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
