import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import File from "./Pages/File";
import Url from "./Pages/URLs";
import Search from "./Pages/Search";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Result from "./Pages/Result";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          {/* Route con cho các tab */}
          <Route path="file" element={<File />} />
          <Route path="url" element={<Url />} />
          <Route path="search" element={<Search />} />
        </Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Result" element={<Result />}></Route>
        <Route path="/Result" element={<Result />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
