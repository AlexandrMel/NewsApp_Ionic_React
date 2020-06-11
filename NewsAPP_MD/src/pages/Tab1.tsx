import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonSearchbar,
  IonIcon,
} from "@ionic/react";
import "./Tab1.css";
import SliderRow from "../components/SliderRow";
import { bookOutline, heartOutline } from "ionicons/icons";
import { dataPoliticArr } from "./data";

const Tab1: React.FC = () => {
  const [favoriteSource, SetFavoriteSource] = useState<any>("All News");
  const [allDataArr, SetAllDataArr] = useState<any>([]);
  const [categoryArr, SetCategoryArr] = useState<any>(dataPoliticArr);
  const [categoryNews, SetCategoryNews] = useState<any>("politic");
  const [favoriteFromStorage, SetFavoriteFromStorage] = useState<any>([]);
  let urlData =
    "https://whispering-wave-02775.herokuapp.com/news/" + categoryNews;
  let urlAllData = "https://whispering-wave-02775.herokuapp.com/news/toate";
  const categoryHandler = (event: any) => {
    SetCategoryNews(event.detail.value);
  };
  const allPublishers = ['NewsMaker', 'JurnalTV', 'ZDG', 'Ziarul National', 'TV8']
  const favoriteSourceHandler = (event: any) => {
    SetFavoriteSource(event.detail.value)
  };
  useEffect(() => {
    fetch(urlData)
      .then((response) => response.json())

      .then((newArr) => {
        SetCategoryArr(newArr);
      });
  }, []);
  useEffect(() => {
    console.log(localStorage)
    fetch(urlAllData)
      .then((response) => response.json())
      .then((newArr) => {
        SetAllDataArr(newArr);
      });
    }, []);
    useEffect(() => {
      SetCategoryArr(
        allDataArr.filter((el: any) => el.category === categoryNews)
        );
      }, [categoryNews]);
      useEffect(() => {
        SetFavoriteFromStorage(Object.keys(localStorage).filter((el:any) => allPublishers.includes(el)))
  }, [favoriteSource]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="tertiary" className="ion-text-center">
          <IonTitle>Toate Stirile din Moldova</IonTitle>
        </IonToolbar>
        {/* <IonSearchbar
          autocomplete="on"
          showCancelButton="focus"
          placeholder="Cauta stirea"
        ></IonSearchbar>{" "} */}
        <IonToolbar>
          <IonSegment
            onIonChange={(e) => favoriteSourceHandler(e)}
            className="mainSegment"
            value={favoriteSource}
          >
            <IonSegmentButton value="All News">
              Toate Sursele <IonIcon icon={bookOutline}></IonIcon>{" "}
            </IonSegmentButton>
            <IonSegmentButton value="Favorites">
              Sursele Preferate <IonIcon icon={heartOutline}></IonIcon>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
        <IonSegment
          className="categoriesSegment"
          color="dark"
          value={categoryNews}
          mode="ios"
          onIonChange={(e) => categoryHandler(e)}
        >
          <IonSegmentButton value="politic">Politic</IonSegmentButton>
          <IonSegmentButton value="justitie">Justitie</IonSegmentButton>
          <IonSegmentButton value="economic">Economic</IonSegmentButton>
          <IonSegmentButton value="social">Social</IonSegmentButton>
          <IonSegmentButton value="sport">Sport</IonSegmentButton>
        </IonSegment>
      </IonHeader>
      <IonContent className="SliderContent">
      {favoriteSource === "All News" ? categoryArr.map((el: any) => {
          return <SliderRow dataObj={el} />;
        }) : categoryArr.filter((x:any) => favoriteFromStorage.includes(x.publisher)).map((el: any) => {
          return <SliderRow dataObj={el} />;
        })}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
