import Container from 'react-bootstrap/Container';
import { ButtonF } from '@/components/forms';
import { Table } from 'react-bootstrap';
import { useState } from 'react';

interface TableCompProps {
  type: string;
  name: string;
  thead: JSX.Element;
  tbody: JSX.Element[];
  // user: RegisterData;
  // setUser: (user: RegisterData) => void;
  handleAdd: () => void;
  isLoading: boolean;
  error?: string | null;
  additionalForm?: JSX.Element;
}

const TableComp = ({
  type,
  name,
  thead,
  tbody,
} // user,
// setUser,
// handleAdd,
// isLoading,
// error,
// additionalForm,
: TableCompProps) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Container className="mt-3">
      <ButtonF
        variant={'dark'}
        text={`${type} ${name}`}
        isLoading={false}
        onClick={() => setShow(!show)}
        size={'sm'}
      />
      {/*<AddUser*/}
      {/*  type={type}*/}
      {/*  name={name}*/}
      {/*  user={user}*/}
      {/*  setUser={setUser}*/}
      {/*  show={show}*/}
      {/*  setShow={setShow}*/}
      {/*  handleAdd={handleAdd}*/}
      {/*  isLoading={isLoading}*/}
      {/*  error={error}*/}
      {/*  additionalForm={additionalForm}*/}
      {/*/>*/}
      <Table>
        <thead>{thead}</thead>
        <tbody>{tbody}</tbody>
      </Table>
    </Container>
  );
};

export default TableComp;
