// import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import EditProfile from "./Pages/EditProfile";
import UserList from "./Pages/UserList";
import StaffList from "./Pages/StaffList";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path='/add-asset' element={<AddAsset />} />
          <Route path='/view-asset' element={<ViewAsset />} />
          <Route path='/manage-category' element={<ManageCategory />} />
          <Route path='/create-account' element={<CreateAccount />} />
          <Route path='/view-account' element={<ViewAccount />} />
        </Route> */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/StaffList" element={<StaffList />} />
      </Routes>
    </Router>
  );
}

export default App;
