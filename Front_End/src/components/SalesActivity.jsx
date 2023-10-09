import React from "react";
import 'react-bootstrap'

function SalesActivity(){
    return (
        <div>
            <h5>Sales Activity</h5>
            <div class="cards mb-5">
    <div class="card red">
        <p class="tip">233</p>
        <h6 class="second-text">Packed</h6>
    </div>
    <div class="card blue">
        <p class="tip">123</p>
        <h6 class="second-text">Shipped</h6>
    </div>
    <div class="card green">
        <p class="tip">1231</p>
        <h6 class="second-text">Total Products</h6>
    </div>
</div>
        </div>
    )
}

export default SalesActivity