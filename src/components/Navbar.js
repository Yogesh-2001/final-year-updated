import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

import "../styles/navbar.css";
import DrawerComp from "./DrawerComp";

//navbar page array
import NavList from './NavList'

const Navbar = () => {

  //Indicator control
  const [currIndicator, setIndicator] = useState();

  //responsive control
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <>
      <AppBar position="static" className="NavSection">
        <Toolbar className="d-flex justify-content-between">
          <Link to="/"><img src='/images/vit-logo.png' height={50} /></Link>

          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <div className="navbar-link">
                {

                  NavList.map((page, index) => (
                    <Link to={`${page.path}`}>{page.name}</Link>
                  ))

                }
              </div>

            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
