import "./App.css";
import AddBook from "./components/addBook";
import AddUser from "./components/addUser";
import DisplayBook from "./components/displayBooks";
import DisplayUser from "./components/displayUsers";
import ErrorPage from "./components/errorPage";
import Sidebar from "./components/sidebar";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AddBook />} />
        <Route path="/books/add" element={<AddBook />} />
        <Route path="/books" element={<DisplayBook />} />
        <Route path="/users/add" element={<AddUser />} />
        <Route path="/users" element={<DisplayUser />} />
        
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="container">
      {/* Divide screen horizontally into 2 parts: sidebar and main content */}
      <div style={{ width: "20%" }}>
        <Sidebar />
      </div>
      <div style={{ width: "80%" }} className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
