// import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import EditProfile from "./Pages/EditProfile";
import UserList from "./Pages/UserList";
import StaffList from "./Pages/StaffList";
import Stats from "./Pages/Stats";
import SharedLayout from "./Pages/SharedLayout";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Profile from "./Pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/staff-List" element={<StaffList />} />
          <Route path="/Profile" element={<Profile />} />
        </Route>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editProfile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
