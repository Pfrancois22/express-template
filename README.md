### Development

To get started with express-template in development mode, follow these steps:

1. Clone the repository:

   ```bash
   git clone "https://github.com/Pfrancois22/express-template.git"
   cd express-template
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Start the application

   ```bash
   npm run dev
   ```
4. SASS
   ```bash
   npm install sass
   ```

### SASS

I use sass for my CSS
- For this, the SASS package is installed (it is in the dependencies).
- To run sass and make it automatic on the project
1. Create a directory in public/css/sass
2. Then create a style.scss file in this directory then in a terminal enter the following line:

```bash
sass --watch public/css/sass/style.css public/css/style.css
```

**✨This will create the process of observing the CSS and automatically create your "style.css" file.✨**
*(check your path!)*

***SASS will run in the background no need to install parcel!***

J'utilise sass pour mon CSS
- Pour cela le package SASS est a installé (il est dans les dépendances).
- Pour exécuter sass et pour qu'il soit automatique sur le projet
1. Créer un répertoire dans public/css/sass
2. Puis créer un fichier style.scss dans ce répertoire puis dans un terminal entré la ligne suivante :
```bash
sass --watch public/css/sass/style.css public/css/style.css
```
**✨Cela créra le processus d'observation du CSS et créra automatiquement votre fichier "style.css".✨**
*(vérifier votre chemin !)*

***SASS tournera en fond pas besoin d'installer parcel !***