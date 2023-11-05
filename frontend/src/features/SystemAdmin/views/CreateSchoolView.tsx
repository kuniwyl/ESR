import { useState } from 'react';
import { ModifySchoolData } from '@/model/SystemAdminInterfaces.ts';
import { usePostSchoolMutation } from '@/store/api/systemAdminSlice.ts';
import { useNavigate } from 'react-router-dom';
import { EDIT_SCHOOL } from '@/config.ts';
import EditSchoolComp from '@/features/SystemAdmin/components/EditSchoolComp.tsx';

const CreateSchoolView = () => {
  const [school, setSchool] = useState<ModifySchoolData>({
    name: 'nowa szkoła',
    address: 'przykładowy adres',
    city: 'przykładowe miasto',
    state: 'przykładowe województwo',
    zipCode: '11-111',
    phoneNumber: '123345567',
    email: 'test@test.pl',
    website: 'test.pl',
    logoUrl: '',
  } as ModifySchoolData);
  const [postSchool, { isLoading, isSuccess }] = usePostSchoolMutation();
  const navigation = useNavigate();

  const handleCreate = async () => {
    const res = await postSchool(school).unwrap();
    if (res) {
      await new Promise(r => setTimeout(r, 1000));
      navigation(EDIT_SCHOOL + res.id);
    }
  };

  return (
    <EditSchoolComp
      school={school}
      setSchool={setSchool}
      isSaving={isLoading}
      isSavingSuccess={isSuccess}
      handleSave={handleCreate}
    />
  );
};

export default CreateSchoolView;
