import React from 'react'
import { Link } from "react-router-dom";

export default function Users() {
    const name = "Apriadi";
    return (
        <div>
            <p>
            <Link to={`/users/${name}`}>Ini adalah halaman user</Link>
            </p>
        </div>
    )
}
