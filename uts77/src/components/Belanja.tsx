import React from 'react';
import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Sayuran from './Sayuran'; // Impor komponen kategori Anda di sini
import Buah from './Buah';
import Daging from './Daging';
import Seafood from './Seafood';

function Belanja() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Belanja</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <Router>
          <Switch>
            <Route path="/sayuran" component={Sayuran} />
            <Route path="/buah" component={Buah} />
            <Route path="/daging" component={Daging} />
            <Route path="/seafood" component={Seafood} />
            <Route exact path="/">
              {/* Konten utama Anda */}
              <IonCard>
                {/* Konten Anda di sini */}
              </IonCard>
            </Route>
          </Switch>
        </Router>
      </IonContent>
    </IonPage>
  );
}

export default Belanja;
