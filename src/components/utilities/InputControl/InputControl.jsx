const InputControl = ({ name, label, error, inputRef, ...rest }) => {
  return (
    <div className="form-group">
      {label !== undefined && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
      <input
        {...rest}
        id={name}
        name={name}
        className="form-control px-10"
        ref={inputRef}
      />
      {error !== undefined && <div className="alert alert-error">{error}</div>}
    </div>
  );
};

export default InputControl;
