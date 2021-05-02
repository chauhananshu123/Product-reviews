import React from 'react';

const UrlPage = ()=>{
    return (
        <>
            <h1> Enter Shop Domain </h1>
            <form action="/shopify">
            <div>
                <input type="text" id="shop_name" name="shop" placeholder="demo.shopify.com" /> 
            </div>
            <div>
                <input type="submit" value="Submit" /> 
            </div>
            </form>
        </>
    )
}


export default UrlPage;