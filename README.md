# nodejs-bootswatch

Ejemplo de integración de Bootswatch con NodeJS.

```bash
npm install bootswatch
npm install bootstrap
npm install --save-dev sass
```

## Explicación

Para el servidor HTTP se utiliza el módulo nativo de NodeJS.
El CSS que sirve el servidor HTTP debe ser generado anteriormente ejecutando:

```bash
$ npm run sass
# ahora puedo ejecutar el servidor http
$ npm start
```

## Personalización Bootswatch 

Para la personalización solo se modificaron las variables del color primario y secundario.
Para esto hay que sobrescribir las variables SASS en el orden especificado en la documentación (luego en referencias).
El punto importante es que al copiar se debe borrar el comando !default.

```sass
# antes
#$primary:       $gray-800 !default;
#$secondary:     $gray-700 !default;

# despues
$primary:       #C8963E;
$secondary:     #4A4238; 
```


## Referencias

- https://coolors.co/ 
- https://sass-lang.com/documentation
- https://www.npmjs.com/package/sass 
- https://www.npmjs.com/package/node-sass 
- https://bootswatch.com/help/
- https://getbootstrap.com/docs/4.5/getting-started/theming/
- https://www.npmjs.com/package/bootswatch 
- https://www.npmjs.com/package/bootstrap  

