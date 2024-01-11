# eikon parcel starter

## Prérequis

- Git installé
- NPM installé

## Installation

Cloner le repository git

```
git clone git@github.com:eikon-frontend/starterkit.git <nom du projet>
```

Se rendre dans le dossier du projet, puis installer les dépendances avec NPM

```
cd <nom-du-projet>
npm install
```

## Commandes

Compiler la SCSS, aggréger le JS, lancer le serveur et écouter les changements

```
npm run dev
```

Compiler pour la production

```
npm run build
```

## Utilisation

### HTML

Inclure un fichier _header.html_ depuis un fichier HTML

```html
<include src="components/header.html"></include>
```

### SCSS

Inclure un fichier _main.scss_ depuis un fichier HTML

```html
<link rel="stylesheet" href="scss/main.scss" />
```

Inclure un fichier _\_base.scss_ depuis un fichier SCSS

```scss
@import "base";
```

### JS

Inclure un fichier _main.js_ depuis un fichier HTML

```html
<script src="js/main.js"></script>
```

Inclure un fichier _carousel.js_ depuis un fichier JS

```js
require("./carousel.js");
```

## Exemples d'utilisation de packages externes

### [AOS](https://michalsnik.github.io/aos)

Installer le paquet avec NPM

```
npm install aos@next
```

Inclure le JS depuis un fichier JS

```js
import AOS from "aos";
```

Inclure la CSS depuis un fichier SCSS

```SCSS
@import "aos/dist/aos.css";
```

### [Bootstrap](https://getbootstrap.com)

Installer le paquet avec NPM

```
npm install bootstrap
```

Inclure la SCSS depuis un fichier SCSS

```SCSS
@import "bootstrap/scss/bootstrap-grid";
```

### [Flickity](https://flickity.metafizzy.co)

Installer le paquet avec NPM

```
npm install flickity
```

Inclure le JS depuis un fichier JS

```js
import Flickity from "flickity";
```

Inclure la CSS depuis un fichier SCSS

```SCSS
@import "flickity/dist/flickity.css";
```

### [Font Awesome](https://fontawesome.com/)

Installer le paquet avec NPM

```
npm install @fortawesome/fontawesome-free
```

Inclure le JS depuis un fichier JS

```js
import "@fortawesome/fontawesome-free/js/all.js";
```

### [GSAP](https://greensock.com/gsap/)

Installer le paquet avec NPM

```
npm install gsap
```

Inclure le JS depuis un fichier JS

```js
import gsap from "gsap";
```

Inclure les éventuels plugins

```js
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
```

### [Masonry](https://masonry.desandro.com)

Installer le paquet avec NPM

```
npm install masonry-layout
```

Inclure le JS depuis un fichier JS

```js
import Masonry from "masonry-layout";
```

### [ScrollMagic](https://scrollmagic.io)

Installer le paquet avec NPM

```
npm install scrollmagic
```

Inclure le JS depuis un fichier JS

```js
import ScrollMagic from "scrollmagic";
```

### [Swiper](https://swiperjs.com)

Installer le paquet avec NPM

```
npm install swiper@6
```

Inclure le JS depuis un fichier JS

```js
import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);
```

Inclure la SCSS depuis un fichier SCSS

```SCSS
@import "swiper/swiper";
```

### [three.js](https://threejs.org)

Installer le paquet avec NPM

```
npm install three
```

Inclure le JS depuis un fichier JS

```js
import * as THREE from "three";
```

## Exemple

Un exemple avec l'installation des packages ci-desssus est disponible sur la branche _examples_

```
git checkout examples
```
