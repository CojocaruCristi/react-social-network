import "./App.css"
import Header from "./Components/Header/Header";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import {Container, createMuiTheme, makeStyles, MuiThemeProvider} from "@material-ui/core";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";
import {connect} from "react-redux";
import {initializeAppThunkCreator} from "./Redux/Reduсers/app-reducer";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {useEffect} from "react";

const useStyles = makeStyles({
  AppContent: {
    backgroundColor: "#3C3C3C",
    minHeight: "92vh",
    padding: 30,
    color: "#F5F5F5",
    marginTop: 68
  },
  loadingBackground: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%'
  }
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

  useEffect(() => {
      props.initializeAppThunkCreator();
  }, [])

  const classes = useStyles();
  return (

      <MuiThemeProvider theme={theme} >
        {
          !props.isAppInitialized ? (
        <Container className={classes.loadingBackground} maxWidth={"lg"}>
          <Backdrop
              sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={!props.isAppInitialized}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Container>

          )
              :
              (
        <Container className={classes.AppContent} maxWidth={"lg"} >
          <HeaderContainer />

            <Route exact path={'/'} >
              <div>Home</div>
            </Route>

            <Route  path={'/profile/:userId?'} >
              <ProfileContainer />
            </Route>

            <Route  path={'/dialogs'} >
              <Dialogs />
            </Route>

            <Route path={'/users'} >
              <UsersContainer />
            </Route>

            <Route path={'/login'} >
              <LoginPage />
            </Route>

          </Container>

              )
        }
      </MuiThemeProvider>
  );
}

const mapDispatchToProps = (state) => ({
  isAppInitialized: state.appData.isAppInitialized,
})

export default connect(mapDispatchToProps, {
  initializeAppThunkCreator
})(App);
