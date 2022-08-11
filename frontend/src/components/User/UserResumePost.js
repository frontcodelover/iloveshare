import React, { useState, useEffect } from "react";
import CardLink from "../Design/CardLink";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { allUsersCall } from "../../Services/ApiCalls/AllApiCalls";
import axios from "axios";

const backendUrl = process.env.REACT_APP_API_URL;

export default function UserResumePost() {
  const [idForUser, setIdForUser] = useState(null);
  const [dataRes, setDataRes] = useState(null);
  const [userInfos, setUserInfos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useParams();

  useEffect(() => {
    if (idForUser !== null) {
      axios
        .get(`${backendUrl}/api/links/?filters[userid][$eq]=${idForUser}`)
        .then((res) => {
          setUserInfos(res.data);
          setIsLoading(false);
        }
      );
    }
    getUserInfos();
  }
, [idForUser, username]);

  const getUserInfos = async () => {
    await fetch(`${allUsersCall}filters[username][$eq]=${username}`)
      .then((res) => res.json())
      .then((data) => {
        setIdForUser(data[0].id);
        setDataRes(data);
      }).catch((err) => {
        console.log(err);
      }
      );
}



  return (
    <>
      {!isLoading && (
        <>
          {userInfos?.data?.map((link) => (
            <CardLink
              key={link.id}
              avatar={backendUrl + dataRes?.photo?.url}
              linkid={link.id}
              createdAt={link.attributes.createdAt}
              name={link.attributes.name}
              url={link.attributes.url}
              userId={link.attributes.userid}
              userName={dataRes.username}
              featuredImgSrc={
                backendUrl +
                link?.attributes?.featuredimg?.data?.attributes?.url
              }
              tagName={link?.attributes?.tag?.map((tag) => tag.name)}
              slug={link?.attributes?.slug}
            />
          ))}
        </>
      )}
    </>
  );
}
