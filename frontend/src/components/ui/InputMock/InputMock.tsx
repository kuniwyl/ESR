interface InputMockProps {
  className?: string;
}

const InputMock = (props: InputMockProps) => {
  return <div className={`input mb-3 ${props.className}`}></div>;
};

export default InputMock;
