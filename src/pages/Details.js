import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";

const OrderDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { menu, quantity } = location.state;

  const handlePlaceOrder = () => {
    alert("Thanks for ordering!"); // Print "Thanks for ordering!"
    navigate("/Menu"); // Redirect to Menu page
  };

  const handleResetOrder = () => {
    alert("Are you sure!");
    navigate("/Overview"); // Redirect to Overview page
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 4,
        gap: 3,
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Order Summary
      </Typography>

      {/* Display Order Image */}
      <Card sx={{ maxWidth: "600px", width: "100%" }}>
        <CardMedia
          component="img"
          height="400"
          image={menu.image}
          alt={menu.name}
          sx={{ objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {menu.name}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Description: {menu.description}
          </Typography>
          <Typography variant="h6" color="primary">
            Quantity: {quantity}
          </Typography>
          <Typography variant="h6" color="primary">
            Total Price: ₹{menu.price * quantity}
          </Typography>
        </CardContent>
      </Card>

      {/* Buttons - Reset on the Left */}
      <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate("/Menu")}
        >
          Reset Order
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePlaceOrder}
        >
          Conform-Order
        </Button>
      </Box>
    </Box>
  );
};

export default OrderDetails;
