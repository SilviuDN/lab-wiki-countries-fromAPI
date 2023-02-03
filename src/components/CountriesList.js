import { Link } from 'react-router-dom';
import {ListGroup} from 'react-bootstrap'

const CountriesList = ({ countries }) => ( 
    <>
        <ListGroup style={{ maxHeight: '90vh', overflow: 'scroll'}}>
            {countries &&
            countries.map( country => 
                <ListGroup.Item key = {country.alpha3Code}>
                    <Link to = {country.alpha3Code} style = {{textDecoration: 'none', color: 'inherit'}}>
                        <span style={{ fontSize: '0.7em' }}>{country.alpha2Code} </span> 
                        <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                            style={{ height: '1em'}} alt="country's flag"></img>
                        <span>  {country.name.common}</span> 
                        
                    </Link>                    
                </ListGroup.Item>  

            )
            }
        </ListGroup> 
    </>

);

export default CountriesList;