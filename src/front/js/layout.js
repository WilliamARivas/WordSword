import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { About } from "./pages/about";
import { Donate } from "./pages/donate";
import { Create } from "./pages/create";
import { Demo } from "./pages/demo";
import { User } from "./pages/user";
import { Output } from "./pages/output";
import { OutputCopy } from "./pages/outputcopy";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        {/* <div className="main text-center bg-success p-2 text-dark bg-opacity-25"> */}
        {/* <div
          className="row justify-content-start w-75 "
          style={{ marginLeft: "12%" }}
          > */}
        <Navbar />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/donate" element={<Donate />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/demo" element={<Demo />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/output" element={<Output />} />
          <Route exact path="/outputcopy" element={<OutputCopy />} />
          <Route exact path="/" element={<Home />} />
          <Route render={() => <h1>Not found!</h1>} />
        </Routes>
        {/* </div> */}
        {/* <div className="footerrow"> */}
        <Footer />
        {/* </div> */}
        {/* </div> */}
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
