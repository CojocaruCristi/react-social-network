import "./App.css"
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import {Container, createMuiTheme, makeStyles, MuiThemeProvider} from "@material-ui/core";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const useStyles = makeStyles({
  AppContent: {
    backgroundColor: "#3C3C3C",
    minHeight: "92vh",
    padding: 30,
    color: "#F5F5F5"
  },
  App: {
    marginTop: 68
  },
})


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#087E8B"
    },
    secondary: {
      main: "#F5F5F5"
    },
    third: {
      main: "#FF5A5F"
    },
    text: {
      secondary: "#F5F5F5"
    }

  }
})

function App() {

  const classes = useStyles();

  return (

      <MuiThemeProvider theme={theme} >
        <div className={classes.App}>
          <Header />
          <Container className={classes.AppContent} maxWidth={"lg"} >
            <Route exact path={'/'} >
              <div>main</div>
            </Route>
            <Route  path={'/profile'} >
              <Profile/>
            </Route>
            <Route  path={'/dialogs'} >
              <Dialogs/>
            </Route>
          </Container>
        </div>
      </MuiThemeProvider>
  );
}

export default App;