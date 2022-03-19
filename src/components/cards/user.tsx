const User = ({ name } : { name: string }) => (
    <div aria-label={name}>{name}</div>
  );

export default User;
