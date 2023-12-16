import InputUserManager from '@/components/forms/inputUser/InputUserManager.ts';
import './input.scss';

const InputUser = ({
  datalist,
  dataListName,
  setData,
  initialValue,
}: InputUserManager) => {
  const datalistOptions = datalist.map((item, index) => {
    return <option key={index} value={item} />;
  });

  return (
    <>
      <input
        className="form-control inputUser mb-3"
        list="datalistOptions"
        id="exampleDataList"
        defaultValue={initialValue}
        onChange={setData}
        placeholder={`Wyszukaj ${dataListName}`}
      />
      <datalist id="datalistOptions">{datalistOptions}</datalist>
    </>
  );
};

export default InputUser;
