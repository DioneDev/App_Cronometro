import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero:0,
      botao:'Go',
      ultimoResultado: null
    };
// Variavel do timer relogio.
    this.timer = null

    this.go = this.go.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  go(){
    if(this.timer != null){
      // Aqui vai parar o timer
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao:'Go'});
    }else{

      // Começa a rodar o timer 
      this.timer = setInterval( ()=> {
        this.setState({numero: this.state.numero + 0.1})
      }, 100);
      this.setState({botao:'Pausar'})
    }
  }

  zerar(){
    if(this.timer != null){
      // Aqui vai ZERAR o timer
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimoResultado:this.state.numero,
      numero:0, 
      botao:'Go'
    })
  }

  render(){
    return(
      <View style={styles.container}>
        
        <Image 
          source={require('./images/cronometro.png')}
          style={styles.imgCronometro}
        />

        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

        <View style={styles.btnArea}>

          <TouchableOpacity style={styles.btn}onPress={this.go}>

            <Text style={styles.btnText}>{this.state.botao}</Text>

          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.zerar}>

            <Text style={styles.btnText}>Zerar</Text>
            
          </TouchableOpacity>

        </View>

        <View style={styles.resultado}>
          <Text style={styles.textResultado}>
            {this.state.ultimoResultado > 0 ? 'Ultimo tempo: ' + this.state.ultimoResultado.toFixed(2) + ' s' : ''}
          </Text>
        </View>

      </View>
    );
  }
}
export default App;
