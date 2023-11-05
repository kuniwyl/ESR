import { useParams } from 'react-router-dom';
import {
  useGetSchoolQuery,
  usePutSchoolMutation,
} from '@/store/api/systemAdminSlice.ts';
import { ButtonF } from '@/components/forms';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import { HeaderText, SpinnerComponent } from '@/components/ui';
import { ModifySchoolData } from '@/model/SystemAdminInterfaces.ts';
import EditSchoolComp from '@/features/SystemAdmin/components/EditSchoolComp.tsx';
import EditSchoolAdmins from '@/features/SystemAdmin/components/EditSchoolAdmins.tsx';

const SchoolEditView = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSchoolQuery(Number.parseInt(id ?? ''));

  const [element, setElement] = useState<boolean>(true);

  const [putSchool, { isLoading: isSaving, isSuccess: isSavingSuccess }] =
    usePutSchoolMutation();
  const [school, setSchool] = useState<ModifySchoolData>({
    id: id ?? '',
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

  useEffect(() => {
    if (data) {
      setSchool(data);
    }
    console.log(data);
  }, [isLoading]);

  const handleSave = async () => {
    await putSchool(school);
  };

  if (data && isLoading) {
    return (
      <Container className="text-center mt-5">
        <SpinnerComponent />
      </Container>
    );
  }

  return (
    <>
      <HeaderText text={`Edytuj szkołę: ${school.name}, id: ${school.id}`} />
      <Container className="mt-3 d-flex justify-content-around">
        <ButtonF
          variant={'dark'}
          text={'Pokaż dane szkoły'}
          isLoading={false}
          onClick={() => setElement(true)}
          size={'sm'}
        />
        <ButtonF
          variant={'dark'}
          text={'Pokaż adminów szkoły'}
          isLoading={false}
          onClick={() => setElement(false)}
          size={'sm'}
        />
      </Container>
      <hr />
      <Container>
        {element ? (
          <EditSchoolComp
            school={school}
            setSchool={setSchool}
            isSaving={isSaving}
            isSavingSuccess={isSavingSuccess}
            handleSave={handleSave}
          />
        ) : (
          data && (
            <EditSchoolAdmins
              schoolId={Number.parseInt(id ?? '')}
              schoolAdmins={data.schoolAdmins}
            />
          )
        )}
      </Container>
    </>
  );
};

export default SchoolEditView;
