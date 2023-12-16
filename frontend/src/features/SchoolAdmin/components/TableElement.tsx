import Container from 'react-bootstrap/Container';
import { ButtonF } from '@/components/forms';
import { Table } from 'react-bootstrap';
import { useState } from 'react';
import SubjectDto from '@/domain/dtos/SubjectDto.ts';

interface TableElementProps {
  type: string;
  name: string;
  thead: JSX.Element;
  tbody: JSX.Element[];
  element: SubjectDto;
  setElement: (element: SubjectDto) => void;
  dataList: Array<string>;
  setSelected: (selected: string) => void;
  handleAdd: () => void;
  isLoading: boolean;
  error?: string | null;
  additionalForm?: JSX.Element;
}

const TableElement = ({
  type,
  name,
  thead,
  tbody,
} // element,
// setElement,
// dataList,
// setSelected,
// handleAdd,
// isLoading,
// error,
// additionalForm,
: TableElementProps) => {
  const [show, setShow] = useState(false);

  return (
    <Container className="mt-3">
      <ButtonF
        variant={'dark'}
        text={`${type} ${name}`}
        isLoading={false}
        onClick={() => setShow(!show)}
        size={'sm'}
      />
      {/*<AddElement*/}
      {/*  type={type}*/}
      {/*  name={name}*/}
      {/*  element={element}*/}
      {/*  setElement={setElement}*/}
      {/*  dataSetList={dataList}*/}
      {/*  setSelected={setSelected}*/}
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

export default TableElement;
