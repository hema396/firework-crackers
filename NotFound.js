import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => (
<div style={{ textAlign: 'center', padding: '40px' }}>
<h1 style={{ fontSize: '72px', marginBottom: '24px' }}>

    


404 — Page Not Found


Sorry, we couldn't find the page you're looking for.



Go back to Home

</h1>
<Link to="/" className="button">Go back to Home</Link>
</div>



);

export default NotFound;