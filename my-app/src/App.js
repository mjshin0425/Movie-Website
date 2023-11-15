import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      {/* Button.js 컴포넌트가 들어감*/}
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
