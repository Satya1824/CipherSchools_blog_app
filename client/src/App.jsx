import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import SingleBlog from "./pages/SingleBlog";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
