import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useEffect } from "react";
import Login from './components/Login';
import Header  from './components/Header';
import Home from './components/Home';
import { getUserAuth } from "./redux/actions";
import { connect } from "react-redux";
import RequireAuth from "./components/RequireAuth";


const App = (props) => {
  useEffect(() => {
    props.getUserAuth();
  }, []);

// function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}/>
          <Route path="/home" element={
              <RequireAuth>
                <Header />
                <Home />
              </RequireAuth>
            }/>

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