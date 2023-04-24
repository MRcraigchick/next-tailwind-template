export default function Checkbox({
  name = "",
  label = "",
  labelProps = {},
  error = false,
  validator = () => {},
  errorSetter = () => {},
  valueSetter = () => {},
  getCurrentValue = () => {},
  onChange = () => {},
  onBlur = () => {},
  classNames = {
    container: "",
    inputLabelWrapper: "",
    input: "",
    label: "",
    error: "",
  },
  ...props
}) {
  return (
    <div className={classNames.container}>
      <div className={classNames.inputLabelWrapper}>
        <input
          {...props}
          className={classNames.input}
          value={getCurrentValue(name)}
          type="checkbox"
          onChange={(e) => {
            valueSetter(name, e.target.checked);
            errorSetter(name, validator(e.target.checked));
            onChange(e);
          }}
          onBlur={(e) => {
            errorSetter(name, validator(e.target.checked));
            onBlur(e);
          }}
        />
        <label {...labelProps} className={classNames.label}>
          {label}
        </label>
      </div>
      {error ? <p className={classNames.error}>{error}</p> : <></>}
    </div>
  );
}
