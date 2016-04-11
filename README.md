# Sleek Loading Indicator for React Native
I was looking for a drop-in, lightweight and cool looking loading component for my app. I couldn't find one so, I wrote it myself. 
A sleek loading indicator for React Native apps for IOS (as of now).

![](https://cloud.githubusercontent.com/assets/1650995/14425096/5a5fa0d4-0002-11e6-8931-f8677ff10048.png)  


### Usage
Install the package
```
npm install react-native-sleek-loading-indicator --save
```

```javascript

const SleekLoadingIndicator = require('react-native-sleek-loading-indicator');

const MyView = React.createClass({
   render() {
    if (this.state.loading) {
      return (<SleekLoadingIndicator loading={this.state.loading} />); 
   } else {
     //.... Do my stuff
   }
});

```

### Props
- `text` (Optional) - Custom text can be provided. 
- `loading` (bool | required) - tells the component to show/hide loading indicator. 

### Roadmap
- Support for Android.
- Light theme for dark backgrounds.
- Animation when component disappears from view. 

### Contribution Guide 
Feel free to fork the repo, add feature and send me a pull request. 

### Note from author 
Gimme a buzz [@BilalBudhani](https://twitter.com/BilalBudhani) If you've questions, suggestions or just wanna say Hi.

### MIT Licensed
