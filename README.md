# RokketLabsPruebaTecnica (Español)
RokketLabsPruebaTecnica es una app desarrollada en React Native (sin Expo) cuyo objetivo es desplegar una serie de posts en base a tags que les fueron asignados. 

## Paquetes necesarios y su uso

### Native Base
Haciendo uso del gestor de paquetes NPM, instala el siguiente paquete de [native-base](https://nativebase.io/).

```bash
npm i native-base
```
Este se utiliza para la importación de iconos en la app.
 ```javascript
import { Icon } from 'native-base';
```
### react-native-spinkit
Luego, instala el siguiente paquete [react-native-spinkit](https://github.com/maxs15/react-native-spinkit).

```bash
npm install react-native-spinkit@latest --save
```
 Este se utiliza para la animación de carga de la app.
 ```javascript
import Spinner from 'react-native-spinkit';
```

## Cómo funciona

Para buscar estos posts, simplemente debes ingresar el tag que desees en el buscador ubicado en la parte superior de la app. Una vez ingresado el tag, se realizará una llamada al siguiente API (https://n161.tech/api/dummyapi/tag/{tag-ingresado-en-el-buscador}/post) el cual responderá con los posts que tengan asignados dicho tag.

Asi mismo, se podrán buscar más posts de una manera más rápida presionando los tags que se encuentra de cada post en color azul con un "#"

----

# RokketLabsPruebaTecnica (English)
RokketLabsPruebaTecnica is an app developed in React Native (not Expo) which purpose is to show a list of posts by their tags.

## Packages needed and their use
### Native Base
Using package manager NPM, install the follow package by [native-base](https://nativebase.io/). 

```bash
npm i native-base
```
It is use for importing icons to the app

 ```javascript
import { Icon } from 'native-base';
```
### react-native-spinkit
Then, install following package [react-native-spinkit](https://github.com/maxs15/react-native-spinkit).

```bash
npm install react-native-spinkit@latest --save
```
It is use for loading animation.
 ```javascript
import Spinner from 'react-native-spinkit';
```

## How it works

To search this posts, simply enter the tag that you want in the search bar located at the top of the app. After this, the app will call the following API (https://n161.tech/api/dummyapi/tag/{tag-entered}/post) which will respond with all the posts that have your tag entered.

Also, you can find posts much faster pressing the blue tags shown in the posts with a "#". 
