# le-jour-j.github.io

# Pour ajouter un projet

## Ajouter dans la page `index.html`

```html
<a href="LIEN DE LA NOUVELLE PAGE">
  <h3>TITRE</h3>
  <img src="LIEN DE LIMAGE" alt="" />
</a>
```

## Ajouter dans toutes les pages projets :

```html
<li>
  <a href="LIEN DU PROJET">NOM DU PROJET</a>
</li>
```

## Créer la nouvelle page NOM-DU-PROJET.html

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Des caddies partout</title>
  </head>
  <body>
    <header>
      <nav class="left">
        <a href="index.html">Arts</a>
        <a href="musique.html">Musique</a>
      </nav>

      <div class="">
        <h1>Des caddies partout</h1>
      </div>

      <div class="right">
        <a
          class="contact"
          href="mailto:jeanson.pechin@gmail.com"
          style="margin-left:auto;"
          >jeanson.pechin@gmail.com</a
        >
      </div>
    </header>

    <aside>
      <ul>
        <li>
          <a href="/caddie.html">Caddies</a>
        </li>
      </ul>
    </aside>

    <main>
      <div class="description">
        <p>DESCRIPTION DU PROJET</p>
      </div>

      <h2>SOUS-TITRE</h2>
      <figure>
        <img src="LIEN VERS LIMAGE" alt="" />
        <figcaption>LEGENDE DE LIMAGE</figcaption>
      </figure>
    </main>

    <script src="script.js"></script>
  </body>
</html>
```

## Liens

### Lien téléchargeable

```html
<a href="chemin/vers/le/fichier" download="NOMDUFICHIER.pdf"> Lien </a>
```

### Lien nouvel onglet

```html
<a href="http://google.com" target="_blank"> google </a>
```

### Lien mail

```html
<a href="mailto:jeanson.pechin@gmail.com">jeanson.pechin@gmail.com</a>
```

### Lien vers un endroit de la page

```html
<a href="#truc">truc</a>

<p id="truc">fhjkdlfdnfdk</p>
```

## Balises ogp pour la miniature des partages

```html
<head>
  ...
  <title>Open Graph : pourquoi utiliser les balises OGP ?</title>
  <meta property="og:title" content="Titre de la page" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://jeansonpechin.com" />
  <meta
    property="og:image"
    content="https://jeansonpechin.com/images/UNBELLEIMAGE.jpg"
  />
  <meta property="og:site_name" content="Jeanson Péchin" />
  ...
</head>
```
