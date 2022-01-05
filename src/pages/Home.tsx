import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import React, { useEffect } from "react";
import ExploreContainer from "../components/ExploreContainer";
import { AppCtx } from "../context/context";
import "./Home.css";

const Home: React.FC = () => {
    const appContext = React.useContext(AppCtx);

    useEffect(() => {
        console.log(appContext);
    }, [ appContext ]);

    const updateCurrentContext = () => {
        const obj = { ...appContext.currentContext };
        obj.author = "Michele!";
        appContext.updateContext(obj);
    };

    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton onClick={() => updateCurrentContext()}>Update Context!</IonButton>
                <ExploreContainer />
            </IonContent>
        </IonPage>
    );
};

export default Home;
