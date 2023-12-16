import { Table } from 'react-bootstrap';
import { JSX } from 'react';

interface TableCompProps {
  thead: JSX.Element;
  tbody: JSX.Element | JSX.Element[];
}

const TableComp = (props: TableCompProps) => {
  const { thead, tbody } = props;

  return (
    <Table className="mt-2">
      <thead>{thead}</thead>
      <tbody>{tbody}</tbody>
    </Table>
  );
};

export default TableComp;
