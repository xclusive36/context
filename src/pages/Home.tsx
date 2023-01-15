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
import { AppContext } from "../context/context";
import "./Home.css";

const Home: React.FC = () => {
    const { ContextArray, setContextArray } = React.useContext(AppContext); // Enable context, and destructure the values

    useEffect(() => {
        // When ContextArray changes, log it to the console
        console.log(ContextArray);
    }, [ContextArray]);

    const updateCurrentContext = () => {
        const mutableContextArray = [...ContextArray]; // Create a mutable copy of ContextArray
        mutableContextArray[0].author = "Michele!"; // Update the author of the first item in the array
        setContextArray(mutableContextArray); // Update ContextArray with the updated array
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Context Example</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Context Example</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton onClick={updateCurrentContext}>
                    Update Context!
                </IonButton>
                <ExploreContainer />
            </IonContent>
        </IonPage>
    );
};

export default Home;
