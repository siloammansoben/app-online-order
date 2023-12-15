import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonIcon,
  IonButton,
} from '@ionic/react';
import { cash, print, arrowUndo } from 'IonIcons/Icons';

const TabBarTransaksi: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Daftar Transaksi</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>
              <h2>Judul Order</h2>
              <p>Tanggal: 02 November 2023</p>
              <p>Metode Pembayaran: Cash</p>
              <p>Pelanggan: Siloam terah mansoben</p>
              <p>Pesanan Diantar</p>
            </IonLabel>
          </IonItem>

          
          <IonItem>
            <IonLabel>
              <h3>Ayam Geprek</h3>
              <p>Detail Harga: Rp 15.000</p>
            </IonLabel>
            <IonText slot="end">Rp 20.000</IonText>
          </IonItem>

          <IonItem>
            <IonLabel>
              <h3>Ikan bakar</h3>
              <p>Detail Harga: Rp 25.000</p>
            </IonLabel>
            <IonText slot="end">Rp 30.000</IonText>
          </IonItem>

          <IonItem>
            <IonLabel>Subtotal:</IonLabel>
            <IonText slot="end">Rp 40.000</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>Total Tagihan:</IonLabel>
            <IonText slot="end">Rp 50.000</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>Uang Bayar:</IonLabel>
            <IonText slot="end">Rp 55.000</IonText>
          </IonItem>
          <IonItem>
            <IonLabel>Kembalian:</IonLabel>
            <IonText slot="end">Rp 10.000</IonText>
          </IonItem>

          <IonItem>
            <IonButton color="success">
              <IonIcon slot="start" icon={print} />
              Cetak
            </IonButton>
            <IonButton color="danger">
              <IonIcon slot="start" icon={arrowUndo} />
              Refund
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default TabBarTransaksi;
