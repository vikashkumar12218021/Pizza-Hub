import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Backgroundvideo from "../video/background1.mp4";

const About = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Layout>
      <video
        className="videoBackground"
        src={Backgroundvideo}
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          my: 14,
          textAlign: "center",
          p: 4,
          color: "#fff",
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2.5rem",
          },
          "& p": {
            textAlign: "justify",
            fontSize: "1.1rem",
            margin: "0 auto",
            maxWidth: "800px",
            lineHeight: "1.8",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "2rem",
            },
          },
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome To Our Restaurant
        </Typography>
        <Typography paragraph>
          At our restaurant, we strive to create a perfect blend of delectable
          cuisine, heartwarming ambiance, and unparalleled hospitality. Our
          philosophy revolves around delivering not just meals, but experiences
          that you will cherish forever.
        </Typography>
        <Typography paragraph>
          Each dish on our menu is a testament to our dedication to fresh, local
          ingredients and innovative cooking techniques. From sizzling starters
          to mouthwatering main courses and indulgent desserts, every bite is a
          journey into culinary excellence. Whether you're celebrating a
          milestone or simply enjoying a night out, our restaurant is the
          perfect destination.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 4,
          }}
        >
          {/* Redirect to Menu */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => navigate("/menu")} // Navigate to menu page
          >
            Explore Our Menu
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ p: 4, mt: 8, backgroundColor: "rgba(0, 0, 0, 0.7)", color: "#fff" }}>
        <Typography variant="h4" textAlign="center" mb={4}>
          What Sets Us Apart
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.01)",
                color: "#fff",
                textAlign: "center",
                py: 4,
                px: 2,
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Fresh Ingredients
                </Typography>
                <Typography>
                  We source our ingredients daily to ensure the highest quality
                  and freshness in every dish we serve.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.01)",
                color: "#fff",
                textAlign: "center",
                py: 2.5,
                px: 2,
              }}
            >
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Cozy Ambiance
                </Typography>
                <Typography>
                  Experience a welcoming and intimate setting that makes every
                  meal special, whether it's casual or formal.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.01)",
                color: "#fff",
                textAlign: "center",
                py: 4,
                px: 2,
              }}
            >
              <CardContent>
                
                <Typography variant="h5" gutterBottom>
                  Exceptional Service
                </Typography>
                <Typography>
                  Our friendly and attentive staff are here to make sure you
                  feel right at home from the moment you step in.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default About;
