import gql from 'graphql-tag';

const query = gql`
query ThingsQuery {
  things {
      id,
      title,
      body,
      comments {
        body
      }
    }
  }
`;

export default query;
