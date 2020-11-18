import { useEffect } from "react";
/* components */
import { Test } from "components/Test";

export const Home = () => {
  useEffect(() => {
    // Make a request for a user with a given ID
  }, []);

  return (
    <div>
      welcome to homepagzz
      <Test />
    </div>
  );
};
