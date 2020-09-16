import * as React from 'react';
import {Text, View, Dimensions, ScrollView, Image, ImageBackground, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
import ImageOverlay from "react-native-image-overlay";
import fondo from '../assets/fondo3.jpg'; 
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import logo from '../assets/logo.png'; 
import Fire, {db} from '../fire';
import verResultado from '../assets/verResultado.png'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export var potenciaUbicacion

const user = () => {
  ToastAndroid.show("Perfil usuario", ToastAndroid.SHORT);
 
};

const settings = () => {
  ToastAndroid.show("Settings", ToastAndroid.SHORT);
 
};



export class PantallaEspera extends React.Component {

  state = {

    potencia: '',
   
  }
   


  
siguiente = () =>  {
    
    
      this.props.navigation.navigate('Cálculos')}
  


 render() {


  return (


    <ImageOverlay 
          source={fondo}
          height={hp('100%')}  
          overlayAlpha={0}                 
          > 
                              
          <View style={{alignItem:'center', justifyContent:'center', width:wp('100%'), height:hp('100%'), flex:1, flexDirection:'column'}}>  
                                                        
                          
                <View style={{alignItems: 'center', flexDirection:'column',flex:9, width:wp('100%'), height:hp('100%')}}>
                      
                    <View style={{marginTop: hp('25%'), alignItems: 'center', flex:2}}>
                          <Image
                              style={{width:wp('35%'), height:hp('20%'),marginTop: '0%'}}
                              source={require('../assets/loader.gif')}
                              />
                    </View>
              
                    <View style={{flex:1}}>
                        <Text style={{color: '#fff',
                            
                            marginLeft:wp('90%'),
                            marginTop:wp('5%'),
                            height:hp('100%'),
                            width:wp('100%'),
                            fontWeight:'bold',
                            fontSize: hp('3%'),
                            
                            }}>

                           Calculando...

                        </Text>
                       
                    </View>
                 
                    <View style={{flex:2}}>


                        
                                <TouchableOpacity 
                                                                        
                                    onPress={() => {this.siguiente()}}
                                    >
                                            <Image 
                                            
                                            source={verResultado}
                                            style={{
                                            aspectRatio:1,  height:hp('6%'), marginLeft:wp('50%')}}
                                            
                                            >    
                                            </Image> 
                                </TouchableOpacity>
                    
                    </View>
       
    </View>
                
                 



                {/*Botones*/}     
           <View style={{alignItems:'center', flex:1,  justifyContent:'center', flexDirection:'row', marginTop:hp('0%')}}>  
                         
           <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
               <TouchableOpacity 
                                                                            
               onPress={() => this.props.navigation.navigate('Solfium')}
                 > 
                                       
                  <Image 
                  
                  source={home}
                  style={{aspectRatio:1, height:hp('9%')}}
                  
                  >    
                  </Image> 

                                
              </TouchableOpacity> 

           </View>

          <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
              <TouchableOpacity 
                                                                           
              onPress={() => user()}
                > 
                                      
                 <Image 
                 
                 source={usuario}
                 style={{aspectRatio:1, height:hp('9%')}}
                 
                 >    
                 </Image> 

                               
             </TouchableOpacity> 

            </View>

            <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
            
            <TouchableOpacity 
                                                                           
              onPress={() => settings()}
                > 
                                      
                 <Image 
                 
                 source={setting}
                 style={{aspectRatio:1, height:hp('9%')}}
                 
                 >    
                 </Image> 

                               
             </TouchableOpacity> 

            </View>

                 

          </View>
          
          
          { /* LOGO*/}
  
          <View style={{alignItems:'center', justifyContent:'center',flex:1}}>  
          
          <Image 
            
            source={logo}
            style={{aspectRatio:4.5, width:wp('100%'), height:hp('4%'), marginBottom:hp('3%')}}
            
            >    
          </Image>  

         </View> 

       
       </View>


    </ImageOverlay> 

  );
}



}


const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
    height:'100%',
        
  },

  logo: {
    
    width: "20%",
    height: "50%",
    marginBottom: "10%",
    marginTop: "2%",
    marginLeft: "59%",
    marginRight: "0%"
    
    
  },

  boton: {
        
     height: '55%', 
     width:'100%',
     borderRadius:20,
     fontWeight:'bold',
     fontSize:15,
     color: 'white', 
     marginBottom: "0%", 
     marginTop: "0%", 
     marginLeft: "0%", 
     marginRight: "0%",
     alignItems: "center",
     paddingLeft:40, 
     paddingRight:40,
     backgroundColor: '#5DCB31',
     textAlignVertical:'center'
    
    
  },

  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },



 



  

});