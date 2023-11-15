import { Box, Divider, Paper, Typography } from "@mui/material";

const NotificationComponent = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5">Notification</Typography>
      <Divider />
      <Box sx={{ my: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ flex: 1 }}>
            <img
              style={{ maxWidth: 50, maxHeight: 50 }}
              src="https://loremflickr.com/640/480?lock=8836685563428864"
            />
          </div>
          <Box sx={{ flex: 3 }}>
            <Typography>Lorem ipsum</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ flex: 1 }}>
            <img
              style={{ maxWidth: 50, maxHeight: 50 }}
              src="https://loremflickr.com/640/480?lock=8503325259464704"
            />
          </div>
          <Box sx={{ flex: 3 }}>
            <Typography>Lorem ipsum</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ flex: 1 }}>
            <img
              style={{ maxWidth: 50, maxHeight: 50 }}
              src="https://loremflickr.com/640/480?lock=8836685563428824"
            />
          </div>
          <Box sx={{ flex: 3 }}>
            <Typography>Lorem ipsum</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ flex: 1 }}>
            <img
              style={{ maxWidth: 50, maxHeight: 50 }}
              src="https://loremflickr.com/640/480?lock=8836682563428861"
            />
          </div>
          <Box sx={{ flex: 3 }}>
            <Typography>Lorem ipsum</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default NotificationComponent;
