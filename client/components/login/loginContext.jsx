import React from "react";

export const LoginContext = React.createContext({
  username: undefined,
  client_id: undefined,
  loadUser: async () => {},
});
