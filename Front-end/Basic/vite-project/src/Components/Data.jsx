import React from "react";

const Data = ({ usersData }) => {
  return (
    <>
      <div>
        {usersData?.map((data) => (
          <>
            <p>{data?.name}</p>
            <p>{data?.email}</p>
            <p>{data?.password}</p>
            <p>{data?.ID}</p>
          </>
        ))}
      </div>
    </>
  );
};

export default Data;
