import React from 'react';

const Productmain = ({ data }) => {
    console.log(data);
    return (
        <div>
            <h2>Info</h2>
            {data.map(data => {
                console.log(data.model);
                return   data.model + data.price
               
            })}

        </div>
    );
}

export default Productmain;
