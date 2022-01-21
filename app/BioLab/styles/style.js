import { StyleSheet } from "react-native";


// basis stijlen voor heel de app

export const mainStyle = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  toolbar:{
    paddingTop:30,
    paddingBottom:10,
    flexDirection:'row'
  },
  center:{
    justifyContent: 'center',
    height: '100%'
  },
  bottom:{
    bottom: 0,
  }
});


// specifieke stijlen per pagina

export const deviceStyle = StyleSheet.create({
  deviceContainer:{
    backgroundColor: '#FFF',
    padding: 15,
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
  },
  deviceContainerOther: {
    backgroundColor: '#FFF',
    padding: 15,
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
    opacity: 0.2
  },
  deviceText:{
    color: '#000',
    fontSize: 22,
  },
  deviceSubText:{
    color: '#BBB',
    fontSize: 16,
  },
  button:{
    backgroundColor: '#3498db',
    padding: 15,
  },
  buttonRed:{
    backgroundColor: '#e74c3c',
    padding: 15,
  },
  buttonText:{
    color: '#FFF',
    fontSize: 16,
    alignSelf: 'center',
  },
  statusText:{
    color: '#000',
    fontSize: 22,
    alignSelf: 'center'
  }
});

export const incubatorStyle = StyleSheet.create({
  statusText:{
    color: '#000',
    fontSize: 22,
    alignSelf: 'center'
  }
});