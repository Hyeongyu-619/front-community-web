import "@/App.css";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "@/pages/MainPage";
import NoticePage from "@/pages/NoticePage";
import QnaPage from "@/pages/QnaPage";
import CommunityPage from "@/pages/CommunityPage";
import RecruitPage from "@/pages/RecruitPage";
import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Tabs,
  Tab,
  Grid,
  Divider,
  Stack,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
  Chip,
  Link as MuiLink,
  Avatar,
  FormControlLabel,
} from "@mui/material";
import React from "react";
import { DefaultTheme } from "./themes/DefaultThemes";
import MainIcon from "@/assets/unnamed.png";
import { mainModule } from "process";
import { width } from "@mui/system";
import GithubIcon from "./assets/GithubIcon";
import GoogleIcon from "./assets/GoogleIcon";
import AltTextField from "./component/AltTextField";
import { PaddingOutlined } from "@mui/icons-material";
import DarkMode from "@/assets/DarkMode";
import NewPostPage from "./pages/NewPostPage";

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setInRegist(false);
    setOpen(false);
  };
  const [inRegist, setInRegist] = React.useState(false);
  return (
    <>
      <div>
        <ThemeProvider theme={DefaultTheme}>
          <BrowserRouter>
            <Box
              sx={{
                bgcolor: "background.paper",
                display: "flex",
              }}
            >
              <Stack
                direction="row"
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
                spacing={4}
                sx={{ flexGrow: 1, overflow: "hidden" }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: value == 0 ? "transparent" : "black",
                    },
                  }}
                  sx={{}}
                >
                  <Tab
                    icon={<img src={MainIcon} width={"40px"} height={"40px"} />}
                    to="/"
                    component={Link}
                  />
                  <Tab label="Q&A" to="/qna" component={Link} />
                  <Tab label="커뮤니티" to="/community" component={Link} />
                  <Tab label="공지사항" to="/notice" component={Link} />
                  <Tab label="프로젝트&스터디" to="/recruit" component={Link} />
                </Tabs>
              </Stack>
              <Stack
                direction="row"
                sx={{
                  justifyItems: "center",
                  justifyContents: "center",
                  alignItems: "center",
                }}
              >
                {DarkMode()}
                <Button
                  sx={{ paddingLeft: "16px", paddingRight: "16px" }}
                  onClick={handleClickOpen}
                >
                  로그인
                </Button>
                <Avatar src="assets/unnamed.png" />
              </Stack>

              <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                  <Stack
                    sx={{
                      justifyItems: "center",
                      justifyContents: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={MainIcon}
                      width={"100px"}
                      height={"100px"}
                      style={{
                        display: "flex",
                        paddingBottom: "24px",
                        paddingTop: "12px",
                      }}
                    />
                    <Typography variant="h5" textAlign={"center"}>
                      <b>오신것을 환영합니다!</b>
                    </Typography>
                    {!inRegist ? (
                      <Stack direction={"row"}>
                        <Button
                          color="secondary"
                          variant="outlined"
                          sx={{ margin: "16px", width: "100px" }}
                        >
                          {<GithubIcon />}
                        </Button>
                        <Button
                          color="secondary"
                          variant="outlined"
                          sx={{ margin: "16px", width: "100px" }}
                        >
                          {<GoogleIcon />}
                        </Button>
                      </Stack>
                    ) : (
                      <></>
                    )}
                    <AltTextField
                      errorMsg="아이디는 4자~15자 사이로 입력하세요."
                      label="아이디"
                      placeholder=""
                      fieldtype="ID"
                      sx={{ width: "240px" }}
                    />

                    <AltTextField
                      sx={{ width: "240px" }}
                      errorMsg="알파벳, 숫자를 조합해서 6자 이상 입력하세요."
                      label="비밀번호"
                      placeholder=""
                      fieldtype="PW"
                    />
                    {!inRegist ? (
                      ""
                    ) : (
                      <>
                        <AltTextField
                          errorMsg="유효하지 않은 이메일 형식입니다."
                          label="이메일"
                          placeholder=""
                          fieldtype="EMAIL"
                          sx={{ width: "240px" }}
                        />
                        <AltTextField
                          errorMsg=""
                          label="이름"
                          placeholder=""
                          fieldtype="NAME"
                          sx={{ width: "240px" }}
                        />
                        <AltTextField
                          errorMsg="별명을 알파벳,한글,숫자를 15자 이하로 입력해주세요."
                          label="닉네임"
                          placeholder=""
                          fieldtype="NICKNAME"
                          sx={{ width: "240px" }}
                        />
                      </>
                    )}
                    <Button
                      sx={{
                        width: "240px",
                      }}
                      style={{ margin: "4px" }}
                      variant="contained"
                    >
                      {inRegist ? "회원가입" : "로그인"}
                    </Button>

                    {inRegist ? (
                      <Stack
                        direction={"row"}
                        sx={{
                          justifyItems: "center",
                          justifyContents: "center",
                          alignItems: "center",
                          paddingTop: "15px",
                        }}
                      >
                        <Typography
                          variant="button"
                          sx={{ marginRight: "10px" }}
                        >
                          <b>이미 계정이 있으신가요?</b>
                        </Typography>
                        <MuiLink
                          component="button"
                          variant="body2"
                          onClick={() => {
                            setInRegist(false);
                          }}
                        >
                          <Typography variant="button">
                            {"로그인하기"}
                          </Typography>
                        </MuiLink>
                      </Stack>
                    ) : (
                      <Stack
                        direction={"row"}
                        sx={{
                          justifyItems: "center",
                          justifyContents: "center",
                          alignItems: "center",
                          paddingTop: "15px",
                        }}
                      >
                        <Typography
                          variant="button"
                          sx={{ marginRight: "10px" }}
                        >
                          <b>아직 회원이 아니신가요?</b>
                        </Typography>
                        <MuiLink
                          component="button"
                          variant="body2"
                          onClick={() => {
                            setInRegist(true);
                          }}
                        >
                          <Typography variant="button">{"회원가입"}</Typography>
                        </MuiLink>
                      </Stack>
                    )}
                  </Stack>
                </DialogContent>
              </Dialog>
            </Box>

            <div style={{ display: "block", width: "100%" }}>
              <Divider></Divider>
            </div>

            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/qna" element={<QnaPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/notice" element={<NoticePage />} />
              <Route path="/recruit" element={<RecruitPage />} />
              <Route path="/newpost" element={<NewPostPage/>} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
