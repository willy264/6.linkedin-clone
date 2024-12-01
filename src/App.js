import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useEffect } from "react";
import Login from './components/Login';
import Header  from './components/Header';
import { getUserAuth } from "./redux/actions";
import { connect } from "react-redux";
import RequireAuth from "./components/RequireAuth";
import MyNetwork from './pages/MyNetwork';
import Jobs from './pages/Jobs';
import Messaging from './pages/Messaging';
import Notifications from './pages/Notifications';
import Home from './components/Home';


const App = (props) => {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<Login />} /> */}
          <Route
            path="/*"
            exact
            element={
              // <RequireAuth>
                <div>
                  <Header />
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/mynetwork" element={<MyNetwork />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/messaging" element={<Messaging />} />
                    <Route path="/notifications" element={<Notifications />} />
                  </Routes>
                </div>
              // </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (disptach) => {
  return {
    getUserAuth: () => disptach(getUserAuth()),
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(App)