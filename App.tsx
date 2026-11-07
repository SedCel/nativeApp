import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Input } from './shared/Input/Input';
import { Colors, Gaps } from './shared/tokens'



export default function App() {
  const width = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <View style={styles.mainBlock}>
        <View>
          <Text style={{fontSize: 24, color: 'white', alignSelf: 'center', marginBottom: 40}}>Welcome!</Text>
        </View>
        <View style={{gap: 25}}>
          <Input placeholder='Username' />
          <Input placeholder='Password' />
        </View>
        <View>
          <TouchableOpacity style ={styles.loginButton}>
            <Text style={{color: 'white', fontSize: 24}}>Login</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style = {styles.forgotpass}>
            <Text style={{color: Colors.links}}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainBlock:
  {
    width: '80%',
    gap: Gaps.g16,
  },
  textStyle: {
    color: 'red', fontSize: 24
  },
  top:{
    flexDirection: 'row',
  },
  loginButton: {
    borderRadius: 10,
    backgroundColor: Colors.primary,
    paddingVertical: 12,      
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 15

  },
  forgotpass:{
    alignSelf: 'center',
    marginTop: 15
    
  }

});
