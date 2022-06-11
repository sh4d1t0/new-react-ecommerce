## New react e-commerce


1.  **Clona el repositorio.**

Una vez creado el repositorio procede a instalar con NPM o Yarn

```shell
# ejemplo del comando para instalar
npm install
```
2.  **Iniciar el entorno de desarrollo.**

Navega hasta el directorio de tu sitio e inicia el ambiente.

```shell
cd new-react-ecommerce/
npm run dev
```
3.  **Puedes ver las pruebas visuales con StoryBook**

Navega hasta el directorio de tu sitio e inicia el ambiente de pruebas con StoryBook.

```shell
cd new-react-ecommerce/
npm run storybook
```
4.  **Realiza las pruebas con Jest, React Testing Library y Puppeteer**

Navega hasta el directorio de tu sitio y ejecuta el comando para realizar las pruebas de Jest y RTL de cada uno tus componentes de Storybook, esto te generara dos carpetas, una para los snapshots de tu código de stories y otra para los snapshots de las imágenes.
**_Toma en cuenta que en este punto se pueden realizar capturas de pantalla de tus componentes haciendo uso de Puppeteer, por lo que tendrás que tener iniciado en una consola Storybook_**

```shell
cd new-react-ecommerce/
npm run test
```