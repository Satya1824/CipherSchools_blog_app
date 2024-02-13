import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import SingleBlog from "./pages/SingleBlog";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import AddBlog from "./pages/AddBlog";
import Blogs from "./pages/Blogs";
import { useAuth } from "./context/auth";

function App() {
  const [auth, setAuth] = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/addblog" element={auth?.user ? <AddBlog /> : <Auth />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
