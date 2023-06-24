import "./styles.css";
import ReverseString from "./components/Reverse-String-Test";
import PlaindormString from "./components/Palindrom-String";
import ListUsers from "./components/ListUsers";

export default function App() {
  return (
    <div className="App">
      <h1>REACT DEVELOPER PRACTICAL INTERVIEW</h1>
      <ReverseString />
      <PlaindormString />
      <ListUsers />
    </div>
  );
}
