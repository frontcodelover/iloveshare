import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../components/Home/Home";
import PostByTags from "../../components/Tags/PostByTags";
import Trending from "../../Pages/Trending";
import Favourites from "../../Pages/Favourites";
import Explore from "../../Pages/Explore";
import SignUp from "../../Pages/SignUp";
import LoginRedirect from "../../components/User/LoginRedirect";
import PageNotFound from "../../Pages/404";
import { useSelector } from "react-redux";
import AddLinkView from "../../Pages/AddLink/AddLinkView";
import Profile from "../../Pages/Profile";
import SinglePost from "../../components/Post/SinglePost";
import UserDashboard from "../../Pages/UserDashboard";

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
      <Route exact path="/dashboard/" element={<UserDashboard /> } />
      <Route exact path="/addlink" element={<AddLinkView />} />
      <Route exact path="/profile/:username" element={<Profile />} />
      <Route exact path="/post/:slug" element={<SinglePost />} />
      <Route
        exact
        path="/connect/:providerName/redirect"
        component={LoginRedirect}
      />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
