interface Props {
  message: string;
}

export const Loader = ({ message }: Props) => {
  return (
    <div className="loader-container">
      <h1>{message}</h1>
    </div>
  );
};
