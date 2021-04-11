// import { useQuery, gql } from '@apollo/client';
// import { UserBasic } from '../interfaces/common';

// const GET_USERS = gql`
//   query {
//     users {
//       firstName
//     }
//   }
// `;

const PublicHomePage = () => {
  // const { loading, error, data } = useQuery(GET_USERS);

  // if (loading) return <p>Loading</p>;
  // if (error) return <p>Data could not be fetched.</p>;

  // return data.users?.map(({ firstName }: Partial<UserBasic>) => (
  //   <p>{firstName}</p>
  // ));
  return <h1>Welcome to Mentor Manage</h1>;
};

export default PublicHomePage;
