interface Props {
  message: string;
}

function ErrorMessage({ message }: Props) {
  return <div style={{ color: "red" }}>{message}</div>;
}

export default ErrorMessage;