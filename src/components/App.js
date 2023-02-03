import './App.css';
import countries from "../countries.json"

import {Row, Col} from "react-bootstrap"
import MyNavbar from './Navbar';
import CountriesList from './CountriesList';
import CountryDetails from './CountryDetails'
import Home from './Home';
import {Route, Switch} from 'react-router-dom'
import { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      countries: undefined
    }
  }

    componentDidMount = () => {
      axios
      .get('http://api.countrylayer.com/v2/all?access_key=7d94f1c7bf512611fef304a282675a8b')
      .then((response) => {
        console.log(response.data);
        this.setState({
          countries: [...response.data],
        });
      })
      .catch((err) => console.error(err));
    }

    render = () => (      
        this.state.countries
        ?
        <>
        <MyNavbar/>
        <Row>
          <Col xs={5}>
            <CountriesList countries={this.state.countries}/>          
          </Col>
          <Col>
            <Switch>
              <Route path="/:alpha3Code" render={(props) => <CountryDetails {...props} countries={this.state.countries} />}></Route>
              <Route path="/" render={() => <Home/>}></Route>
            </Switch>
          </Col>
        </Row>
        </>
        :
        <h2>Waiting for data to load...</h2>
    )
  }

// function App() {
//   return (
//     <>
//       <MyNavbar/>

//       <Row>
//         <Col xs={5}>
//           <CountriesList countries={countries}/>          
//         </Col>
//         <Col>
//           <Switch>
//             <Route path="/:alpha3Code" render={(props) => <CountryDetails {...props} countries={countries} />}></Route>
//             {/* <Route path="/:alpha3Code" render={(props) => <CountryDetails {...props} countries/>}></Route> */}
//             <Route path="/" render={() => <Home/>}></Route>
//             {/* <Route path="/" render={() => <CountryDetails/>}></Route> */}
//           </Switch>
//         </Col>
//       </Row>

//     </>

//   );
// }

export default App;
