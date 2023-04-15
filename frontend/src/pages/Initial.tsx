import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Initial() {
  return (
    <div>
      <Box display={"flex"} justifyContent={"center"}>
        <Button color="inherit" component={Link} to={"/login"}>
          Sign In
        </Button>
        <Button color="inherit" component={Link} to={"/register"}>
          Sign Up
        </Button>
      </Box>
    </div>
  );
}
