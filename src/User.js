import React from 'react';

const User = (props) => {
        const { data } = props;
        return ( < div > < h1 > USER COMPONENT < /h1 > <
            h4 > { data.name } < /h4>

            <
            /div> );



        }
        export default User;