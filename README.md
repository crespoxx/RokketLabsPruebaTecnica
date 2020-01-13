# RokketLabsPruebaTecnica
RokketLabsPruebaTecnica es una app desarrollada en React Native (sin Expo) cuyo objetivo es desplegar una serie de posts en base a tags que les fueron asignados. Para buscar estos posts, simplemente debes ingresar el tag que desees en el buscador ubicado en la parte superior de la app. Una vez ingresado el tag, se realizará una llamada al siguiente API (https://n161.tech/t/dummyapi/?ref=public-apis) el cual responderá con los posts que tengan asignados dicho tag.

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
