import React from 'react';
import moment from 'moment'

const BugTile = (props) => (
  <tr onClick={props.click}>
    <td>{props.bugName}</td>
    <td>{props.bugDescription}</td>
    <td>{props.reportedBy}</td>
    <td>{moment(props.createdDate).format("MM/DD/YYYY")} <br /> {moment(props.createdDate).format("h:mm a")}</td>
    <td>{props.assignedTo}</td>
    <td>{props.threatLevel}</td>
  </tr>
);

export default BugTile;
