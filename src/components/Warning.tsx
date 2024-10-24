// HOC - Higher Order Component - pek kullanmadık

type Props = {
  children: string;
};
const Warning = ({ children }: Props) => {
  return (
    <div className="warn-container">
      <h2>{children}</h2>
    </div>
  );
};

export default Warning;
