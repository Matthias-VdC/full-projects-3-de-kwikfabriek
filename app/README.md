# BioLab - FP3 - Team De Kwikfabriek

## React Native App

### Bronnen

- [React Native](https://reactnative.dev/)
- [React navigation](https://reactnavigation.org/)
- [react-native-ble-plx](https://dotintent.github.io/react-native-ble-plx/)
- [React Native Camera](https://react-native-camera.github.io/react-native-camera/)
- [react-native-fs](https://github.com/itinance/react-native-fs)
- [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient)
- [react-native-svg](https://github.com/react-native-svg/react-native-svg)

### App op telefoon installeren

1. Kloon deze repo.
2. Ga met je terminal/commandpromp naar de 'BioLab' map in de 'app' map.
3. Voer deze commando uit: `npm install`, om de dependency's te installeren.
4. Voer deze commando uit: `npx react-native link`, om de dependency's te link met het project.

#### Android

5. Zorg er voor dat je ontwikkelaarsopties (developer options) aanstaat op je GSM.
6. Als de ontwikkelaarsopties aan staan, schaken **USB-foutopsporing** in
7. Zorg dat je deze [Instructies]() heb uitgevoerd. Belangrijk: Kies voor **React Native CLI Quickstart** en niet Expo CLI Quickstart. Kies als Target OS: **Android**
8. Als alle voorgaan stappen gedaan zijn: verbind uw smartphone met uw computer met een usb kabel. Voer nadien dit commando in: `npx react-native run-android` om de app te builden en te installeren op uw smartphone.

#### IOS

*Binnenkort. (De nodige aanpassing zijn nog niet gedaan)*