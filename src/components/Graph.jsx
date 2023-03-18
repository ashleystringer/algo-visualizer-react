import React, { useState, useEffect } from 'react'
import { useAlgo } from '../contexts/AlgoProvider';
import Square from './Square';

export default function Graph({widthVal, heightVal}) {

    //const { output } = useAlgo();
    const [width, setWidth] = useState([]);
    const [height, setHeight] = useState([]);
    const [graphArray, setGraphArray] = useState();
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    useEffect(() => {
        console.log(`width: ${width}, height: ${height}`);
    }, []);

    useEffect(() => {
        //console.log(`width and height altered`);

        //console.log(`widthVal: ${widthVal}, heightVal: ${heightVal}`);

        setWidth(widthVal);
        setHeight(heightVal);

        //console.log(`width: ${width}, height: ${height}`); //Note: This doesn't change until next render.

        setGraphArray(createArray(widthVal, heightVal));
        //console.log(graphArray);
        //console.table(createArray(widthVal, heightVal));
        const testArray = createArray(widthVal, heightVal);

        if(graphArray){
            graphArray.forEach(array => {
                //console.log(array);
                array.forEach(element => {
                    console.log(element);
                });
            });
        }
    }, [widthVal, heightVal]);

    /*useEffect(() => {
        setGraphArray(createArray(width, height));
    }, [output]);*/


    function createArray(widthVal, heightVal){
        
        //POSSIBLY REVISE THIS LATER

        //Use output from useAlgo to revise this

        if(widthVal && heightVal){
            let arrayW = new Array(parseInt(widthVal));

            for(let i = 0; i < arrayW.length; i++){
                let arrayH = new Array(parseInt(heightVal));
                arrayH.fill(0);
                arrayW[i] = arrayH;
            }
            //console.log(arrayW);

            return arrayW;
        }

        return[];

    }

    

    /*
        ISSUE - How do I dynamically generate a graph using the graphArray state? 
    */

    /*
        ISSUE - How do I allow the algorithm classes to use this component?

    */

    /*
        let graph;
        //create a graph of [width, height]
        //iterate through the array
        //dynamically generate Squares in this Graph component
        //probably use a hook like useMemo or useCallback to limit re-rendering this

        {
            graphArray.map(arr => {
                return arr.map(el => {
                    return(
                        <Square/>
                    );
                });
            });
        }
    */

    return (
        <div>
            {
                numbers.map(number => {
                    return(<div>{number}</div>)
                })
            }

            <br/>

            <div>
            </div>
        </div>
    )
}
