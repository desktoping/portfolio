import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FeedComponent from "./components/content/feed";
import PostComponent from "./components/content/post";
import PostFormComponent from "./components/content/post-form";
import ProfileComponent from "./components/content/profile";
import Header from "./components/header";
import { generateFeed } from "./utils/generate-feed";
import { generatePost } from "./utils/generate-post";
import NotificationComponent from "./components/content/notification";
import NewsComponent from "./components/content/news";

const App = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Header />
        <Box sx={{ my: 4, display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ flex: 1, backgroundColor: "#fcfcfc" }}>
            <Box sx={{ m: 4 }}>
              <ProfileComponent />
            </Box>
            <Box sx={{ m: 2 }}>
              <FeedComponent data={generateFeed(3)} />
            </Box>
            <Box sx={{ m: 2 }}>
              <FeedComponent data={generateFeed(3)} />
            </Box>
          </Box>
          <Box sx={{ flex: 3, backgroundColor: "#fcfcfc" }}>
            <PostFormComponent />
            <PostComponent data={generatePost(5)} />
          </Box>
          <Box sx={{ flex: 1, backgroundColor: "#fcfcfc" }}>
            <Box sx={{ mb: 2 }}>
              <NotificationComponent />
            </Box>
            <NewsComponent />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default App;
