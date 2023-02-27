import { TonalitySharp } from "@mui/icons-material";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  SelectChangeEvent,
  Box,
  Grid,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  NativeSelect,
  Stack,
  TextField,
  Autocomplete,
  Chip,
} from "@mui/material";
import { toNamespacedPath } from "node:path/win32";
import React, { useCallback, useState } from "react";

function NewPostPage() {
  const [category, setCategoty] = React.useState("");

  return (
    <div>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        paddingTop="20px"
        sx={{ flexGrow: 1, overflow: "hidden" }}
      >
        <FormControl sx={{ minWidth: "800px" }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            카테고리를 선택해주세요.
          </InputLabel>
          <NativeSelect
            defaultValue={"ddd"}
            inputProps={{
              name: "category",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>기술</option>
            <option value={20}>커리어</option>
            <option value={30}>기타</option>
          </NativeSelect>
        </FormControl>
        <TextField
          sx={{ minWidth: "800px" }}
          id="filled-number"
          label="제목"
          type="number"
          placeholder="제목을 입력해주세요."
          InputLabelProps={{
            shrink: true,
          }}
        ></TextField>
        <Stack spacing={3} sx={{ width: 800 }}>
          <Autocomplete
            multiple
            id="tags-outlined"
            options={tagList}
            getOptionLabel={(option) => option.tagName}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="태그"
                placeholder="태그를 입력해주세요."
              />
            )}
          />
        </Stack>
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Stack>
    </div>
  );
}

const tagList = [
  { tagName: "AWS" },
  { tagName: "C" },
  { tagName: "Django" },
  { tagName: "Docker" },
  { tagName: "Express" },
  { tagName: "Figma" },
  { tagName: "Firebase" },
  { tagName: "Flutter" },
  { tagName: "Git" },
  { tagName: "Go" },
  { tagName: "Graphql" },
  { tagName: "Java" },
  { tagName: "JavaScript" },
  { tagName: "Kotlin" },
  { tagName: "Kubernetes" },
  { tagName: "Mongodb" },
  { tagName: "Mysql" },
  { tagName: "Nestjs" },
  { tagName: "Nextjs" },
  { tagName: "Nodejs" },
  { tagName: "PHP" },
  { tagName: "Python" },
  { tagName: "React" },
  { tagName: "Reactnative" },
  { tagName: "Spring" },
  { tagName: "Svelte" },
  { tagName: "Swift" },
  { tagName: "TypeScript" },
  { tagName: "Unity" },
  { tagName: "Vue" },
  { tagName: "Zeplin" },
  { tagName: "Zest" },
];

export default NewPostPage;
