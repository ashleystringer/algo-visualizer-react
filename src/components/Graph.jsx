import React, { useEffect } from 'react'
import Square from './Square';

export default function Graph({width, height}) {

    useEffect(() => {
        console.log(`width: ${width}, height: ${height}`);
    }, []);

    /*
        let graph;
        //create a graph of [width, height]
        //iterate through the array
        //dynamically generate Squares in this Graph component
        //probably use a hook like useMemo or useCallback to limit re-rendering this
    */

    return (
        <div>
            
        </div>
    )
}
