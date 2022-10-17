import React from "react";
import Search from "./components/Search/Search";
import CardUser from "./components/CardUser/CardUser";
import apiGithub from "./services/apiGithub";

const App = () => {
  const [users, setUsers] = React.useState([]);
  const fetchData = async (user) => {
    try {
      const result = await apiGithub.get(`/users/${user}`);
      setUsers(result?.data);
    } catch {
      alert("Ocorreu um erro");
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Search info={fetchData} />
      {users && (
        <CardUser
          avatar={users?.avatar_url}
          nome={users?.name}
          user={users?.login}
        />
      )}
    </React.Fragment>
  );
};

export default App;
