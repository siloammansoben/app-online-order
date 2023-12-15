// Sayuran.tsx
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

function Daging() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sayuran</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Konten untuk kategori Sayuran */}
        <div>
          <h2>Sayuran yang Tersedia</h2>
          <ul>
            <li>Sayuran 1</li>
            <li>Sayuran 2</li>
            <li>Sayuran 3</li>
            {/* Tambahkan daftar sayuran sesuai kebutuhan Anda */}
          </ul>
        </div>
        <img
          src="gambar_sayuran.jpg" // Ganti dengan URL gambar sayuran yang sesuai
          alt="Sayuran"
          style={{
            width: '100%',
            maxWidth: '400px',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </IonContent>
    </IonPage>
  );
}

export default Daging;