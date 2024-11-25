import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Rating,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useOrderContext } from "./OrderContext";

const Overview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const menu = location.state; // Retrieve passed menu item
  const { addOrder } = useOrderContext(); // Use context to add orders
  const [quantity, setQuantity] = useState(1);

  if (!menu) {
    navigate("/menu");
    return null;
  }

  const handleAdd = () => setQuantity((prev) => prev + 1);
  const handleRemove = () => quantity > 1 && setQuantity((prev) => prev - 1);

  const handleConfirmOrder = () => {
    addOrder({ ...menu, quantity }); // Save order in context
    navigate("/orders"); // Navigate to Orders page
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 4, gap: 3, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Card sx={{ maxWidth: "600px", width: "100%" }}>
        <CardMedia component="img" height="400" image={menu.image} alt={menu.name} sx={{ objectFit: "cover" }} />
        <CardContent>
          <Typography variant="h4" gutterBottom>{menu.name}</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>{menu.description}</Typography>
          <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>Price: ₹{menu.price * quantity}</Typography>
          <Box sx={{ mt: 2, display: "flex", alignItems: "center", gap: 2 }}>
            <Typography variant="body1">Quantity:</Typography>
            <IconButton onClick={handleRemove} color="error"><RemoveIcon /></IconButton>
            <Typography variant="h6">{quantity}</Typography>
            <IconButton onClick={handleAdd} color="primary"><AddIcon /></IconButton>
          </Box>
          <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
            <Typography variant="body1" sx={{ mr: 1 }}>Rating:</Typography>
            <Rating value={menu.rating || 4.5} readOnly />
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" color="primary" onClick={() => navigate("/menu")}>Back to Menu</Button>
        <Button variant="outlined" color="secondary" onClick={handleConfirmOrder}>ORDER-NOW</Button>
      </Box>
    </Box>
  );
};

export default Overview;
