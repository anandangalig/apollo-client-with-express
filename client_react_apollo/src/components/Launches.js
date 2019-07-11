import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import LaunchItem from './LaunchItem';

const LAUNCHES_QUERY = gql`
  query {
    launches {
      flight_number
      mission_name
      launch_date_local
    }
  }
`;
export class Launches extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 my-3">Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <h3>Loading...</h3>;
            if (error) console.log(error);

            return data.launches.map(launch => {
              return <LaunchItem launch={launch} key={launch.flight_number} />;
            });
          }}
        </Query>
      </div>
    );
  }
}

export default Launches;
