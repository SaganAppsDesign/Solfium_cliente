import * as React from 'react';
import {Component, Fragment} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './src/homeScreen';  
import {Calculos} from './src/calculos';  
import {PantallaEspera} from './src/pantalla_espera';  
import {DatosInstalador} from './src/datos_qr_instalador';  
import {DatosInstalador2} from './src/test';  
import {VideoInfo} from './src/video_informativo';  
import {InfoResultInsta} from './src/info_result_instalacion.js';  
import {Instalacion} from './src/instalacion_en_proceso.js';  
import {Ratings} from './src/rating.js';  
import {Payment} from './src/pago';  
import {CompraConfirmada} from './src/compra_confirmada';  
import {QREscaneado} from './src/qr_escaneado';  
import {QRCodeOk} from './src/QR_OK.js'; 
import { Mapbox2 } from './src/mapbox'; 
import { Camara } from './src/camara2'; 
import { QRscan } from './src/qr_scan'; 
import { Chat } from './src/chat'; 
import { Main } from './src/main'; 
import { IngresarConsumo } from './src/ingresar_consumo'; 
import {ConfirmaUbicacion } from './src/confirma_ubicacion'; 
import {MeInteresa } from './src/me_interesa'; 
import 'react-native-gesture-handler';

const Stack = createStackNavigator();


class MyStack extends Component {
 
 
  render(){ 

  return (
    <Stack.Navigator

        screenOptions={{
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: '#fff',
        
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>

      <Stack.Screen options={{headerShown: false}}  name="Solfium" component={HomeScreen} initialParams={{ Latitud:  0,  Longitud: 0,  URI: 0  }}/>
      <Stack.Screen options={{headerShown: false}}  name="Cálculos" component={Calculos} />
      <Stack.Screen options={{headerShown: false}} name="Ingresar Consumo" component={IngresarConsumo}  />
      <Stack.Screen options={{headerShown: false}} name="Confirma ubicación" component={ConfirmaUbicacion}  />
      <Stack.Screen options={{headerShown: false}} name="Proceso de implemetación" component={MeInteresa}  />
      <Stack.Screen options={{headerShown: false}} name="Próxima visita" component={DatosInstalador} />
      <Stack.Screen options={{headerShown: false}}  name="Proceso de pago" component={Payment} />
      <Stack.Screen name="Video Informativo" component={VideoInfo} />
      <Stack.Screen options={{headerShown: false}} name="Viabilidad Instalación" component={InfoResultInsta} />
      <Stack.Screen name="Instalación en proceso" component={Instalacion} />
      <Stack.Screen name="Rating" component={Ratings} />
      <Stack.Screen options={{headerShown: false}} name="Escanear QR Instalador" component={DatosInstalador2} />
      <Stack.Screen name="QR Escaneado" component={QREscaneado} />
      <Stack.Screen name="QR correcto" component={QRCodeOk} />
      <Stack.Screen name="Ubicación" component={Mapbox2} />
      <Stack.Screen name="Cámara" component={Camara}  />
      <Stack.Screen name="QR scan" component={QRscan}  />
      <Stack.Screen name="Chat" component={Chat}  />
      <Stack.Screen name="Nombre usuario" component={Main}  />
      <Stack.Screen name="Confirmar compra" component={CompraConfirmada}  />
      <Stack.Screen options={{headerShown: false}}  name="Pantalla de espera" component={PantallaEspera}  />

    </Stack.Navigator>
  )};
}


export default function App()  {
  return (

   <Fragment>
 
      <NavigationContainer>
          <MyStack />
      </NavigationContainer>

    
    </Fragment>

   
  );
}


