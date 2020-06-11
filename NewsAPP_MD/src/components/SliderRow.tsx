import React, { useState, useEffect } from "react";
import {
  IonSlides,
  IonSlide,
  IonContent,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonCardHeader,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonIcon,
  IonCheckbox,
} from "@ionic/react";
import "./SliderRow.css";
import SliderItem from "./SliderItem";
import { heartCircleOutline, heartOutline } from "ionicons/icons";

const Slider: React.FC<any> = (props) => {
useEffect(() => {if(localStorage.getItem(props.dataObj.publisher)){SetFavColor(localStorage.getItem(props.dataObj.publisher))}}, [])
  const [favColor, SetFavColor] = useState<any>(false);
  const favoriteColorHnadler = (x:any) => {
    SetFavColor(!favColor)
localStorage.getItem(x) ? localStorage.removeItem(x) : localStorage.setItem(x, favColor)
  };
  const favSourcesStorage = localStorage.getItem('favoriteSources')
  return (
    <div className="SliderRow">
      <div className="MainContainer">
        <div className="SliderLabel">
          <div className="leftLabel">
            <IonIcon 
            onClick={(e: any) => favoriteColorHnadler(props.dataObj.publisher)}
              color={favColor === false ? "dark" : "warning"}
              size="large"
              icon={heartOutline}
            ></IonIcon>
            {props.dataObj.publisher}
          </div>
          <div className="rightLabel">
            <p>Compara</p>
            <IonCheckbox color="tertiary" mode="ios" />
          </div>
        </div>
        <IonContent className="mainContent" scrollX={true}>
          {props.dataObj.publishedNews.map((el: any) => (
            <SliderItem articleData={el} />
          ))}
        </IonContent>
      </div>
    </div>
  );
};
export default Slider;
