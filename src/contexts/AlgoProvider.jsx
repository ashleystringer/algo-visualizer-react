import React, { useState, useContext } from 'react'

const AlgoContext = React.createContext();

export function useAlgo(){
    return useContext(AlgoContext);
}

export function AlgoProvider({children}) {

    const [selectedAlgo, setSelectedAlgo] = useState();
    const [speed, setSpeed] = useState(10);
    const [output, setOutput] = useState();

    function chooseAlgo(algo){
        setSelectedAlgo(algo);
    }

    function selectPace(speed){
        setSpeed(speed);
    }

    function execute(){
        setInterval(() => {
            //execute algo
            //setOutput();
        }, speed);
    }


    const value = {
        setSelectedAlgo,
        chooseAlgo,
        selectPace,
        execute,
        output
    };

    /*
    - have a selected algorithm
    - allow user to select a different algorithm
    - possibly contains the output of the algorithm
        -- this output can be displayed in certain intervals of time 
            as chosen by the user
    */

    return (
        <AlgoContext.Provider value={value}>
            {children}
        </AlgoContext.Provider>
    )
}
