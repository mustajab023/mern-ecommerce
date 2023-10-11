import { Route, Routes } from 'react-router-dom';
import Home, { Login, Signup, NotFound } from './pages';
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/authentication/login" Component={Login} />
        <Route path="/authentication/signup" Component={Signup} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </>
  );
};
export default App;
