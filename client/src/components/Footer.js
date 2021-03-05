import React from 'react'
import { Button } from 'react-bootstrap'



function Footer() {
    return (
        <div className="fixed-bottom mb-3">
            <span>
                <Button variant="primary" href="/history">History</Button>
            ....Current Carbon Total.....Current Cost Total....
            <Button variant="primary" href="purchase">Purchase Offset</Button>
            </span>
        </div>
    )
}

export default Footer
