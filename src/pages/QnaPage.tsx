import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tab,
  Tabs,
  Typography,
  Link as Muilink,
  ButtonGroup,
} from "@mui/material";
import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import { TabContext, TabPanel } from "@mui/lab";
import { TabList } from "@mui/lab";
import LanguageChips from "@/component/chips/LanguageChips";
import AvatarSvg from "assets/iconsvg/GiyHub.svg";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import NewPostPage from "@/pages/NewPostPage";
import { SettingsInputComponent } from "@mui/icons-material";
import NoticePage from "./NoticePage";

export type BoardProps = {
  title: string;
  contents: string;
  avatar: string;
};

let boards: BoardProps[] = [
  {
    title: "게시글 1",
    contents:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    avatar: "😀",
  },
];

function createBoard(subCategory: String) {
  let returnElements: JSX.Element[] = [];
  for (let i = 0; i < 6; i++) {
    returnElements.push(
      <Grid item xs={20} sm={10} md={5}>
        <div
          style={{
            padding: "20px",
          }}
        >
          <Card
            onClick={() => {
              console.log("hi");
            }}
          >
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="black">
                {subCategory}
              </Typography>
              <List>
                {boards.map((v, i) => {
                  return (
                    <ListItemButton>
                      <Stack
                        sx={{
                          direction: "column",
                          justifyItems: "center",
                          justifyContents: "center",
                          alignItems: "center",
                        }}
                      >
                        <ListItemIcon>{v.avatar}</ListItemIcon>
                        <ListItemText>{v.title}</ListItemText>
                        <ListItemText>{v.contents}</ListItemText>
                      </Stack>
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

function QnaPage() {
  const [value, setValue] = React.useState("tech");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

 
  let subCategories: Map<string, string> = new Map([
    ["tech", "Tech"],
    ["career", "Career"],
    ["etc", "ETC"],
    ["all", "All"],
  ]);
  return (
    <div>
      <TabContext value={value}>
        <Box
          sx={{
            bgcolor: "background.paper",
            display: "flex",
          }}
        >
          <Stack
            direction="row"
            justifyContent={"center"}
            alignItems={"center"}
            spacing={2}
            paddingTop="20px"
            sx={{ flexGrow: 1, overflow: "hidden" }}
          >
            <Button to="/newpost" component={Link} variant="outlined">
              글 작성
            </Button>

            <TabList
              value={value}
              onChange={handleChange}
              centered
              sx={{
                direction: "row",
                minWidth: "700px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Tab label="기술" value={"tech"} />
              <Tab label="커리어" value={"career"} />
              <Tab label="기타" value={"etc"} />
              <Tab label="전체" value={"all"} />
            </TabList>
          </Stack>
        </Box>
        {Array.from(subCategories).map((e) => {
          return (
            <TabPanel value={e[0]}>
              <Grid
                container
                direction={"row"}
                justifyContent="center"
                alignItems="center"
              >
                {createBoard(e[1])}
              </Grid>
            </TabPanel>
          );
        })}
      </TabContext>
    </div>
  );
}

export default QnaPage;
