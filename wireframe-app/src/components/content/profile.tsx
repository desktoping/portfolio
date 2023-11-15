import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { faker } from "@faker-js/faker";

const Profile = () => {
  return (
    <Card sx={{ maxWidth: 345, background: "transparent" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={faker.image.avatar()}
        title={faker.internet.userName()}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          User
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Profile;
