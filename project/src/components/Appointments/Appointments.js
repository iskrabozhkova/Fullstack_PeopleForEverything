import React, { useEffect, useState } from "react";
import axios from "axios";
import ButtonAppBar from "../Menu/AppBar";
import Post from "../Advertisements/Post";
import {
  Container,
  Grid,
  Divider,
} from "@mui/material";

function Appointments() {
  const userDetails = JSON.parse(localStorage.getItem("userData"));
  const id = userDetails._id;

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `http://localhost:8080/api/appointments/${id}`,
    }).then((res) => {
      const appointmentsArray = res.data.appointments;

      appointmentsArray.map((appointment) => {
        const userEmail = appointment[0].email;
        const date = appointment[0].date;
        const advert = appointment[0].advert;
        setAppointments((appointments) => [
          ...appointments,
          { userEmail, date, advert },
        ]);
      });
    });
  }, []);
  return (
    <div>
      <div>
        {appointments != null ? (
          <div>
            <h1>Appointments</h1>
            <ButtonAppBar />

            <Container sx={{ marginTop: 10 }}>
              <Grid container spacing={1}>
                <Grid
                  container
                  direction="column"
                  sm={4}
                  item={true}
                  sx={{ fontWeight: "bold" }}
                >
                  User email
                </Grid>
                <Grid
                  container
                  direction="column"
                  sm={4}
                  item={true}
                  sx={{ fontWeight: "bold" }}
                >
                  Date
                </Grid>
                <Grid
                  container
                  direction="column"
                  sm={2}
                  item={true}
                  sx={{ fontWeight: "bold" }}
                >
                  Advert
                </Grid>
              </Grid>
              <Divider sx={{ margin: 3 }}></Divider>
              {appointments.map((appointment, i) => (
                <Grid key={i} container spacing={1}>
                  <Grid container direction="column" sm={4} item={true}>
                    <p>{appointment.userEmail}</p>
                  </Grid>
                  <Grid
                    key={i + 1}
                    container
                    direction="column"
                    sm={4}
                    item={true}
                  >
                    <p> {appointment.date}</p>
                  </Grid>
                  <Post post={appointment} />
                </Grid>
              ))}
            </Container>
          </div>
        ) : null}
      </div>
    </div>
  );
}

Appointments.propTypes = {};
export default Appointments;
