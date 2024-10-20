// import express from "express";
// import next from "next";
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production"; //false => product, true => dev
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  //필수항목!, pages폴더 아래 component들 pre- render
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
