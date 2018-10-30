import gql from 'graphql-tag';

const query = gql`
query () {
  things ()
  {
    id,
    title,
    headline,
    body,
    comments {
        body
    }
  }
}
`;

export default query;
