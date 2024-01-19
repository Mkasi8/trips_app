import Tour from "./Tour";

const Tours = ({ users, handleClick }) => {
  return (
    <div className="tours main">
      {users.map((el) => (
        <Tour key={el.id} {...el} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Tours;
