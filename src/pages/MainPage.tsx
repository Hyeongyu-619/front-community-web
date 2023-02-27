import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import React from "react";
export type BoardProps = {
  title: string;
  contents: string;
  avatar: string;
};

let boards: BoardProps[] = [
  {
    title: "게시글 1",
    contents: "내용 1",
    avatar: "😀",
  },

  {
    title: "게시글 2",
    contents: "내용 2",
    avatar: "😀",
  },

  {
    title: "게시글 3",
    contents: "내용 3",
    avatar: "😀",
  },
];

function createBoard() {
  let returnElements: JSX.Element[] = [];
  for (let i = 0; i < 6; i++) {
    returnElements.push(
      <Grid item xs={20} sm={10} md={5}>
        <div
          style={{
            padding: "20px",
          }}
        >
          <Card>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="black">
                HOME
              </Typography>
              <List>
                {boards.map((v, i) => {
                  return (
                    <ListItemButton>
                      <ListItemIcon>{v.avatar}</ListItemIcon>
                      <ListItemText>{v.title}</ListItemText>
                      <ListItemText>{v.contents}</ListItemText>
                    </ListItemButton>
                  );
                })}
              </List>
            </CardContent>
          </Card>
        </div>
      </Grid>
    );
  }
  return returnElements;
}
function MainPage() {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent="center"
      alignItems="center"
    >
      {createBoard()}
    </Grid>
  );
}

export default MainPage;
