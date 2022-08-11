import React from "react";
import { useParams } from "react-router-dom";
import SearchResult from "../components/Search/SearchResult";

export default function Search() {
  const { query } = useParams();

  return <SearchResult query={query} />;
}
