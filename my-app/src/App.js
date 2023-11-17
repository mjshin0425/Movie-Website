import { useState, useEffect } from "react";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);
//   useEffect(() => {
//     console.log("i run only once");
//   }, []);
//   useEffect(() => {
//     console.log("I  run when 'keyword' changes.");
//   }, [keyword]);
//   useEffect(() => {
//     console.log("I  run when 'counter' changes.");
//   }, [counter]);
//   useEffect(() => {
//     console.log("I run when keyword or counter changes");
//   }, [keyword, counter]);
//   return (
//     <div>
//       <input
//         value={keyword}
//         onChange={onChange}
//         type="text"
//         placeholder="Search"
//       ></input>
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

function Hello() {
  return <h1>Hello</h1>;
}

// Cleanup : 컴포넌트가 사라질 때 감지
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
export default App;
