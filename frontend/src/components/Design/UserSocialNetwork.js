import React from "react";
import { Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function UserSocialNetwork({ linkUrl, iconName }) {
  return (
    <Link to={linkUrl} pr={2}>
      <Icon as={iconName}>{linkUrl}</Icon>
    </Link>
  );
}
