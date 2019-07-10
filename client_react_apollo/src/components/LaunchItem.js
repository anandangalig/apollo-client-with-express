import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function LaunchItem({ launch: { flight_number, mission_name, launch_date_local } }) {
  return (
    <div className="card-body mb-3" key={flight_number}>
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission: <span className="test">{mission_name}</span>
          </h4>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
        </div>

        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary">
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
}
