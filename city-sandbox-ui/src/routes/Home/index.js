import {styled} from '@mui/system';
import Grid from '@mui/material/Grid';
import ButtonLink from '../../components/Router/ButtonLink';
import paths from '../../constants/paths';

const CenteredGrid = styled(Grid)`
  min-height: 100vh;
  text-align: center;
`;

const Home = () => {
  return (
    <div>
      <CenteredGrid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <h1>City Sandbox</h1>
          <ButtonLink to={paths.editor} variant="contained" color="primary">
            New Project
          </ButtonLink>
        </Grid>
      </CenteredGrid>
    </div>
  );
};

export default Home;
