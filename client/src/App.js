import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import memories from "./images/memories.png";
import { Grow, Grid } from "@mui/material";
import Form from "./components/form/Form";
import Posts from "./components/posts/Posts";

import styled from "@emotion/styled";

function App() {
  const StyledAppBar = styled(AppBar)`
    && {
      border-radius: 15px;
      margin: 30px 0;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  `;

  return (
    <Container maxWidth="lg">
      <StyledAppBar position="static" color="inherit">
        <Typography
          variant="h6"
          color={"rgba(0,183,255, 1)"}
          sx={{ marginRight: "15px" }}
        >
          Memories
        </Typography>
        <img src={memories} alt="memories" height={60} />
      </StyledAppBar>
      <Grow in>
        <Container>
          <Grid
            container
            spacing={4}
            justifyContent={"space-between"}
            alignItems={"stretch"}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
