import useGetSchoolAdmin from '@/logic/hooks/systemAdmin/useGetSchoolAdmins.ts';
import { useEffect } from 'react';
import CAddress from '@/features/address/CAddress.ts';
import useAddSchoolAdmin from '@/logic/hooks/systemAdmin/useAddSchoolAdmin.ts';
import useEditSchoolAdmin from '@/logic/hooks/systemAdmin/useEditSchoolAdmin.ts';
import { UserRole } from '@/domain/UserRole.ts';
import { useNavigate } from 'react-router-dom';
import Status from '@/domain/dtos/Status.ts';
import CUserInput, {
  UserInput,
} from '@/features/users/userInput/CUserInput.ts';
import CPasswordInput from '@/features/users/passwordInput/CPasswordInput.ts';

const CSchoolAdmin = (id: number, adminId: number) => {
  const schoolAdmin = useGetSchoolAdmin(adminId);
  const addAdmin = useAddSchoolAdmin();
  const updateAdmin = useEditSchoolAdmin();

  const navigate = useNavigate();

  useEffect(() => {
    if (adminId !== 0) {
      schoolAdmin.refetch();
    }
  }, [adminId]);

  const user = CUserInput(
    adminId,
    (schoolAdmin.data?.data as UserInput) || null,
  );

  const password = CPasswordInput();

  const address = CAddress(adminId, schoolAdmin.data?.data.address || null);

  const resetPassword = () => {
    navigate('/reset-password/' + adminId);
  };

  const goBack = () => {
    navigate(-1);
  };

  const isValid = () => {
    if (
      !user.isValid() ||
      !address.street.isValid() ||
      !address.house.isValid() ||
      !address.apartment.isValid() ||
      !address.city.isValid() ||
      !address.zipCode.isValid()
    ) {
      console.log('invalid');
      return false;
    } else {
      return true;
    }
  };

  const createAdmin = () => {
    if (!isValid()) {
      return;
    }

    addAdmin.mutate({
      id: 0,
      created: new Date(),
      updated: new Date(),
      status: Status.Active,
      login: user.login.value,
      firstName: user.firstName.value,
      lastName: user.lastName.value,
      phone: user.phone.value,
      birthDate: user.birthDate.date.toISOString(),
      password: password.password.value,
      role: UserRole.SCHOOL_ADMIN,
      address: {
        id: 0,
        created: new Date(),
        updated: new Date(),
        status: Status.Active,
        street: address.street.value,
        house: address.house.value,
        apartment: address.apartment.value,
        city: address.city.value,
        zipCode: address.zipCode.value,
      },
      schoolId: id,
    });
  };

  const updateAdmins = () => {
    if (!isValid()) {
      return;
    }

    updateAdmin.mutate({
      id: adminId,
      created: schoolAdmin.data?.data.created || new Date(),
      updated: new Date(),
      status: Status.Changed,
      login: user.login.value,
      firstName: user.firstName.value,
      lastName: user.lastName.value,
      phone: user.phone.value,
      birthDate: user.birthDate.date.toISOString(),
      role: UserRole.SCHOOL_ADMIN,
      address: {
        id: schoolAdmin.data?.data.address.id || 0,
        created: schoolAdmin.data?.data.address.created || new Date(),
        updated: new Date(),
        status: Status.Changed,
        street: address.street.value,
        house: address.house.value,
        apartment: address.apartment.value,
        city: address.city.value,
        zipCode: address.zipCode.value,
      },
      schoolId: id,
    });
  };

  return {
    login: user.login,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    birthDate: user.birthDate,
    password: password.password,
    repeatPassword: password.repeatPassword,
    address,
    goBack,

    createAdmin,
    updateAdmins,
    updateAdmin,
    resetPassword,
  };
};

export default CSchoolAdmin;
