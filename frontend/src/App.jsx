import "./App.css";
import SideBar from "./components/SideBar";
import AddBook from "./components/AddBook";
import AddUser from "./components/AddUser";

function App() {
  return (
    <>
      <div className="container">
        <SideBar />
        {/* <AddBook />  */}
        <AddUser /> 
      </div>
    </>
  );
}

export default App;
