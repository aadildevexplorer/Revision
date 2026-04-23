import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getUsers from "../Data/api/service/userService";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await getUsers();
        setUsers(res);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [user]);

  if (loading) {
    return (
      <>
        <div className="text-red-600 text-5xl flex justify-center items-center min-h-[90vh]">
          <h1>Loading</h1>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="text-red-600 text-5xl flex justify-center items-center min-h-[90vh]">
          <h1>{error}</h1>
        </div>
      </>
    );
  }

  return (
    <div className="text-5xl flex justify-center items-center min-h-[90vh]">
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <p>{user.name}</p>
            <p>{user.price}</p>
            <p>{user.category}</p>
            <p>{user.qty}</p>
            <p>{user.description}</p>
            <img src={user.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
