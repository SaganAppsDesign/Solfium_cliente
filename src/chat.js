import * as React from 'react';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import Fire from '../fire';
import { StyleSheet, View, Image, TouchableOpacity, Button, ActivityIndicator} from 'react-native';
import {db} from '../fire';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import home from '../assets/home.png'; 
import setting from '../assets/setting.png'; 
import usuario from '../assets/usuario.png'; 
import backBtn from '../assets/backBtn.png';


var name, cita, title, screen
export var codigo_instalador

send = () => db.ref('Usuarios/' +  Fire.getUid()).update({
        
  envioMensaje:  "true"
        
  })

data = () => db.ref('/Usuarios/' +  Fire.getUid()).on('value', (snapshot) => {
  
  name =  snapshot.child("name").val()
  cita = snapshot.child("cita").val()
   

});

//Actualización estado cliente en BBDD

estadoCliente4 = () => db.ref('Usuarios/' +  Fire.getUid()).update({
                
  estado_cliente: "4/8 - Cita CONFIRMADA con instalador",
      
  })

   

export class Chat extends React.Component {


state = {

    messages: [],
    name:'',
    cita:'',
    codigo_instalador:'',
    
    
}

  render() {
  

    const { valor } = this.props.route.params;

    //SWITCH para la navegación entre pantallas    
    switch (valor) {
      case 0:
        title = "Regresa a pantalla anterior"
        screen = "Próxima visita"
        break;
      case 1:
        title = "Regresa a pantalla anterior"
        screen = "Escanear QR Instalador"
        break;
      case 2:
        title = "Revise su cita"
        screen = "Próxima visita"
        break;
      case 3:
        title = "Regresa a pantalla anterior"
        screen = "Viabilidad Instalación"
        break;
      case 4:
        title = "Regresa a pantalla anterior"
        screen = "Pago"
        break;
      case 5:
        title = "Regresa a pantalla anterior"
        screen = "Pago único"
        break;
      case 6:
        title = "Regresa a pantalla anterior"
        screen = "Financiamiento"
        break;
      case 7:
        title = "Regresa a pantalla anterior"
        screen = "Confirmar compra"
        break;
      case 8:
        title = "Regresa a pantalla anterior"
        screen = "Rating"
        break;


      default:
        text = "No value found";
    }

   data()

   var cita = this.state.cita
   var bool,opacity
   
   if (cita == ''){
          
         bool=true
         opacity=0.2
   } else {

        bool=false
        opacity=1
        
   }

     
   
    return (
     
     
    <View style={styles.container}>	
  
            <View style={{flex:7}}>
            <GiftedChat
              messages={this.state.messages}
              onSend={  (message) => {Fire.sendMessage(message);send()}   }
              renderBubble={renderBubble}
              renderLoading={renderLoading}
              showUserAvatar
              alwaysShowSend
              renderUsernameOnMessage  = {true}
              showAvatarForEveryMessage = {true}
              scrollToBottom
              //keyboardShouldPersistTaps={"never"}
              isTyping={true}
              placeholder={"Chatea aquí " + name}
              user={{
                _id: Fire.getUid(),
                name: name,
                //avatar: 'https://firebasestorage.googleapis.com/v0/b/solfium.appspot.com/o/icono.png?alt=media&token=b1ee1e27-bf62-4c57-8571-669112a5a8aa'
               
            }}
          />
   
       </View>


        <View style={{borderRadius:10,  backgroundColor:'orange',  opacity:opacity, marginBottom:hp('2%'),marginTop:hp('3%'), marginLeft:wp('10%'), 
        marginRight:wp('10%'), flex:0.5}}>
                  
        <Button disabled={bool}
                title={title} 
                onPress = {() => {this.props.navigation.navigate(screen);estadoCliente4()}}
                color='black'/>
                        
        </View>


    {/* footer */}              
    {/*Botones*/}     
    <View style={{opacity: 1, alignItems:'center', flex:1,  justifyContent:'center', flexDirection:'row', marginBottom:hp('0%'),marginTop:hp('0%')}}>  
                         

                         <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Implementación')}
                              > 
                              <Image 
                               
                               source={backBtn}
                               style={{aspectRatio:1, height:hp('6%')}}
                               
                               >    
                               </Image>

       
                                             
                           </TouchableOpacity> 
       
                        </View>

                        <View  style={{alignItems:'center', flex:1,  justifyContent:'center'}}>
                            <TouchableOpacity 
                                                                                         
                               onPress={() => this.props.navigation.navigate('Ingresar Consumo')}
                              > 
                                                    
                               <Image 
                               
                               source={home}
                               style={{aspectRatio:1, height:hp('6%')}}
                               
                               >    
                               </Image> 
       
                                             
                           </TouchableOpacity> 
       
                        </View>
       
                       <View  style={{alignItems:'center', flex:1,  justifyContent:'center',  opacity:0.5}}>
                           <TouchableOpacity 
                                                                                        
                           //onPress={() => user()}
                             > 
                                                   
                              <Image 
                              
                              source={usuario}
                              style={{aspectRatio:1, height:hp('6%')}}
                              
                              >    
                              </Image> 
       
                                            
                          </TouchableOpacity> 
       
                         </View>
       
       
       
                         <View  style={{alignItems:'center', flex:1,  justifyContent:'center',  opacity:0.5}}>
                         
                         <TouchableOpacity 
                                                                                        
                           //onPress={() => settings()}
                             > 
                                                   
                              <Image 
                              
                              source={setting}
                              style={{aspectRatio:1, height:hp('6%')}}
                              
                              >    
                              </Image> 
       
                                            
                          </TouchableOpacity> 
       
                         </View>
       
                              
       
      </View>
                     
                     
      {/* FIN footer */}  

      </View>

    
)

}

componentDidMount() {

  
      const ref = db.ref('/Usuarios/' +  Fire.getUid());

      this.listener = ref.on("value", snapshot => {

      this.setState({cita: snapshot.child("cita").val() || ''
                      })    

  
    }
    )
    

    Fire.loadMessages((message) => {
        
        this.setState(previousState => {

          return {

            messages: GiftedChat.append(previousState.messages, message)
            
          }

       

        })

        
        
      
    }
  
        
    )


}


componentWillUnmount() {
  Fire.closeChat();
}


}

// Estilo
const styles = StyleSheet.create({
  

  container:{ 
  	flex: 1,
  	justifyContent: "center",
  	backgroundColor: '#EBEDEF',
    marginTop: "0%"},
    
   sendingContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    loadingContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
 
});




function renderBubble(props) {
  return (
    // Step 3: return the component
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          // Here is the color change
          backgroundColor: '#fff'
        },
        right: {
          // Here is the color change
          backgroundColor: '#DCF8C6'
        }
      }}
      textStyle={{
        left: {
          color: '#000'
        },
        right: {
          color: '#000'
        }
      }}
    />
  );
}

function renderLoading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size='large' color='#6646ee' />
    </View>
  );
}