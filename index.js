require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const gitHubData = {
  login: "yayush059",
  id: 108602300,
  node_id: "U_kgDOBnkjvA",
  avatar_url: "https://avatars.githubusercontent.com/u/108602300?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/yayush059",
  html_url: "https://github.com/yayush059",
  followers_url: "https://api.github.com/users/yayush059/followers",
  following_url:
    "https://api.github.com/users/yayush059/following{/other_user}",
  gists_url: "https://api.github.com/users/yayush059/gists{/gist_id}",
  starred_url: "https://api.github.com/users/yayush059/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/yayush059/subscriptions",
  organizations_url: "https://api.github.com/users/yayush059/orgs",
  repos_url: "https://api.github.com/users/yayush059/repos",
  events_url: "https://api.github.com/users/yayush059/events{/privacy}",
  received_events_url: "https://api.github.com/users/yayush059/received_events",
  type: "User",
  site_admin: false,
  name: "Ayush Yadav",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 22,
  public_gists: 0,
  followers: 2,
  following: 3,
  created_at: "2022-07-03T04:37:11Z",
  updated_at: "2024-09-28T07:02:29Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("login page");
});

app.get("/signup", (req, res) => {
  res.send("signup page");
});

app.get("/github", (req, res) => {
    res.json(gitHubData);
  });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
