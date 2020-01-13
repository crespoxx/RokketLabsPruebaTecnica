# RokketLabsPruebaTecnica
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

## Como funciona

Para buscar estos posts, simplemente debes ingresar el tag que desees en el buscador ubicado en la parte superior de la app. Una vez ingresado el tag, se realizará una llamada al siguiente API (https://n161.tech/api/dummyapi/tag/{tag-ingresado-en-el-buscador}/post) el cual responderá con los posts que tengan asignados dicho tag.

Asi mismo, se podrá buscar más posts presionando los tags que se encuentra de cada post en color azul con un "#"
