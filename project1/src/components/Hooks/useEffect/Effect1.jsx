import { useEffect } from "react";


const Effect1  = () =>{

    // useEffect (() => {
    //     console.log("Effect1 component mounted");
    // },[]);

    // no denpendency array, runs after every render
//   avoid this unless necessary reder




 useEffect (() => {
        console.log("Effect1 component mounted");
    },[]);


//    empty dependency array, runs only once when page loads
// very common for api calls





    return (
        <div>
            <h1>Effect1 Component</h1>
        </div>
    )
}

export default Effect1