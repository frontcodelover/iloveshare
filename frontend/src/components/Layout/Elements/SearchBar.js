import React, { useState } from "react";
import { Button, ButtonGroup, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);

  };
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${value}`);
  };

  return (
    <form>
      <ButtonGroup spacing={2}>
        <Input placeholder="Rechercher" onChange={handleChange} />
        <Button type="submit" onClick={handleSubmit}>
          <BsSearch />
        </Button>
      </ButtonGroup>
    </form>
  );
}
