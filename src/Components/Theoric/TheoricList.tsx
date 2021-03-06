/*--------------------------------------------------------*/
/*-----------IMPORT UTILITIES-----------*/
import React, { useEffect, useState } from "react";
import { fetchAllTheorics } from "../../app/Reducers/theoricSlice";
/*-----------IMPORT MUI & CSS-----------*/
import { List, ListItemButton, Collapse, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { StyledSpan } from "./StyledComponents";
import { LinkDom } from "../Style/StyledComponents";
/*--------------------------------------------------------*/

export default function TheoricList() {
  const [open, setOpen] = useState<boolean>(false);
  let [allTheoricsLocal, setAllTheoricsLocal] = useState<any>([]);

  useEffect(() => {
    fetchAllTheorics().then((res) => {
      setAllTheoricsLocal(res);
    });
  }, []);

  const handleOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setOpen(!open);
  };

  return (
    <List sx={{ width: "100%" }}>
      <ListItemButton
        onClick={handleOpen}
        sx={{ width: "100%", overflow: "hidden" }}
        style={{ fontFamily: "Helvetica", display: "flex" }}
      >
        <StyledSpan>
          <Typography style={{ fontWeight: "bold", letterSpacing: "0.1vw" }}>
            MATERIAL TEÓRICO
          </Typography>
        </StyledSpan>
        {open ? (
          <ExpandLess sx={{ width: "35%" }} />
        ) : (
          <ExpandMore sx={{ width: "35%" }} />
        )}
      </ListItemButton>
      {allTheoricsLocal?.map((teorico: any) => {
        return (
          <Collapse
            in={open}
            key={teorico._id}
            timeout="auto"
            unmountOnExit
            sx={{ width: "100%" }}
          >
            <LinkDom to={`/Theoric/${teorico._id}`}>
              <List component="div" disablePadding sx={{ width: "100%" }}>
                <ListItemButton
                  style={{ fontFamily: "Helvetica", display: "flex" }}
                >
                  {teorico.title}
                </ListItemButton>
              </List>
            </LinkDom>
          </Collapse>
        );
      })}
    </List>
  );
}
