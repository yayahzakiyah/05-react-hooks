import { createContext, useContext } from "react";

const DepsContext = createContext({})

//karena bermain dengan hook dengan useContext
export function useDeps() {
    return useContext(DepsContext)
}

export function DepsProvider(children, services) {
    return(
        <DepsContext.Provider value={services}>
            {children}
        </DepsContext.Provider>
    )
}