import InputUserManager from '@/components/forms/InputUser/InputUserManager.ts';

const InputUser = ({ datalist, dataListName, setData }: InputUserManager) => {
  const datalistOptions = datalist.map((item, index) => {
    return <option key={index} value={item} />;
  });

  return (
    <>
      <input
        className="form-control my-3"
        list="datalistOptions"
        id="exampleDataList"
        onChange={e => setData(e.target.value)}
        placeholder={`Wyszukaj ${dataListName}`}
      />
      <datalist id="datalistOptions">{datalistOptions}</datalist>
    </>
  );
};

export default InputUser;
