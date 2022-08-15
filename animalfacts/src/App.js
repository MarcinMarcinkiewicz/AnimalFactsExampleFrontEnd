import NavBar from './Components/NavBar'
import { createTheme, ThemeProvider} from '@mui/material/styles'

//Colour palate = turquois: #40E0D0, medium aquamarine: #68E7B0, light green: #90EE90, Cedar Chest: #DB504A

const theme = createTheme({
  palette: {
    primary: {
      main: '#68E7B0'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar/>
        <h1>Hello World</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
