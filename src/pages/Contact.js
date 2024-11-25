import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Grid,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      {/* Hero Section */}
      {/* <Box
        sx={{
          textAlign: "center",
          py: 5,
          px: 3,
          backgroundColor: "#f8f9fa",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
          Contact Us
        </Typography>
        <Typography sx={{ maxWidth: "800px", mx: "auto", fontSize: "1.2rem" }}>
          Have questions or need assistance? Feel free to reach out to us! We're
          here to help and ensure your experience is exceptional.
        </Typography>
      </Box> */}

      {/* About Section */}
      <Box sx={{ my: 5, px: 3, textAlign: "center" }}>
        <Typography variant="h4" sx={{
          textAlign: "center",
          py: 3,
          px: 1,
          backgroundColor: "#f8f9fa",
        }}>
          Get In Touch
        </Typography>
        <Typography
          sx={{
            maxWidth: "900px",
            mx: "auto",
            py:3,px:1,
            fontSize: "1rem",
            lineHeight: "1.8",
            mb: 4,
          }}
        >
          At our restaurant, we prioritize your satisfaction. Whether you have
          inquiries, feedback, or special requests, our team is dedicated to
          providing you with prompt and courteous assistance. Reach out to us
          today—we’d love to hear from you!
        </Typography>
      </Box>

      {/* Contact Details Section */}
      <Box
        sx={{
          m: 3,
          px: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <TableContainer component={Paper} sx={{ maxWidth: "700px", mx: "auto" }}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    bgcolor: "#000",
                    color: "#fff",
                    textAlign: "center",
                    fontSize: "1.2rem",
                  }}
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", mr: 2 }} />
                  <strong>Support:</strong> +9196 9388 0632 (Toll-Free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", mr: 2 }} />
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:vik@gmail.com"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    vik@gmail.com
                  </a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", mr: 2 }} />
                  <strong>Phone:</strong> 7367089174
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <LocationOnIcon sx={{ color: "orange", mr: 2 }} />
                  <strong>Address:</strong> 123, Foodie Street, Flavor Town
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Call-to-Action Section */}
      <Box
        sx={{
          my: 5,
          px: 3,
          textAlign: "center",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="tel:+919693880632"
            >
              Call Us Now
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              href="mailto:vik@gmail.com"
            >
              Email Us
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Contact;
