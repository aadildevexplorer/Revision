import React, { useEffect, useState } from "react";
import { getUsers } from "../service/userService";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await getUsers();
        setUsers(res.data.users);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return (
      <>
        <div>
          <h1>{error}</h1>
        </div>
      </>
    );
  }

  if (loading) {
    return (
      <>
        <div>
          <h1>Loading...</h1>
        </div>
      </>
    );
  }

  return (
    <>
      {users.map((data) => {
        return (
          <div key={data.id}>
            <p>{data.firstName}</p>
          </div>
        );
      })}
    </>
  );
};

export default Users;

// Why we are call api in useEffect()
// 👉 "Sir, agar hum API call directly component ke andar karte hain to har
// render pe wo call hoti rehti hai. Kyunki state update hone par component dubara
// render hota hai, isse infinite loop ban jata hai. Isliye hum API calls ko useEffect
// me rakhte hain taaki wo sirf ek baar ya dependency change hone par hi chale."
