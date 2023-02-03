import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";


const CountryDetails = ({match, countries}) => {

    const alpha3Code = match.params.alpha3Code 
    const country = countries.find( el => el.alpha3Code === alpha3Code )
    const alpha2Code = country.alpha2Code.toLowerCase()
    const linkToFlagPic = `https://flagpedia.net/data/flags/icon/72x54/${alpha2Code}.png`
    // const borders = [...country.borders]

    return (
        <>
        <h1>Unfortunately, the access to the API's neighbours list has been restricted for free accounts.</h1>
        <Card style={{ width: '70%', marginLeft: '15%', marginTop: '3em' }}>
            <Card.Img variant="top" src={linkToFlagPic} />
            <Card.Body>
                <Card.Title>
                    <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                        style={{ height: '1em'}} alt="country's flag"></img>
                        <span>  {country.name}  </span> 
                </Card.Title>
                <Card.Text>
                {country.altSpellings.length > 0 ? country.altSpellings[1] : ''}
                </Card.Text>
            </Card.Body>
            {/* <ListGroup className="list-group-flush">
                {borders.length > 0 &&
                    <>
                    {
                        borders.map( el => 
                            <ListGroup.Item key={el}>
                                <Link to={`/${el}`} style = {{textDecoration: 'none', color: 'inherit'}}>{el}</Link>
                            </ListGroup.Item>
                        )
                    }
                    
                    </>
                }
            </ListGroup> */}
            <Card.Body>
                <Card.Link href="#">Capital: {country.capital}</Card.Link>
                <Card.Link href="#">Region: {country.region}</Card.Link>
            </Card.Body>
        </Card>
        </>
    );
};

export default CountryDetails;