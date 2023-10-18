import React from "react";

export const LoginContext = React.createContext({
  username: undefined,
  loadUser: async () => {},
});
