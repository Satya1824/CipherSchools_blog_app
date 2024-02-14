import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import SingleBlog from "./pages/SingleBlog";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import AddBlog from "./pages/AddBlog";
import Blogs from "./pages/Blogs";
import { useAuth } from "./context/auth";
import UpdateBlog from "./pages/UpdateBlog";
import { useSearch } from "./context/search";
import Search from "./pages/Search";

function App() {
  const [auth, setAuth] = useAuth();
  const [search, setSearch] = useSearch();
  return (
    <BrowserRouter>
      <Routes>
        {search ? (
          <Route path="*" element={<Search />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/addBlog" element={<AddBlog />} />
            <Route path="/updateBlog/:id" element={<UpdateBlog />} />
            <Route path="*" element={<PageNotFound />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
