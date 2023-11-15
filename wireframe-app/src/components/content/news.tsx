import { faker } from "@faker-js/faker";
import { Box, Divider, Paper, Typography } from "@mui/material";

const NewsComponent = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h5">News</Typography>
      <Divider />
      <Box sx={{ my: 2 }}>
        <Box
          sx={{ maxHeight: 150, maxWidth: 150 }}
          component="img"
          src="https://loremflickr.com/640/480?lock=8836685563428864"
        />
        <Box>
          <Typography>{faker.lorem.paragraphs(3)}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default NewsComponent;
