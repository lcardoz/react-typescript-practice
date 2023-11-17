import { ReactNode } from "react";

// use children prop to pass children to component, ReactNode is a more complex prop type that lets you pass html to a component:
interface Props {
  children: ReactNode;
}


const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
