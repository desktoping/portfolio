import { faker } from "@faker-js/faker";
import { AccountCircle } from "@mui/icons-material";
import { Box, Divider, Paper, Typography } from "@mui/material";

const PostFormComponent = () => {
  return (
    <Paper sx={{ mb: 2, mx: 2, px: 2, minHeight: 200 }}>
      <Box sx={{ display: "flex", p: 4, justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <AccountCircle />
          <Typography sx={{ pl: 2 }}>{faker.lorem.word()}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <AccountCircle />
          <Typography sx={{ pl: 2 }}>{faker.lorem.words(2)}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <AccountCircle />
          <Typography sx={{ pl: 2 }}>{faker.lorem.word()}</Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography>{faker.lorem.sentences(3)}</Typography>
      </Box>
    </Paper>
  );
};

export default PostFormComponent;
