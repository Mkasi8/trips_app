import { useState, useEffect } from "react";
import Tours from "./components/Tours";
import Loading from "./components/Loading";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        // console.log(user);
        setUser(data);
        console.log(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      // hide loading
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  const handleClick = (id) => {
    setUser((current) => current.filter((curr) => curr.id !== id));
  };
  // order matters
  // don't place user JSX before loading or error
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  return (
    <>
      <Tours users={users} handleClick={handleClick} />
    </>
  );
}

export default App;
