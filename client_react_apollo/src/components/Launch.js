import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_LAUNCH_DETAILS = gql`
  query launch($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

export class Launch extends Component {
  render() {
    let flight_number = this.props.match.params.flight_number;
    flight_number = +flight_number;
    return (
      <Query query={GET_LAUNCH_DETAILS} variables={{ flight_number }}>
        {({ loading, error, data }) => {
          if (loading) return <h3>Loading...</h3>;
          if (error) console.log(error);

          const {
            flight_number,
            mission_name,
            launch_year,
            launch_date_local,
            launch_success,
            rocket: { rocket_id, rocket_name, rocket_type },
          } = data.launch;

          return (
            <Fragment>
              <p>mission_name: {mission_name}</p>
              <p>flight_number: {flight_number}</p>
              <p>launch_year: {launch_year}</p>
              <p>launch_date_local: {launch_date_local}</p>
              <p>launch_success: {launch_success}</p>
              <p>rocket_id : {rocket_id}</p>
              <p>rocket_name : {rocket_name}</p>
              <p>rocket_type : {rocket_type}</p>
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default Launch;
