import { useState, useEffect } from "react";
import "./styles.css";
import service from "./service";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [apiResult, setApiResult] = useState([]);

  const fetchUsersList = async () => {
    const response = await service.getUsers();
    if (response.data) {
      setApiResult(response.data);
      setUsers(response.data);
    }
  };

  useEffect(() => {
    fetchUsersList();
  }, []);

  const handleFilter = (input) => {
    if (input) {
      const filteredArr = apiResult.filter((item) => item.name.includes(input));

      setUsers([...filteredArr]);
    } else {
      setUsers([...apiResult]);
    }
  };

  return (
    <>
      <h1>
        Test - 3 - Consume the below API And List Users & Add a filter option
      </h1>
      <code>
        Consume the below users list api and list the users in a table and add
        filter option to filter the users from the table. API Functionality
        should be in a saperate fil and should use <code>async await</code>{" "}
        method, feel free to install and use axios.
      </code>
      <p>
        API: <code> https://jsonplaceholder.typicode.com/users </code>
      </p>

      <div
        id="div-for-click-detect"
        style={{
          border: "2px solid blue",
          padding: "5px",
          display: "flex",

          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <label htmlFor="table-filter" id="label-filter">
          {" "}
          Filter User by Name
        </label>
        <input
          type="text"
          id="table-filter"
          style={{ marginTop: "5px", marginBottom: "5px" }}
          onChange={(e) => handleFilter(e.target.value)}
        />
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>City</td>
            </tr>
          </thead>
          <tbody>
            {users && users.length === 0 && (
              <tr>
                <td colSpan={4}>No Users Found</td>
              </tr>
            )}
            {users &&
              users.length > 0 &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address?.city}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListUsers;
