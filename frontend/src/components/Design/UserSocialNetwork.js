import React from "react";
import { Link, Icon } from "@chakra-ui/react";

export default function UserSocialNetwork({ linkUrl, iconName }) {
  return (
    <Link href={linkUrl} pr={2}>
      <Icon as={iconName}>{linkUrl}</Icon>
    </Link>
  );
}
