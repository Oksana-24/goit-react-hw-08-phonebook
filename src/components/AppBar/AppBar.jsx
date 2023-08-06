import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <hrader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </hrader>
  );
};
