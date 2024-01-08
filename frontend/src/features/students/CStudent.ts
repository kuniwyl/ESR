import useGetStudent from '@/logic/hooks/students/useGetStudent.ts';
import useTextInput from '@/components/forms/TextInput/useTextInput.ts';
import { authContext } from '@/context/auth';
import { useContext, useState } from 'react';
import useCreateStudent from '@/logic/hooks/students/useCreateStudent.ts';
import useEditStudent from '@/logic/hooks/students/useEditStudent.ts';
import { UserRole } from '@/domain/UserRole.ts';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/configuration/config.ts';
import Status from '@/domain/dtos/Status.ts';
import CUserInput, {
  UserInput,
} from '@/features/users/userInput/CUserInput.ts';
import CAddress from '@/features/address/CAddress.ts';
import CPasswordInput from '@/features/users/passwordInput/CPasswordInput.ts';

const CStudent = (classId: number, studentId: number) => {
  const student = useGetStudent(studentId);
  const navigate = useNavigate();
  const createStudent = useCreateStudent();
  const updateStudent = useEditStudent();

  const { authState } = useContext(authContext);

  const [isDifferentAddress, setIsDifferentAddress] = useState(true);
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDifferentAddress(e.target.checked);
  };

  const studentPasswordReset = () => {
    navigate(ROUTES.RESET_PASSWORD(studentId.toString()));
  };

  const parentPasswordReset = () => {
    navigate(
      ROUTES.RESET_PASSWORD(student.data?.data.parent?.id.toString() || ''),
    );
  };

  const pesel = useTextInput({
    initialValue: student.data?.data.pesel || '',
    required: true,
    maxLength: 11,
    minLength: 11,
  });

  const studentUser = CUserInput(
    studentId,
    (student.data?.data || null) as UserInput | null,
  );
  const studentAddress = CAddress(
    studentId,
    student.data?.data.address || null,
  );
  const studentPassword = CPasswordInput();

  const parentUser = CUserInput(
    studentId,
    (student.data?.data.parent || null) as UserInput | null,
  );
  const parentAddress = CAddress(
    studentId,
    student.data?.data.parent?.address || null,
  );
  const parentPassword = CPasswordInput();

  const isValid = () => {
    return (
      pesel.isValid() &&
      studentUser.isValid() &&
      studentAddress.isValid() &&
      parentUser.isValid() &&
      parentAddress.isValid()
    );
  };

  const create = () => {
    if (!isValid() && !studentPassword.isValid() && !parentPassword.isValid()) {
      return;
    }

    if (isDifferentAddress) {
      parentAddress.city.value = studentAddress.city.value;
      parentAddress.street.value = studentAddress.street.value;
      parentAddress.house.value = studentAddress.house.value;
      parentAddress.apartment.value = studentAddress.apartment.value;
      parentAddress.zipCode.value = studentAddress.zipCode.value;
    }

    console.log(parentAddress);
    console.log(studentAddress);

    createStudent.mutate(
      {
        id: 0,
        created: new Date(),
        updated: new Date(),
        status: Status.Active,

        pesel: pesel.value,
        login: studentUser.login.value,
        firstName: studentUser.firstName.value,
        lastName: studentUser.lastName.value,
        birthDate: studentUser.birthDate.date.toISOString(),
        phone: studentUser.phone.value,
        password: studentPassword.password.value,
        address: {
          id: 0,
          created: new Date(),
          updated: new Date(),
          status: Status.Active,
          city: studentAddress.city.value,
          street: studentAddress.street.value,
          house: studentAddress.house.value,
          apartment: studentAddress.apartment.value,
          zipCode: studentAddress.zipCode.value,
        },
        parent: {
          id: 0,
          created: new Date(),
          updated: new Date(),
          status: Status.Active,
          login: parentUser.login.value,
          firstName: parentUser.firstName.value,
          lastName: parentUser.lastName.value,
          birthDate: parentUser.birthDate.date.toISOString(),
          phone: parentUser.phone.value,
          password: parentPassword.password.value,
          address: {
            id: 0,
            created: new Date(),
            updated: new Date(),
            status: Status.Active,
            city: parentAddress.city.value,
            street: parentAddress.street.value,
            house: parentAddress.house.value,
            apartment: parentAddress.apartment.value,
            zipCode: parentAddress.zipCode.value,
          },
          role: UserRole.PARENT,
          schoolId: authState.schoolId ?? 0,
          studentId: 0,
        },
        role: UserRole.STUDENT,
        schoolId: authState.schoolId ?? 0,
        classId: classId,
      },
      {
        onSuccess: () => {
          navigate(ROUTES.CLASS_STUDENTS(classId.toString()));
        },
      },
    );
  };

  const edit = () => {
    updateStudent.mutate(
      {
        id: studentId,
        created: student.data?.data.created || new Date(),
        updated: new Date(),
        status: Status.Active,

        pesel: pesel.value,
        login: studentUser.login.value,
        firstName: studentUser.firstName.value,
        lastName: studentUser.lastName.value,
        birthDate: studentUser.birthDate.date.toISOString(),
        phone: studentUser.phone.value,
        address: {
          id: student.data?.data.address?.id || 0,
          created: student.data?.data.address?.created || new Date(),
          updated: new Date(),
          status: Status.Active,
          city: studentAddress.city.value,
          street: studentAddress.street.value,
          house: studentAddress.house.value,
          apartment: studentAddress.apartment.value,
          zipCode: studentAddress.zipCode.value,
        },
        parent: {
          id: student.data?.data.parent?.id || 0,
          created: student.data?.data.parent?.created || new Date(),
          updated: new Date(),
          status: Status.Active,
          login: parentUser.login.value,
          firstName: parentUser.firstName.value,
          lastName: parentUser.lastName.value,
          birthDate: parentUser.birthDate.date.toISOString(),
          phone: parentUser.phone.value,
          address: {
            id: student.data?.data.parent?.address?.id || 0,
            created: student.data?.data.parent?.address?.created || new Date(),
            updated: new Date(),
            status: Status.Active,
            city: parentAddress.city.value,
            street: parentAddress.street.value,
            house: parentAddress.house.value,
            apartment: parentAddress.apartment.value,
            zipCode: parentAddress.zipCode.value,
          },
          role: UserRole.PARENT,
          schoolId: authState.schoolId ?? 0,
          studentId: studentId,
        },
        role: UserRole.STUDENT,
        schoolId: authState.schoolId ?? 0,
        classId: classId,
      },
      {
        onSuccess: () => {
          navigate(ROUTES.CLASS_STUDENTS(classId.toString()));
        },
      },
    );
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    pesel,
    studentUser,
    studentAddress,
    studentPassword,
    parentUser,
    parentAddress,
    parentPassword,
    create,
    edit,
    updateStudent,

    isDifferentAddress,
    handleCheckboxChange,
    goBack,

    studentPasswordReset,
    parentPasswordReset,
  };
};

export type TCStudent = ReturnType<typeof CStudent>;
export default CStudent;
