import useGetSystemAdmins from '@/logic/hooks/systemAdmin/useGetSystemAdmins.ts';
import useDelSystemAdmin from '@/logic/hooks/systemAdmin/useDelSystemAdmin.ts';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/configuration/config.ts';

const CSystemsAdmins = () => {
  const systemsAdmins = useGetSystemAdmins();
  const delSystemAdmin = useDelSystemAdmin();

  const navigate = useNavigate();

  const createSystemAdmin = () => {
    navigate(ROUTES.SYSTEM_ADMIN_ADD());
  };

  const editSystemAdmin = (id: number) => {
    navigate(ROUTES.SYSTEM_ADMIN_EDIT(id.toString()));
  };

  const goBack = () => {
    navigate(-1);
  };

  const del = (id: number) => {
    delSystemAdmin.mutate(id);
  };

  return { systemsAdmins, del, createSystemAdmin, editSystemAdmin, goBack };
};

export default CSystemsAdmins;
