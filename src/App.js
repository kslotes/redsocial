import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage/MainPage'
import SuccessPage from './Pages/SuccessPage/SuccessPage'
import HomePage from './Pages/HomePage/HomePage'
import TramitesPage from './Pages/TramitesPage/TramitesPage'
function App() {
      return (
            <BrowserRouter>
                  <Switch>
                        <Route path="/success" exact component={SuccessPage}/>
                        <Route path="/home" exact component={HomePage}/>
                        <Route path="/tramites" exact component={TramitesPage}/>
                        <Route path="/" component={MainPage}/>
                  </Switch>
            </BrowserRouter>
      )
}
export default App;
