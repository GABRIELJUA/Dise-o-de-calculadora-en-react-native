import { StyleSheet } from "react-native";

export const estilos=StyleSheet.create({
    //Estilos del boton
    boton:{
        backgroundColor: 'black',
        padding: 15, // Ajusta el padding para controlar el tamaño del botón
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 2,
        flexBasis: '10%', // Establece el ancho para que haya 4 botones por fila
        margin: '1%', // Espaciado entre botones
        justifyContent: 'center',
        alignItems: 'center', // Centra el contenido del botón
      },
      textoB:{
        color:'red',
        fontSize:30,
      },
      logoB:{
        height:35,
        width:35,
        marginRight:7
      },
    //Estilos de la caja
    boxContainer:{
        backgroundColor: 'black',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5,
        height: 70,
        margin: 15,
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 5,
        marginTop: 200, // Mueve el contenedor un poco más abajo
        
    },
    TextBox:{
        fontSize:30,
        color:'red',
    },
    //estilo de contenedor de los botones
    botonescontainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    }
})