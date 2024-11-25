import React from "react";
import { useOrderContext } from "./OrderContext";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Orders = () => {
  const { orders } = useOrderContext(); // Get orders from context
  const navigate = useNavigate(); // Hook to navigate to other pages

  // Handle Order Placement and navigate back to menu
  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    // Navigate back to the menu page after placing the order
    navigate("/menu"); // This assumes your menu page is at /menu
  };

  return (
    <Box sx={{ textAlign: "center", marginTop: "50px", padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Orders
      </Typography>
      {orders.length === 0 ? (
        <Typography variant="body1">No orders placed yet.</Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
          }}
        >
          {orders.map((order, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: "300px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                height="150"
                image={order.image}
                alt={order.name}
              />
              <CardContent>
                <Typography variant="h6">{order.name}</Typography>
                <Typography variant="body2">
                  Total Price: ₹{order.price * order.quantity}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}

      {/* Place Order Button */}
      {orders.length > 0 && (
        <Button
          variant="contained"
          color="primary"
          onClick={handlePlaceOrder}
          sx={{ mt: 4 }}
        >
          Place Your Order
        </Button>
      )}
    </Box>
  );
};

export default Orders;
