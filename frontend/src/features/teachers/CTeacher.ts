import { useNavigate } from 'react-router-dom';
import useUpdateTeacher from '@/logic/hooks/teachers/useUpdateTeacher.ts';
import useCreateTeacher from '@/logic/hooks/teachers/useCreateTeacher.ts';
import useGetTeacher from '@/logic/hooks/teachers/useGetTeacher.ts';
import CUserInput, {
  UserInput,
} from '@/features/users/userInput/CUserInput.ts';
import CAddress from '@/features/address/CAddress.ts';
import AddressDto from '@/domain/dtos/AddressDto.ts';
import CPasswordInput from '@/features/users/passwordInput/CPasswordInput.ts';
import { UserRole } from '@/domain/UserRole.ts';
import { useContext } from 'react';
import { authContext } from '@/context/auth';
import { ROUTES } from '@/configuration/config.ts';
import Status from '@/domain/dtos/Status.ts';

const CTeacher = (id: number) => {
  const auth = useContext(authContext);
  const teacher = useGetTeacher(id);
  const updateTeacher = useUpdateTeacher();
  const createTeacher = useCreateTeacher();
  const navigate = useNavigate();

  const user = CUserInput(id, teacher.data?.data as UserInput);
  const address = CAddress(id, teacher.data?.data.address as AddressDto);
  const password = CPasswordInput();

  const goBack = () => {
    navigate(-1);
  };

  const isValid = () => {
    return user.isValid() && address.isValid();
  };

  const resetPassword = () => {
    navigate(ROUTES.RESET_PASSWORD(id.toString()));
  };

  const update = () => {
    if (!isValid()) {
      console.log('not valid');
      return;
    }

    updateTeacher.mutate({
      id: id,
      created: teacher.data?.data.created || new Date(),
      updated: new Date(),
      status: Status.Zmieniony,
      login: user.login.value,
      firstName: user.firstName.value,
      lastName: user.lastName.value,
      birthDate: user.birthDate.date.toISOString(),
      phone: user.phone.value,
      address: {
        id: teacher.data?.data.address.id || 0,
        created: teacher.data?.data.address.created || new Date(),
        updated: new Date(),
        status: Status.Zmieniony,
        street: address.street.value,
        house: address.house.value,
        apartment: address.apartment.value,
        city: address.city.value,
        zipCode: address.zipCode.value,
      },
      role: UserRole.TEACHER,
      schoolId: auth.authState.schoolId || 0,
    });
  };

  const create = () => {
    if (!isValid() && !password.isValid()) {
      return;
    }

    createTeacher.mutate(
      {
        id: 0,
        created: new Date(),
        updated: new Date(),
        status: Status.Aktywny,
        login: user.login.value,
        firstName: user.firstName.value,
        lastName: user.lastName.value,
        birthDate: user.birthDate.date.toISOString(),
        phone: user.phone.value.toString(),
        address: {
          id: 0,
          created: new Date(),
          updated: new Date(),
          status: Status.Aktywny,
          street: address.street.value,
          house: address.house.value,
          apartment: address.apartment.value,
          city: address.city.value,
          zipCode: address.zipCode.value,
        },
        role: UserRole.TEACHER,
        schoolId: auth.authState.schoolId || 0,
        password: password.password.value,
      },
      {
        onSuccess: () => {
          goBack();
        },
      },
    );
  };

  return {
    teacher,
    user,
    address,
    password,
    update,
    updateTeacher,
    create,
    goBack,
    resetPassword,
  };
};

export default CTeacher;
