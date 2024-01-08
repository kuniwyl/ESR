import './HeaderText.scss';

interface HeaderTextProps {
  text: string;
}

const HeaderText = ({ text }: HeaderTextProps) => {
  return (
    <div className="header-text ps-4 py-3 mb-3">
      <h1>{text}</h1>
    </div>
  );
};

export default HeaderText;
