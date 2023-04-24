export default function Form({
  children,
  onSubmit = () => {},
  className,
  ...props
}) {
  return (
    <form
      {...props}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
      className={className}
    >
      {children}
    </form>
  );
}
