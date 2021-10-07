import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlayerDetails = () => {
    const { id } = useParams()
    const [player, setPlayer] = useState({})
    const { strPlayer, strThumb, strDescriptionEN, strNationality } = player
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupplayer.php?id=${id}`)
            .then(res => res.json())
            .then(data => setPlayer(data.players[0]))
    }, [])
    return (
        <div>
            <div className="card p-5">
                <div className="row g-3 d-flex">
                    <div className="col-md-4">
                        <img src={strThumb} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Name: {strPlayer}</h5>
                            <h6 className="card-title">Country: {strNationality}</h6>
                            <p className="card-text">{strDescriptionEN}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerDetails;