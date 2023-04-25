import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";

import ProtectedRoute from "./components/ProtectedRoutes";

import Layout from "./components/Layout";

import SignUp from "./components/pages/signInUp/SignUp";
import SignIn from "./components/pages/signInUp/SignIn";
import NotFound from "./components/pages/NotFound";
import useTheme from "./hooks/useTheme";
import Search from "./components/pages/search/Search";
import AboutUs from "./components/pages/AboutUs";

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
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }
              ></Route>

              {/*==== test ======================*/}
              <Route path="/noauthlayout" element={<Layout />} />

              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/search" element={<Search />} />

              <Route path="/about-us" element={<AboutUs />} />

              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
