import React from "react";

export default function Card(props) {
  return (
    <div>
      <div className="card--container">
        <img src={props.imageUrl} className="card--img"/>
        <div className="card--info">
          <div className="card--location">
            <i className="fa fa-map-marker"/>
            <p className="card--text spacer">{props.location}</p>
            <a href={props.googleMapsUrl} className="card--text grey">View on Google Maps</a>
          </div>
          <h1 className="card--title">{props.title}</h1>
          <strong className="card--text">{props.startDate} - {props.endDate}</strong>
          <p className="card--text para">{props.description}</p>
        </div>
      </div>
      <hr/>
    </div>
  )
}
