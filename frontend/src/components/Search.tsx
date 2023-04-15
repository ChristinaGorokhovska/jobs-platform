import { Box, Grid, TextField, Button, Paper, Typography, MenuItem } from "@mui/material";
import React, { useState } from "react";
import Axios from "../config/axiosConfig";
import Autocomplete from "@mui/material/Autocomplete";

import { useAuthContext } from "../context/AuthProvider";

const categories = ["Їжа", "Матеріали", "Засоби гігієни", "Одяг", "Техніка", "Меблі"];
const allLanguages = ["Ukrainian", "English", "Polish", "Spanish"];

interface Ivacancy {
  _id: string;
  title: string;
  type: string;
  categories: Array<string>;
  description: string;
  location: {
    country: string;
    city: string;
  };
}

export default function Search() {
  const [title, setTitle] = useState<string>("");
  const [languages, setLanguages] = useState<Array<string | null>>();
  const [experience, setExperience] = useState<string | null>();
  const [city, setCity] = useState<string | null>("");
  const [error, setError] = useState<string>();
  const [result, setResult] = useState<Array<Ivacancy> | null>();

  const [email, setEmail] = useState<string>("");

  const { auth } = useAuthContext();

  function handleInputChange(event: any, value: any) {
    setLanguages(value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setResult(null);
    e.preventDefault();

    try {
      const res = await Axios.get("/api/search", {
        params: { title: title, city: city, experience: experience, languages: languages },
      });

      setResult(res.data.vacancies);
    } catch (error: any) {
      setError(error?.message);
    }
  };

  return (
    <>
      {" "}
      <Box display={"flex"} justifyContent={"center"} marginTop={16}>
        <Grid
          maxWidth={900}
          container
          display={"flex"}
          component={"form"}
          onSubmit={(e) => handleSubmit(e)}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item xs={3}>
            <TextField
              id="seach"
              name="search"
              label="Search"
              fullWidth
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={3}>
            <Autocomplete
              multiple
              id="languages"
              options={allLanguages}
              getOptionLabel={(option) => option}
              //defaultValue={[allLanguages[0]]}
              filterSelectedOptions
              renderInput={(params) => <TextField {...params} label="Language" placeholder="Favorites" />}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="city"
              name="city"
              label="City"
              fullWidth
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
              id="experience"
              type="number"
              name="experience"
              label="Experience"
              onChange={(e) => {
                setExperience(e.target.value);
              }}
              fullWidth
            ></TextField>
          </Grid>

          <Grid item>
            <Button variant="outlined" type="submit">
              Пошук
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box display={"flex"} alignItems="center" flexDirection={"column"}>
        {result ? (
          result.map((vacancy) => {
            return (
              <Box width={"50%"} marginTop={3}>
                <Paper elevation={5} sx={{ padding: 5 }}>
                  <Grid container display={"flex"}>
                    <Grid item xs={4}>
                      <Typography variant="h5" component={"h2"} color="primary">
                        {vacancy.title}
                      </Typography>

                      <Typography variant="h6" color={"pink"}>
                        {vacancy.location.city}
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Box>
            );
          })
        ) : error ? (
          <Typography marginTop={5} variant="h5" color={"grey"}>
            За Вашим запитом результатів не знайдено
          </Typography>
        ) : null}
      </Box>
    </>
  );
}
