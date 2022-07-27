import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function PageNotFound() {
  return (
    <div>
      <Alert status="error" rounded={8}>
        <AlertIcon />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>This page doesn't exist.</AlertDescription>
      </Alert>
    </div>
  );
}
