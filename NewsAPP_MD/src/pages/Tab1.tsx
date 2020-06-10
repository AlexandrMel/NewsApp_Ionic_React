import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonSearchbar,
  IonRow,
  IonCol,
  IonGrid,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary" className="ion-text-center">
          <IonTitle>Toate Stirile din Moldova</IonTitle>
        </IonToolbar>
        <IonSearchbar></IonSearchbar>
        <IonToolbar>
          <IonSegment value="All News">
            <IonSegmentButton value="All News">Toate Sursele</IonSegmentButton>
            <IonSegmentButton value="Favorites">
              Sursele Preferate
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
        <IonSegment color="tertiary" value="politic" mode="ios">
          <IonSegmentButton value="politic">Politic</IonSegmentButton>
          <IonSegmentButton value="justitie">Justitie</IonSegmentButton>
          <IonSegmentButton value="economic">Economic</IonSegmentButton>
          <IonSegmentButton value="social">Social</IonSegmentButton>
          <IonSegmentButton value="sport">Sport</IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
