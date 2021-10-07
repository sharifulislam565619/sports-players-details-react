import React, { useEffect, useState } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    const [players, setPlayers] = useState([])
    const newPlayers = players.slice(0, 8)
    const [searchResult, setSearchResult] = useState("")
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=Danny%20Welbeckhttps://www.thesportsdb.com/api/v1/json/{APIKEY}/searchplayers.php?t={TeamName}&p=${searchResult}`)
            .then(res => res.json())
            .then(data => setPlayers(data.player))
    }, [searchResult])

    const handleSearch = (e) => {
        setSearchResult(e.target.value);
    }
    return (
        <div className="py-3">
            <InputGroup className="mb-3 w-50 mx-auto">
                <FormControl onChange={handleSearch}
                    placeholder="Search you favorite player"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button className="btn btn-primary">Search</Button>
            </InputGroup>
            <div className="row">
                {
                    newPlayers?.map((player) => (

                        <div className="col-md-3 g-4">
                            <div className="card">
                                <div>
                                    <img className="w-50" src={player.strThumb} alt="" />
                                </div>
                                <h3>Name: {player.strPlayer}</h3>
                                <p>Country: {player.strNationality}</p>
                                <Link to={`/details/${player.idPlayer}`} ><button className="btn btn-primary">Details</button></Link>
                            </div>
                        </div>


                    ))
                }
            </div>
        </div>
    );
};

export default Home;