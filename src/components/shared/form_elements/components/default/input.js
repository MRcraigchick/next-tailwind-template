import { useEffect, useRef } from "react";

export default function Input({
  name = "",
  error = false,
  validator = () => {},
  errorSetter = () => {},
  valueSetter = () => {},
  getCurrentValue = () => {},
  onChange = () => {},
  onBlur = () => {},
  multiline = false,
  multilineInputHeight = 40,
  classNames = {
    container: "",
    input: "",
    error: "",
  },
  ...props
}) {
  const inputRef = useRef();
  const Component = multiline ? "textarea" : "input";

  useEffect(() => {
    if (multiline) {
      const input = inputRef.current;
      const inputHandler = () => {
        input.style.height = 0;
        input.style.height = input.scrollHeight + "px";
      };
      if (input.value == "") {
        input.setAttribute(
          "style",
          "height:" + multilineInputHeight + "px;overflow-y:hidden"
        );
      } else {
        input.setAttribute(
          "style",
          "height:" + input.scrollHeight + "px;overflow-y:hidden;"
        );
      }
      input && input.addEventListener("input", inputHandler, false);
      return () => input && input.removeEventListener("input", inputHandler);
    }
  }, [multiline, multilineInputHeight]);

  return (
    <div className={classNames.container}>
      <Component
        ref={inputRef}
        {...props}
        className={classNames.input}
        value={getCurrentValue(name)}
        onChange={(e) => {
          valueSetter(name, e.target.value);
          if (error) errorSetter(name, validator(e.target.value));
          onChange(e);
        }}
        onBlur={(e) => {
          errorSetter(name, validator(e.target.value));
          onBlur(e);
        }}
      />
      {error ? <p className={classNames.error}>{error}</p> : <></>}
    </div>
  );
}
