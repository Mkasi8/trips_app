import { useState } from "react";

const Tour = ({ image, info, name, price, handleClick, id }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="tour">
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "350px", objectFit: "cover" }}
        className="img"
      />
      <div className="tours">
        <h5 className="name">{name}</h5>
        <p className="pp">
          {toggle ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setToggle(!toggle)} className="info-btn">
            {toggle ? "show less" : "  read more"}
          </button>
        </p>
        <p className="price">${price}</p>
      </div>
      <button
        type="button"
        onClick={() => handleClick(id)}
        className="btn btn-block"
      >
        Not Interested
      </button>
    </div>
  );
};

export default Tour;
