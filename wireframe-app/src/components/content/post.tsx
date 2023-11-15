import { Box, Paper, Typography, styled } from "@mui/material";
import { PostItem } from "../../utils/generate-post";

interface IProps {
  data: PostItem[];
}

const StyledImage = styled("img")(`
  max-width: 50vw;
  width: 45vw;
`);

const PostComponent = ({ data }: IProps) => {
  return (
    <Box sx={{ mx: 2 }}>
      {data.map((i) => (
        <Paper key={i.id} sx={{ p: 2, my: 2, minHeight: 150 }}>
          <Box sx={{ mb: 2, display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{ height: 80, width: 80, maxHeight: 80, maxWidth: 80 }}
                component="img"
                src={i.avatar}
              />
            </Box>
            <Box sx={{ flex: 4 }}>
              <Typography>{i.author}</Typography>
              <Typography>{i.message}</Typography>
            </Box>
          </Box>
          <Box className="attachments">
            {i.attachments.map((k) => (
              <div key={k.id}>
                {k.type === "image" && <StyledImage src={k.content} />}
              </div>
            ))}
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default PostComponent;
