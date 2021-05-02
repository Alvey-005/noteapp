import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import './App.css';
import Note from './pages/note.component'
import Create from './pages/create.component';
import Layout from './components/layout.component';
import {createMuiTheme ,ThemeProvider} from '@material-ui/core'


const theme = createMuiTheme({
  typography:{
    fontFamily: 'Quicksand', 
    fontWeightLight:300,
    fontWeightRegular:400,
    fontWeightMedium:500,
    fontWeightBold:700


  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router> 
      <Layout>
      <Switch>
        <Route exact path = '/'>  
        <Note/>
        </Route> 
        <Route  path = '/create'> 
        <Create />
        </Route>
      </Switch>
      </Layout>
    </Router>
    </ThemeProvider> );
}

export default App;
