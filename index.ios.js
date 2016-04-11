'use strict';

var React = require('react-native');
var {
   View, 
   Text,
   ActivityIndicatorIOS,
   StyleSheet
} = React;


const AwesomeLoadingIndicator = React.createClass({
  
  getDefaultProps() {
    return {
      text: 'Loading...',
      loading: true
    }
  },
  
  propTypes: {
    // text: React.propTypes.string,
    loading: React.PropTypes.bool,
  },
  
  render() {
    if (this.props.loading) {
      return (
        <View 
          style={styles.container}>
            <View style={styles.loadingContainer}>
            
            <Text style={styles.loadingText}>{this.props.text}</Text>
            
            <View style={styles.spinnerContainer}>
              <ActivityIndicatorIOS
                animating={true}
                size="large"
              />
            </View> 
            
            </View>      
        </View>
      ); 
    } else {
      return null;
    }
  } 
});

const styles = StyleSheet.create({
   container: {
      flex: 1,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      alignItems: 'center',
      justifyContent: 'center'
   },
   
   loadingContainer: {
     padding: 8,
     backgroundColor: '#000',
     borderRadius: 8,
     opacity: .9,
     justifyContent: 'center',
     alignItems: 'center'
   },
   
   loadingText: {
     fontWeight: 'bold',
     color: '#fff',
     textAlign: 'center'
   },
   
   spinnerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 4,
      marginTop: 4,
   }
});

module.exports = AwesomeLoadingIndicator;