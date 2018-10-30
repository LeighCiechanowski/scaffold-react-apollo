import React from "react";

import { ApolloProvider } from "react-apollo";
// import ApolloClient from "apollo-boost";

// const client = new ApolloClient({
//     uri: "http://localhost:3005"
//   });

  const Apollo = ({children}) => {
    return(
      <div>
    {/* // <ApolloProvider client={client}> */}
      {children}
      </div>
    // </ApolloProvider>
    )
  };

  export default Apollo;

