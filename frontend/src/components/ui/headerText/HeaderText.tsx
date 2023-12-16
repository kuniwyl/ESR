import './HeaderText.scss';

interface HeaderTextProps {
  text: string;
}

const HeaderText = ({ text }: HeaderTextProps) => {
  return (
    <div className="header-text">
      <h1>{text}</h1>
    </div>
  );
};

export default HeaderText;
