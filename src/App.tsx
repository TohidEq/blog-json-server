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
import MyUserLikes from "./components/pages/MyUserLikes";
import Blog from "./components/pages/blog/Blog";
import NewLike from "./components/card/LikesAndCommentsCounter/NewLike";
import DeleteBlog from "./components/pages/blog/DeleteBlog";
import DeleteComment from "./components/pages/blog/DeleteComment";

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
              <Route path="/" element={<Layout />}></Route>

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

              <Route path="/likes" element={<MyUserLikes />} />

              <Route path="/search/" element={<Search />} />
              <Route path="/search/:method/" element={<Search />} />

              <Route path="/blog/:blog_id/" element={<Blog />} />
              <Route
                path="/like/:blog_id/"
                element={
                  <ProtectedRoute>
                    <NewLike />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/delete/blog/:blog_id/"
                element={
                  <ProtectedRoute>
                    <DeleteBlog />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/delete/comment/:comment_id/"
                element={
                  <ProtectedRoute>
                    <DeleteComment />
                  </ProtectedRoute>
                }
              />

              <Route path="/about-us" element={<AboutUs />} />

              <Route path="/profile/:username/*" element={<Profile />} />

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
