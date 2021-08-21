import React, { Component } from "react";
import "../styles/styles.css";
import confLogo from "../images/badge-header.svg";

export class Badge extends Component {
  render() {
    const { firstName, lastName, avatarUrl, jobTitle, twitter } = this.props;
    return (
      <div className="badge container-fluid">
        <div className="badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="badge__section-name">
          <img className="badge__avatar" src={avatarUrl} alt="Avatar" />
          <h1>
            {firstName}
            <br /> {lastName}
          </h1>
        </div>
        <div className="badge__section-info">
          <h3> {jobTitle} </h3>
          <div> @{twitter} </div>
        </div>
        <div className="badge__footer">#PLatziConf</div>
      </div>
    );
  }
}

export default Badge;
