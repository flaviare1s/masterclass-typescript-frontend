import { useEffect, useState } from "react";
import api from "./services/api";

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
      {users.map((user) => (
        <div>
          <p key={user.email}>
            {user.name} - {user.email}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App
