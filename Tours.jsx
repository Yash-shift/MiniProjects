import Card from './card';
import React from 'react';
function Tours({tours}, removeTour){
    return(
        <div>
            <div>
                <h2>Our Tours Plans</h2>
            </div>
            <div>
                {
                    tours.map((tour) =>{
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>



        </div>

    );

}

export default Tours;