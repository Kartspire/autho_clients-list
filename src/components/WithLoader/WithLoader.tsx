import React from "react";
import { useAppSelector } from "../../app/hooks";
import { Loader } from "../Loader";

export const WithLoader = ({ children }: React.PropsWithChildren) => {
  const loading = useAppSelector((state) => state.loader.loading);

  return loading ? <Loader /> : <div>{children}</div>;
};
