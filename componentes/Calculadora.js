import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Boton, Caja } from './Atomicos';
import { estilos } from './Estilos';

export const Calculadora = () => {
  const [valorCaja, setValorCaja] = useState('0');

  const handleButtonClick = (texto) => {
    let nuevoValor = valorCaja;

    if (texto === 'ce') {
      // Limpiar la caja
      nuevoValor = '0';
    } else if (texto === '<-') {
      // Eliminar el último carácter
      nuevoValor = nuevoValor.length > 1 ? nuevoValor.slice(0, -1) : '0';
    } else if (texto === '=') {
      // Calcular el resultado
      nuevoValor = calcularResultado(nuevoValor);
    } else {
      // Agregar el texto del botón al valor actual
      nuevoValor = nuevoValor === '0' ? texto : nuevoValor + texto;
    }

    // Actualizar el estado del valor de la caja
    setValorCaja(nuevoValor);
  };

  const calcularResultado = (expresion) => {
    // Implementa la lógica para calcular el resultado de la expresión
    // Por ejemplo, puedes usar la función eval() (¡ten cuidado con su uso!)
    // En este ejemplo, simplemente devolvemos la expresión actual
    return expresion;
  };

  return (
    <View>
      <View>
        <Caja valor={valorCaja} />
      </View>
      <View style={estilos.botonescontainer}>
        <TouchableOpacity onPress={() => handleButtonClick('%')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'%'} color={'#3498db'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick('ce')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'ce'} color={'#3498db'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' c ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'c'} color={'#3498db'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick('<-')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'<-'} color={'#3498db'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick('1/x')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'1/x'} color={'#3498db'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick('x² ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'x²'} color={'#3498db'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' R ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'R'} color={'#3498db'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' / ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'/'} color={'#3498db'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' 7 ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'7'} color={'#2ecc71'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' 8 ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'8'} color={'#2ecc71'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' 9 ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'9'} color={'#2ecc71'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' * ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'*'} color={'#3498db'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' 4 ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'4'} color={'#2ecc71'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' 5 ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'5'} color={'#2ecc71'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' 6 ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'6'} color={'#2ecc71'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' - ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'-'} color={'#3498db'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' 1 ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'1'} color={'#2ecc71'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' 2 ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'2'} color={'#2ecc71'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' 3 ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'3'} color={'#2ecc71'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' + ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'+'} color={'#3498db'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick('+/- ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'+/-'} color={'#3498db'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' 0 ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'0'} color={'#2ecc71'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' . ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'.'} color={'#3498db'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleButtonClick(' = ')}hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Boton texto={'= '} color={'#3498db'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};


