import useGetSchool from '@/logic/hooks/systemAdmin/useGetSchool.ts';
import useUpdateSchool from '@/logic/hooks/systemAdmin/useUpdateSchool.ts';
import useTextInput from '@/components/forms/TextInput/useTextInput.ts';
import SchoolDto from '@/domain/dtos/SchoolDto.ts';
import useCreateSchool from '@/logic/hooks/systemAdmin/useCreateSchool.ts';
import regex from '@/configuration/regex.ts';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ROUTES } from '@/configuration/config.ts';
import CAddress from '@/features/address/CAddress.ts';
import useDelSchoolAdmin from '@/logic/hooks/systemAdmin/useDelSchoolAdmin.ts';

const CSchool = (id: number) => {
  const school = useGetSchool(id);
  const create = useCreateSchool();
  const update = useUpdateSchool();
  const delSchoolAdmin = useDelSchoolAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== 0) {
      school.refetch();
    }
  }, [id]);

  const name = useTextInput({
    initialValue: id !== 0 ? school.data?.data.name || '' : '',
    required: true,
    maxLength: 40,
    minLength: 5,
    pattern: regex.POLISH_LETTERS_SPACES_NUMBERS,
  });

  const email = useTextInput({
    initialValue: id !== 0 ? school.data?.data.email || '' : '',
    required: true,
    maxLength: 40,
    minLength: 5,
    pattern: regex.EMAIL,
  });

  const phone = useTextInput({
    initialValue: id !== 0 ? school.data?.data.phone || '' : '',
    required: true,
    maxLength: 9,
    minLength: 6,
    pattern: regex.NUMBERS,
  });

  const website = useTextInput({
    initialValue: id !== 0 ? school.data?.data.website || '' : '',
    required: false,
    maxLength: 40,
    minLength: 5,
    pattern: regex.WEBSITE,
  });

  const address = CAddress(id, school.data?.data.address || null);

  const createSchool = () => {
    if (
      !name.isValid() ||
      !email.isValid() ||
      !phone.isValid() ||
      !website.isValid() ||
      !address.street.isValid() ||
      !address.house.isValid() ||
      !address.apartment.isValid() ||
      !address.city.isValid() ||
      !address.zipCode.isValid()
    ) {
      console.log('invalid');
      return;
    }

    create.mutate({
      name: name.value,
      email: email.value,
      phone: phone.value,
      website: website.value,
      address: {
        street: address.street.value,
        house: address.house.value,
        apartment: address.apartment.value,
        city: address.city.value,
        zipCode: address.zipCode.value,
      },
    } as SchoolDto);
  };

  const updateSchool = () => {
    if (
      !name.isValid() ||
      !email.isValid() ||
      !phone.isValid() ||
      !website.isValid() ||
      !address.street.isValid() ||
      !address.house.isValid() ||
      !address.apartment.isValid() ||
      !address.city.isValid() ||
      !address.zipCode.isValid()
    ) {
      console.log('invalid');
      return;
    }

    update.mutate({
      id: id,
      name: name.value,
      email: email.value,
      phone: phone.value,
      website: website.value,
      address: {
        id: school.data?.data.address.id || 0,
        street: address.street.value,
        house: address.house.value,
        apartment: address.apartment.value,
        city: address.city.value,
        zipCode: address.zipCode.value,
      },
    } as SchoolDto);
  };

  const delAdmin = (id: number) => {
    delSchoolAdmin.mutate(id);
  };

  const goBack = () => {
    navigate(-1);
  };

  const addSchoolAdmin = () => {
    navigate(ROUTES.CREATE_SCHOOL_ADMIN(id.toString()));
  };

  const editSchoolAdmin = (adminId: number) => {
    navigate(ROUTES.EDIT_SCHOOL_ADMIN_EDIT(id.toString(), adminId.toString()));
  };

  return {
    school,

    createSchool,
    create,

    updateSchool,
    update,

    delAdmin,

    goBack,
    addSchoolAdmin,
    editSchoolAdmin,

    name,
    email,
    phone,
    website,
    address,
  };
};
export default CSchool;
