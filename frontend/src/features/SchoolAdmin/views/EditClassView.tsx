import { useParams } from 'react-router-dom';
import { useGetClassQuery } from '@/store/api/classSlice.ts';
import Container from 'react-bootstrap/Container';
import { HeaderText, SpinnerComponent } from '@/components/ui';
import EditClassValues from '@/features/SchoolAdmin/components/EditClassValues.tsx';

const EditClassView = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetClassQuery(Number.parseInt(id ?? ''));

  if (isLoading) return <SpinnerComponent />;
  if (data)
    return (
      <>
        <Container>
          <EditClassValues data={data} />
        </Container>
      </>
    );
};

export default EditClassView;
