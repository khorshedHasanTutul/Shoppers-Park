const DropDown = ({ dataset, id, onSelect }) => {

  return (
    <datalist id={id}>
      {dataset.map((data) => (

        <option value={data[0]} onSelect={onSelect.bind(null, data)} />
      ))}
    </datalist>
  );
};
export default DropDown;
