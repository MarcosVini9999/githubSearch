import React from "react";
import Search from "./components/Search/Search";
import CardUser from "./components/CardUser/CardUser";
import apiGithub from "./services/apiGithub";
import "./style.css";

const App = () => {
  const [usersData, setUsersData] = React.useState([]);
  const [user, setUser] = React.useState("MarcosVini9999");
  const onUserSearchChange = (value) => {
    setUser(value);
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiGithub.get(`/users/${user}`);
        setUsersData(result?.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [user]);

  return (
    <div className="container">
      <Search onChange={onUserSearchChange} />
      {usersData && <CardUser user={usersData} />}
    </div>
  );
};

export default App;
