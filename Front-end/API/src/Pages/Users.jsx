import React, { useEffect, useState } from 'react';
import { getUser } from '../api/services/userService';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await getUser();
        console.log(res);
        setUsers(res.data.users);
      } catch (error) {
        setError(error.message);
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
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <h1>Users</h1>
      </div>
      {users.map((data) => (
        <div
          key={data.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <div>
            <p key={data.id} style={{ color: 'red' }}>
              {data.firstName}
            </p>
          </div>

          <div>
            <p key={data.id} style={{ color: 'red' }}>
              {data.lastName}
            </p>
          </div>
          <div>
            <p key={data.id} style={{ color: 'red' }}>
              {data.age}
            </p>
          </div>
          <div>
            <p key={data.id} style={{ color: 'red' }}>
              {data.gender}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
