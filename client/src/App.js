import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Movie from './pages/Movie/Movie';
import Movies from './pages/Movies/Movies';
import Actor from './pages/Actor/Actor';
import Header from './components/header/Header';
import Serials from './pages/Serials/Serials';
import Actors from './pages/Actors/Actors';
import Serial from './pages/Serial/Serial';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './router/PrivateRoute.jsx';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/serials" element={<Serials />} />
            <Route path="/actors" element={<Actors />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/actor/:id" element={<Actor />} />
            <Route path="/serial/:id" element={<Serial />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
export default App;
