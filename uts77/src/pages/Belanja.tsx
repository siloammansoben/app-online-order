import React from 'react';
import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonList,
  IonItem,
} from '@ionic/react';

function Example() {
  const menuListStyle = {
    display: 'flex',        
    flexDirection: 'row',   
    alignItems: 'center',   
    justifyContent: 'space-between', 
  };

  const menuItemStyle = {
    flex: 1, 
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
        <IonSearchbar></IonSearchbar>
      </IonHeader>
      <IonContent>
        <IonList style={menuListStyle}>
          <IonItem style={menuItemStyle}>Sayuran</IonItem>
          <IonItem style={menuItemStyle}>Buah</IonItem>
          <IonItem style={menuItemStyle}>Daging</IonItem>
          <IonItem style={menuItemStyle}>Seafood</IonItem>
        </IonList>
        <IonCard>
          <img
            style={{
              width: '97%',
              maxHeight: '300px',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            alt="Image 1"
            src="sawi.jpeg"
          />
        </IonCard>
        <IonCard>
          <img
            style={{
              width: '97%',
              maxHeight: '300px',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            alt="Image 2"
            src="bawang.jpeg"
          />
        </IonCard>
        <IonCard>
          <img
            style={{
              width: '97%',
              maxHeight: '300px',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            alt="Image 3"
            src="tomat.jpeg"
            />
        </IonCard>
        <IonCard>
          <img
            style={{
              width: '97%',
              maxHeight: '300px',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            alt="Image 4"
            src="terong.jpeg"
          />
          </IonCard>
          <IonCard>
            <img
            style={{
                width: '97%',
                maxHeight: '300px',
                objectFit: 'cover',
                objectPosition: 'center',
            }}
            alt="Image 5"
            src="sawi2.jpeg"
            />
            </IonCard>
          <IonCard>
            <img
            style={{
                width: '97%',
                maxHeight: '300px',
                objectFit: 'cover',
                objectPosition: 'center',
            }}
            alt="Image 6"
            src=" buncis.jpeg"
            />
            </IonCard>
          <IonCard>
            <img
            style={{
                width: '97%',
                maxHeight: '300px',
                objectFit: 'cover',
                objectPosition: 'center',
            }}
            alt="Image 7"
            src=" kangkung 2.jpeg"
            />
            </IonCard>
          <IonCard>
            <img
            style={{
                width: '97%',
                maxHeight: '300px',
                objectFit: 'cover',
                objectPosition: 'center',
            }}
            alt="Tomat"
            src=" Cabai.jpeg"
            />
            <IonCard>
          </IonCard>
            <img
            style={{
                width: '97%',
                maxHeight: '300px',
                objectFit: 'cover',
                objectPosition: 'center',
            }}
            alt="delima"
            src="delima.jpeg"
            />
            <IonCard>
          </IonCard>
             <img
             style={{
                width: '97%',
                maxHeight: '300px',
                objectFit: 'cover',
                objectPosition: 'center',
             }}
             alt="Apel"
             src="Apel.jpeg"
             />
             <IonCard>
            </IonCard>
            <img
            style={{
                width: '97%',
                maxHeight: '300px',
                objectFit: 'cover',
                objectPosition: 'center',
            }}
            alt="es buah"
            src="es buah.jpeg"
            />
            <IonCard>
         </IonCard>
         <img
         style={{
            width: '97%',
            maxHeight: '300px',
            objectFit: 'cover',
            objectPosition: 'center',
         }}
         alt="es buah"
         src="es buah.jpeg"
         />
         <IonCard>
      </IonCard>
      <img
      style={{
        width: '97%',
        maxHeight: '300px',
        objectFit: 'cover',
        objectPosition: 'center',
      }}
      alt="cow"
      src="cow.jpeg"
      />
      <IonCard>
     </IonCard>
     <img
     style={{
        width: '97%',
        maxBlockSize: '300px',
        objectFit: 'cover',
        objectPosition: 'center',
     }}
     alt="sapi"
     src="sapi.jpeg"
     />
     <IonCard>
     </IonCard>
     <img
     style={{
        width: '97',
        maxHeight: '300',
        objectFit: 'cover',
        objectPosition: 'center',
     }}
     alt=" "
     src=""
     />  
            
        </IonCard>
      </IonContent>
    </IonPage>
  );
}

export default Example;



