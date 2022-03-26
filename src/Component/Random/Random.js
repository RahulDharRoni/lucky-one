import React from 'react';

const Random = ({ random }) => {
    // console.log(random)
    // console.log(addRandom)
    // random.map(ran => console.log(ran))

    return (
        <div>
            {/* <p>{random.name.name}</p> */}
            <p>{random}</p>
        </div>
    );
};

export default Random;