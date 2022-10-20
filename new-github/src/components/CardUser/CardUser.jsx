import React from "react";
import website from "../../assets/website.svg";
import company from "../../assets/company.svg";
import twitterIcon from "../../assets/twitterIcon.svg";
import location from "../../assets/location.svg";

function UserCard(props) {
  return (
    <div className="cardWrapper">
      <div className="avatar">
        <img src={props.user.avatar_url} alt="Avatar" />
      </div>
      <h1 className="name">{props.user.name}</h1>
      <p className="login">@{props.user.login}</p>
      <p className="bio">{props.user.bio}</p>
      <div className="gitData">
        <div className="gitData-info">
          <p>Repos</p>
          <p> {props.user.public_repos} </p>
        </div>
        <div className="gitData-info">
          <p>Followers</p>
          <p> {props.user.followers} </p>
        </div>
        <div className="gitData-info">
          <p>Following</p>
          <p> {props.user.following} </p>
        </div>
      </div>
      <div className="location">
        <img src={location} alt="location" />
        <span>{props.user.location}</span>
      </div>
      <div className="company">
        <img src={company} alt="company" />
        <span>{props.user.company}</span>
      </div>
      <div className="twitter">
        <img src={twitterIcon} alt="twitterIcon" />
        <span>{props.user.twitter_username}</span>
      </div>
      <div className="website">
        <img src={website} alt="website" />
        <span>{props.user.blog}</span>
      </div>
    </div>
  );
}
export default UserCard;
