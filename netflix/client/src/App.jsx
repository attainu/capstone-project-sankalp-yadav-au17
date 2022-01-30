import {Routes,Switch,Route,Redirect} from "react-router-dom";

import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Watch from './pages/watch/watch';
import Login from './pages/login/login';

function App() {
  return (
    <Routes>
      
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        {user && (
          <>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/watch">
              <Watch />
            </Route>
          </>
        )}
      
    </Routes>
  );
}

export default App;