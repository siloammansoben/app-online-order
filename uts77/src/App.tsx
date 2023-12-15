import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Belanja from './pages/Belanja';
import Transaksi from './pages/Transaksi';
import Resep from './pages/Resep';
import Profile from './pages/Profile';
import { cart as BelanjaIcon, documentText as TransaksiIcon, receipt as ResepIcon, bag as bagIcon } from "IonIcons/Icons";




const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs> 
       <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/Belanja">
          <Belanja/>
        </Route>
        <Route exact path="/Transaksi">
          <Transaksi/>
        </Route>
        <Route exact path="/Resep">
          <Resep/>
        </Route>
        <Route exact path="/Profile">
          <Profile/>
        </Route>
        <Route exact path="/search">
          <search/>
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
       </IonRouterOutlet>
       <IonTabBar slot='bottom'>
        <IonTabButton tab='/Belanja' href='/Belanja'>
          <IonIcon icon={BelanjaIcon}/>
          <IonLabel>Belanja</IonLabel>
        </IonTabButton>
        <IonTabButton tab='/Transaksi' href='/Transaksi'>
          <IonIcon icon={TransaksiIcon}/>
        <IonLabel>Transaksi</IonLabel>
        </IonTabButton>
        <IonTabButton tab='/Resep' href='/Resep'>
          <IonIcon icon={ResepIcon}/>
          <IonLabel>Resep</IonLabel>
        </IonTabButton>
        <IonTabButton tab='/Profile' href='/Profile'>
          <IonIcon icon={bagIcon}/>
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
       </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
