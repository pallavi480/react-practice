import React, { useEffect, useState } from "react";

const Effect3 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await res.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Fetch User Data</h1>

      {users.length === 0 ? (
        <p>Loading...</p>
      ) : (
        users.map((user) => (
          <p key={user.id}>
            {user.name} - {user.email}
          </p>
        ))
      )}
    </div>
  );
};

export default Effect3;
