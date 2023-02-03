import './App.css';
import countries from "../countries.json"

import {Row, Col} from "react-bootstrap"
import MyNavbar from './Navbar';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails'
import Home from './Home';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
      <MyNavbar/>

      <Row>
        <Col xs={5}>
          <CountriesList countries={countries}/>          
        </Col>
        <Col>
          <Switch>
            <Route path="/:alpha3Code" render={(props) => <CountryDetails {...props} countries={countries} />}></Route>
            {/* <Route path="/:alpha3Code" render={(props) => <CountryDetails {...props} countries/>}></Route> */}
            <Route path="/" render={() => <Home/>}></Route>
            {/* <Route path="/" render={() => <CountryDetails/>}></Route> */}
          </Switch>
        </Col>
      </Row>

    </>

  );
}

export default App;
