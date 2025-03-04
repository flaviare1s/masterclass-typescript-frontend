import { useEffect, useState } from "react";
import api from "./services/api";
import User from "./components/User";

interface IUser {
  name: string;
  email: string;
}


function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get<IUser[]>('/users').then(response => {
      setUsers(response.data);
    })
  }, [])

  return (
    <div>
      {users.map(user => <User user={user} key={user.email} />)}
    </div>
  );
}

export default App
