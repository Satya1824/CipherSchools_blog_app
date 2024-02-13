import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { ThemeProvider } from "./providers/theme-provider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/auth.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ToastContainer />
    {/* <ThemeProvider
      defaultTheme="dark"
      forcedTheme={"dark"}
      storageKey="vite-ui-theme"
    > */}
    <App />
    {/* </ThemeProvider> */}
  </AuthProvider>
);
