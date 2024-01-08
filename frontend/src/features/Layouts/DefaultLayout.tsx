import { Outlet } from 'react-router-dom';
import { Navigation } from '../../components/ui';
import VInfo from '@/features/info/VInfo.tsx';

const DefaultLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <VInfo />
    </div>
  );
};

export default DefaultLayout;
