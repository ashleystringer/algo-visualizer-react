import React, { useContext } from 'react'

const AlgoContext = React.createContext();

export function useAlgo(){
    return useContext(AlgoContext);
}

export function AlgoProvider({children}) {

    const value = {

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
