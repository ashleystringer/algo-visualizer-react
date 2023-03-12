import React, { useEffect } from 'react'
import Square from './Square';

export default function Graph({width, height, algo}) {

    useEffect(() => {
        console.log(`width: ${width}, height: ${height}`);
    }, []);

    /*
        ISSUE - How do I allow the algorithm classes to use this component?

    */

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
