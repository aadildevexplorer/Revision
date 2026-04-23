import React, { useState } from "react";
import Other from "./Data/Other";

const Card = ({ users }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      <div>
        {show && (
          <>
            <div style={{ display: "flex", gap: "10px" }}>
              {users?.map((item, index) => (
                <div key={index} className="Border">
                  <h1>{item?.name}</h1>
                  <h1>{item?.age}</h1>
                  <h1>{item?.city}</h1>
                  <h1>{item?.ID}</h1>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <Other />
    </>
  );
};

export default Card;
