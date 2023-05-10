import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";

import ProtectedRoute from "./components/ProtectedRoute";

import Layout from "./components/Layout";

import SignUp from "./components/pages/signInUp/SignUp";
import SignIn from "./components/pages/signInUp/SignIn";
import NotFound from "./components/pages/NotFound";
import useTheme from "./hooks/useTheme";
import Search from "./components/pages/search/Search";
import AboutUs from "./components/pages/AboutUs";
import Profile from "./components/pages/profile/Profile";
import Create from "./components/pages/create/Create";
import Home from "./components/Home";

import { Provider } from "react-redux";
import ProtectedSignInUp from "./components/pages/signInUp/ProtectedSignInUp";

function App() {
  const { mode, changeMode } = useTheme();

  return (
    <div className={`${mode} base`}>
      <div className={`App`}>
        <BrowserRouter>
          {/* Routes */}
          <Sidebar mode={mode} changeMode={changeMode} />
          <main>
            <Routes>
              {/* <Route path="/" element={<Home />} /> */}
              <Route
                path="/"
                element={
                    <Layout />
                }
              ></Route>

              <Route
                path="/sign-up"
                element={
                  <ProtectedSignInUp>
                    <SignUp />
                  </ProtectedSignInUp>
                }
              />
              <Route
                path="/sign-in"
                element={
                  <ProtectedSignInUp>
                    <SignIn />
                  </ProtectedSignInUp>
                }
              />
              <Route path="/search" element={<Search />} />

              <Route path="/about-us" element={<AboutUs />} />

              <Route
                path="/myprofile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/create"
                element={
                  <ProtectedRoute>
                    <Create />
                  </ProtectedRoute>
                }
              />

              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
