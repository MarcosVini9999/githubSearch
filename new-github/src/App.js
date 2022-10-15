import React from "react";
import apiGithub from "./services/apiGithub";

function App() {
  const [users, setUsers] = React.useState([]);
  const fetchData = async () => {
    try {
      const result = await apiGithub.get(`/users/MarcosVini9999`);
      setUsers(result.data);
    } catch {}
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <h1>Olá {users.name}</h1>
    </React.Fragment>
  );
}

export default App;
