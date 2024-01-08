interface TdInputProps {
  value: string;
  error: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const TdInput = (props: TdInputProps) => {
  return (
    <td>
      <input
        onBlur={props.onBlur}
        onChange={props.onChange}
        value={props.value}
      />
      <span>{props.error}</span>
    </td>
  );
};

export default TdInput;
