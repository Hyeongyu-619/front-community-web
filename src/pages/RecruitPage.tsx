import {
  Box,
  Card,
  CardContent,
  Grid,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import { TabContext, TabPanel } from "@mui/lab";
import { TabList } from "@mui/lab";
import LanguageChips from "@/component/chips/LanguageChips";
import LocateChips from "@/component/chips/LocateChips";

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

function RecruitPage() {
  const [value, setValue] = React.useState("project");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  let subCategories: Map<string, string> = new Map([
    ["project", "Project"],
    ["study", "Study"],
  ]);
  return (
    <div>
      <TabContext value={value}>
        <div style={{ marginBottom: "10px" }}>
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
              sx={{ flexGrow: 1, overflow: "hidden" }}
            >
              <TabList value={value} onChange={handleChange}>
                <Tab label="프로젝트" value={"project"} />
                <Tab label="스터디" value={"study"} />
              </TabList>
            </Stack>
          </Box>
        </div>
        <Stack
          direction="row"
          justifyContent={"center"}
          flexWrap={"wrap"}
          alignItems={"flex-start"}
          marginBottom={"40px"}
          gap="10px"
          spacing={2}
        >
          {<LanguageChips label={"AWS"} languagetype={"aws"} />}
          {<LanguageChips label={"C"} languagetype={"c"} />}
          {<LanguageChips label={"Django"} languagetype={"django"} />}
          {<LanguageChips label={"Docker"} languagetype={"docker"} />}
          {<LanguageChips label={"Express"} languagetype={"express"} />}
          {<LanguageChips label={"Figma"} languagetype={"figma"} />}
          {<LanguageChips label={"Firebase"} languagetype={"firebase"} />}
          {<LanguageChips label={"Flutter"} languagetype={"flutter"} />}
          {<LanguageChips label={"Git"} languagetype={"git"} />}
          {<LanguageChips label={"Go"} languagetype={"go"} />}
          {<LanguageChips label={"Graphql"} languagetype={"graphql"} />}
          {<LanguageChips label={"Java"} languagetype={"java"} />}
          {<LanguageChips label={"JavaScript"} languagetype={"javascript"} />}
          {<LanguageChips label={"Kotlin"} languagetype={"kotlin"} />}
          {<LanguageChips label={"Kubernetes"} languagetype={"kubernetes"} />}
          {<LanguageChips label={"Mongodb"} languagetype={"mongodb"} />}
          {<LanguageChips label={"Mysql"} languagetype={"mysql"} />}
          {<LanguageChips label={"Nestjs"} languagetype={"nestjs"} />}
          {<LanguageChips label={"Nextjs"} languagetype={"nextjs"} />}
          {<LanguageChips label={"Nodejs"} languagetype={"nodejs"} />}
          {<LanguageChips label={"PHP"} languagetype={"php"} />}
          {<LanguageChips label={"Python"} languagetype={"python"} />}
          {<LanguageChips label={"React"} languagetype={"react"} />}
          {<LanguageChips label={"Reactnative"} languagetype={"reactnative"} />}
          {<LanguageChips label={"Spring"} languagetype={"spring"} />}
          {<LanguageChips label={"Svelte"} languagetype={"svelte"} />}
          {<LanguageChips label={"Swift"} languagetype={"swift"} />}
          {<LanguageChips label={"TypeScript"} languagetype={"typescript"} />}
          {<LanguageChips label={"Unity"} languagetype={"unity"} />}
          {<LanguageChips label={"Vue"} languagetype={"vue"} />}
          {<LanguageChips label={"Zeplin"} languagetype={"zeplin"} />}
          {<LanguageChips label={"Zest"} languagetype={"zest"} />}

          {<LocateChips label={"서울"} />}
        </Stack>
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

export default RecruitPage;
