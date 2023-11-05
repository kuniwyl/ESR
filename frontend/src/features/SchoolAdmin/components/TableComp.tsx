import Container from 'react-bootstrap/Container';
import { ButtonF } from '@/components/forms';
import AddUser from '@/features/SchoolAdmin/components/AddUser.tsx';
import { Table } from 'react-bootstrap';
import { useState } from 'react';
import { RegisterData } from '@/model/AuthInterfaces.ts';

interface TableCompProps {
  type: string;
  thead: JSX.Element;
  tbody: JSX.Element[];
  user: RegisterData;
  setUser: (user: RegisterData) => void;
  handleAdd: () => void;
  isLoading: boolean;
  additionalForm?: JSX.Element;
}

const TableComp = ({
  type,
  thead,
  tbody,
  user,
  setUser,
  handleAdd,
  isLoading,
  additionalForm,
}: TableCompProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Container className="mt-3">
      <ButtonF
        variant={'dark'}
        text={`Dodaj ${type}`}
        isLoading={false}
        onClick={() => setShow(!show)}
        size={'sm'}
      />
      <AddUser
        type={type}
        user={user}
        setUser={setUser}
        show={show}
        setShow={setShow}
        handleAdd={handleAdd}
        isLoading={isLoading}
        additionalForm={additionalForm}
      />
      <Table>
        <thead>{thead}</thead>
        <tbody>{tbody}</tbody>
      </Table>
    </Container>
  );
};

export default TableComp;
