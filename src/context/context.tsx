import React, { useState } from "react";

interface AppContextInterface {
    title: string;
    author: string;
    url: string;
}

const appContext: AppContextInterface = {
    title: "Using React Context in a Typescript App",
    author: "Joshua",
    url: "http://www.example.com",
  };

export const AppCtx = React.createContext({
    currentContext: appContext,
    updateContext: (newContextData: any) => {},
});

export const AppContext = (props: any) => {
    const [currentContext, setCurrentContext] = useState(appContext);

    const updateContext = (newContextData: any) => {
        setCurrentContext(newContextData);
    };

    return (
        <AppCtx.Provider value={{ currentContext, updateContext }}>
            {props.children}
        </AppCtx.Provider>
    );
};

export default AppContext;
