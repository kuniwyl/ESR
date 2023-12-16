import { Outlet } from 'react-router-dom';
import { Navigation } from '../../components/ui';

const DefaultLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
