import React, { useState } from 'react';
import { IonContent, IonLabel, IonInput, IonButton, IonItem, IonCheckbox } from '@ionic/react';

const Profile: React.FC = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    
  };

  return (
    <IonContent>
      <IonItem>
        <IonLabel position="floating">Nama Pengguna atau Email</IonLabel>
        <IonInput
          type="text"
          value={usernameOrEmail}
          onIonChange={(e) => setUsernameOrEmail(e.detail.value!)}
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">Kata Sandi</IonLabel>
        <IonInput
          type="password"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value!)}
        />
      </IonItem>
      <IonItem>
        <IonLabel>Ingat Saya</IonLabel>
        <IonCheckbox checked={rememberMe} onIonChange={() => setRememberMe(!rememberMe)} />
      </IonItem>
      <IonButton expand="full" onClick={handleLogin}>MASUK</IonButton>
      <p>Lupa kata sandi?</p>
      <p>Belum punya Akun?</p>
    </IonContent>
  );
};

export default Profile;

