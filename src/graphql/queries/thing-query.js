import gql from 'graphql-tag';

const query = gql`
query ThingQuery($id: String!) {
  thing(id: $id) {
      id,
      title,
      body,
      commentsCount
    }
  }
`;

export default query;
