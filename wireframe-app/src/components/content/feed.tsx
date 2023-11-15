import { Box, Paper, Typography } from "@mui/material";
import { FeedItem } from "../../utils/generate-feed";

interface IProps {
  data: FeedItem[];
}

const FeedComponent = ({ data }: IProps) => {
  return (
    <Paper sx={{ minHeight: 250 }}>
      {data.map((i) => (
        <Box key={i.value} sx={{ px: 2, display: "flex" }}>
          <Box
            component="img"
            sx={{
              my: 2,
              flex: 1,
              height: 40,
              width: 40,
              maxHeight: 40,
              maxWidth: 40,
            }}
            alt={i.value}
            src={i.imgSrc}
          />
          <Box sx={{ mx: 2, display: "flex", flex: 2, alignItems: "center" }}>
            <Typography>{i.value}</Typography>
          </Box>
        </Box>
      ))}
    </Paper>
  );
};

export default FeedComponent;
