import React, { useEffect, useState } from "react";
import getUsers from "../api/service/userService";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoaidng] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoaidng(true);
        const res = await getUsers();
        setUsers(res)
      } catch (error) {
        console.log("Failed", error);
        setError(true)
      } finally {
        setLoaidng(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <h1>loading</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <>
    <div>
        {users.map((data) => (
    <>
            <h1>{data.id}</h1>
            <p>{data.name}</p>
    </>
        ))}
    </div>
    </>
  )
};

export default Users;
