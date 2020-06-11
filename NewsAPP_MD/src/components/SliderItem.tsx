import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonIcon,
} from "@ionic/react";
import "./SliderItem.css";
import { starOutline } from "ionicons/icons";
// interface ContainerProps {
//   name: string;
// }

const SliderItem: React.FC<any> = (props) => {
  return (
    <a href={props.articleData.link}>
    <IonCard className="newCont">
      <div className="ImgContainer">
        <div className="starIcon">
          <IonIcon icon={starOutline}></IonIcon>
        </div>
        <img src={props.articleData.img} />
      </div>
      <div className="CardTitle">
        <p>
       {props.articleData.title}
        </p>
      </div>
    </IonCard>
    </a>
  );
};

export default SliderItem;
