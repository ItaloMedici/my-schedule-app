import { Route, Routes as Switch } from 'react-router-dom';
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import Register from '../pages/Register';


const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Auth />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<Home />} />
    </Switch>
  )
}

export default Routes;