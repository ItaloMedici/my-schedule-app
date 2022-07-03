import { useAuth } from '../contexts/auth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

const Routes = () => {
  const { signed } = useAuth();
  console.debug("LOGADO", signed)
  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;