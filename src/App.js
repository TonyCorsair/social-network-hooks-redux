import React from "react";

////////Components
import Alert from "./components/Alert/Alert";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { SignUpPage } from "./components/AuthPages/SignUpPage/SignUpPage";
import { SignUpSuccessPage } from "./components/AuthPages/SignUpSuccessPage/SignUpSuccessPage";
import { LogInPage } from "./components/AuthPages/LogInPage/LogInPage";

/////////Context
// import { AppProvider } from "./AppContext/AppContext";
import { AlertProvider } from "./AppContext/AlertContext";
import { AuthProvider } from "./AppContext/AuthContext";

//////Routing
import { Route } from "react-router-dom";

////////////styles
import "./styles/index.scss";
import { Profile } from "./components/AppPages/Profile/Profile";

function App() {
  return (
    // <AppProvider>
    <AuthProvider>
      <AlertProvider>
        <div className="App">
          <Alert />
          <Header />
          <Navbar />
          <Route path="/signup" render={() => <SignUpPage />} />
          <Route path="/signup-success" render={() => <SignUpSuccessPage />} />
          <Route path="/login" render={() => <LogInPage />} />
          <Route path="/profile" render={() => <Profile />} />
        </div>
      </AlertProvider>
    </AuthProvider>
    // </AppProvider>
  );
}

export default App;
