import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../components/Home/Home";
import PostByTags from "../../components/Tags/PostByTags";
import Trending from "../../components/Trending";
import Favourites from "../../components/Favourites";
import Explore from "../../components/Explore";
import SignUp from "../../components/User/SignUp";
import LoginRedirect from "../../components/User/LoginRedirect";
import Dashboard from "../../components/User/Dashboard";
import PageNotFound from "../../404";
import { useSelector } from "react-redux";
import AddLinkView from "../../components/AddLink/AddLinkView";
import Profile from "../../components/User/Profile";

export default function Routing() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/t/:tags" element={<PostByTags />} />
      <Route exact path="/trending" element={<Trending />} />
      <Route exact path="/favourites" element={<Favourites />} />
      <Route exact path="/explore" element={<Explore />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/dashboard/" element={<Dashboard />} />
      <Route exact path="/addlink" element={<AddLinkView />} />
      <Route exact path="/profile/:id" element={<Profile />} />
      <Route
        exact
        path="/connect/:providerName/redirect"
        component={LoginRedirect}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
