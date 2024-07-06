import useGetSystemAdmin from '@/logic/hooks/systemAdmin/useGetSystemAdmin.ts';
import { useEffect } from 'react';
import CAddress from '@/features/address/CAddress.ts';
import useAddSystemAdmin from '@/logic/hooks/systemAdmin/useAddSystemAdmin.ts';
import CUserInput, {
  UserInput,
} from '@/features/users/userInput/CUserInput.ts';
import CPasswordInput from '@/features/users/passwordInput/CPasswordInput.ts';
import { useNavigate } from 'react-router-dom';
import { UserRole } from '@/domain/UserRole.ts';
import useUpdateSystemAdmin from '@/logic/hooks/systemAdmin/useUpdateSystemAdmin.ts';
import Status from '@/domain/dtos/Status.ts';

const CSystemAdmin = (id: number) => {
  const systemAdmin = useGetSystemAdmin(id);
  const add = useAddSystemAdmin();
  const put = useUpdateSystemAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== 0) {
      systemAdmin.refetch();
    }
  }, [id]);

  const isValid = () => {
    return (
      user.login.isValid() &&
      user.firstName.isValid() &&
      user.lastName.isValid() &&
      user.phone.isValid() &&
      address.city.isValid() &&
      address.street.isValid() &&
      address.house.isValid() &&
      address.zipCode.isValid() &&
      address.apartment.isValid()
    );
  };

  const goBack = () => {
    navigate(-1);
  };

  const create = () => {
    if (
      !isValid() ||
      !password.password.isValid() ||
      !password.repeatPassword.isValid()
    ) {
      return;
    }

    add.mutate(
      {
        id: 0,
        created: new Date(),
        updated: new Date(),
        status: Status.Aktywny,
        login: user.login.value,
        firstName: user.firstName.value,
        lastName: user.lastName.value,
        phone: user.phone.value,
        birthDate: user.birthDate.date.toISOString(),
        password: password.password.value,
        address: {
          id: 0,
          created: new Date(),
          updated: new Date(),
          status: 0,
          city: address.city.value,
          street: address.street.value,
          house: address.house.value,
          zipCode: address.zipCode.value,
          apartment: address.apartment.value,
        },
        role: UserRole.SYSTEM_ADMIN,
      },
      {
        onSuccess: () => {
          navigate(-1);
        },
      },
    );
  };

  const update = () => {
    if (!isValid()) {
      console.log('not valid');
      return;
    }

    put.mutate({
      id: systemAdmin.data?.data.id || 0,
      created: systemAdmin.data?.data.created || new Date(),
      updated: new Date(),
      status: Status.Zmieniony,
      login: user.login.value,
      firstName: user.firstName.value,
      lastName: user.lastName.value,
      birthDate: user.birthDate.date.toISOString(),
      phone: user.phone.value,
      address: {
        id: systemAdmin.data?.data.address.id || 0,
        created: systemAdmin.data?.data.address.created || new Date(),
        updated: new Date(),
        status: Status.Zmieniony,
        city: address.city.value,
        street: address.street.value,
        house: address.house.value,
        zipCode: address.zipCode.value,
        apartment: address.apartment.value,
      },
      role: UserRole.SYSTEM_ADMIN,
    });
  };

  const user = CUserInput(id, (systemAdmin.data?.data as UserInput) || null);
  const password = CPasswordInput();
  const address = CAddress(id, systemAdmin.data?.data.address || null);

  return {
    systemAdmin,
    user,
    password,
    address,
    add,
    update,
    put,
    create,
    goBack,
  };
};

export default CSystemAdmin;
