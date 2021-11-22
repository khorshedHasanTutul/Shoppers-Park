import { useEffect } from "react";

const Page = ({ children, ...rest }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <section {...rest}>{children}</section>;
};

export default Page;
