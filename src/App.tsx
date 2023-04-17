import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";

import ProtectedRoute from "./components/ProtectedRoutes";

import Layout from "./components/Layout";

import SignUp from "./components/pages/SingInUp/SignUp";
import SignIn from "./components/pages/SingInUp/SignIn";
import NotFound from "./components/pages/NotFound";
import useTheme from "./hooks/useTheme";

function App() {
  const { mode, changeMode } = useTheme();

  return (
    <div className={mode  }>
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
              <Route path="/lo" element={<Layout />} />

              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/sign-in" element={<SignIn />} />

              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
