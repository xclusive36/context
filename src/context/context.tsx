import React, { useState } from "react";

interface ContextInterface {
    title: string;
    author: string;
    url: string;
}

const contextObj: ContextInterface = {
    title: "React Context example in a Typescript App",
    author: "Joshua",
    url: "http://www.litestep.com",
};

const defaultContextArray: ContextInterface[] = [contextObj];

export const AppContext = React.createContext({
    ContextArray: defaultContextArray,
    setContextArray: (data: ContextInterface[]) => {},
});

export const AppProvider = ({ children }: any) => {
    const [ContextArray, setContextArray] = useState(defaultContextArray);

    const value = {
        ContextArray,
        setContextArray,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
