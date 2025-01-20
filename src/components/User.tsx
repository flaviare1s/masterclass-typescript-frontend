
interface IUser {
  name: string;
  email: string;
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <strong>Nome: {user.name} - </strong>
      <span>E-mail: {user.email}</span>
      <br />
    </div>
  )
}

export default User
