import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage/MainPage'
import SuccessPage from './Pages/SuccessPage/SuccessPage'
function App() {
      return (
            <BrowserRouter>
                  <Switch>
                        <Route path="/" exact component={MainPage}/>
                        <Route path="/home" exact component={SuccessPage}/>
                  </Switch>
            </BrowserRouter>
      )
}

export default App;
