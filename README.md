# React Native with Redux - Practice project for learning React Native

Different projects using React Native demonstrating best practices


### No build URL present fix

rm -rf ios/build/; kill $(lsof -t -i:8081); react-native run-ios

### unable to load script from assets index.android.bundle

https://stackoverflow.com/questions/44446523/unable-to-load-script-from-assets-index-android-bundle-on-windows

### SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.

https://stackoverflow.com/questions/32634352/react-native-android-build-failed-sdk-location-not-found

### Could not determine java version from '9.0.4'

brew cask uninstall java

brew tap caskroom/versions

brew cask install java8

### Change port for server 
1.react-native/local-cli/server/server.js - default

2.react-native/React/React.xcodeproj/project.pbxproj 

search for port number 8081 

### "No bundle url present" error on IOS 
npm install 

react-native run-ios 

*****************************

## Ignite CLI 

update package.json with "v1.0.0-beta.26" for react navigation - otherwise typeerror thrown on new project
