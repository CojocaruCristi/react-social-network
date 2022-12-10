import "./App.css"
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import {Container, createMuiTheme, makeStyles, MuiThemeProvider} from "@material-ui/core";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";

const useStyles = makeStyles({
  AppContent: {
    backgroundColor: "#3C3C3C",
    minHeight: "92vh",
    padding: 30,
    color: "#F5F5F5",
    marginTop: 68
  },
})


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#087E8B",
      contrastText: "#F1FAEE"
    },
    secondary: {
      main: "#E63946",
      contrastText: "#F5F5F5"
    },
    text: {
      primary: "#F5F5F5",
      secondary: "#F5F5F5"
    },
  },

})

function App(props) {

  const classes = useStyles();

  return (

      <MuiThemeProvider theme={theme} >
          <Container className={classes.AppContent} maxWidth={"lg"} >
            <Header />

            <Route exact path={'/'} >
              <div>Home</div>
            </Route>

            <Route  path={'/profile'} >
              <Profile />
            </Route>

            <Route  path={'/dialogs'} >
              <Dialogs />
            </Route>

            <Route path={'/users'} >
              <UsersContainer />
            </Route>

          </Container>
      </MuiThemeProvider>
  );
}

export default App;