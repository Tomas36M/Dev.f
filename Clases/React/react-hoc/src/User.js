import React from "react";

const User = ({user}) => {
    return(
        <div>
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <p>{user.address.street}</p>
            <p>{user.phone}</p>
            <p>{user.username}</p>
            <p>{user.website}</p>
            <span>{user.email}</span>
        </div>
    )
}

export default User