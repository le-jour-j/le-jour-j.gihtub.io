# le-jour-j.github.io

# Pour ajouter un projet

## Ajouter dans la page `index.html`
```html
<a href="LIEN DE LA NOUVELLE PAGE" >
  <h3>TITRE</h3>
  <img src="LIEN DE LIMAGE" alt="">
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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Des caddies partout</title>
</head>
<body>
    <header>
        <nav class="left">

            <a href="index.html" >Arts</a>
            <a href="musique.html">Musique</a>
        </nav>

        <div class="">
            <h1>Des caddies partout</h1>
        </div>

        <div class="right">
            <a class="contact" href="mailto:jeanson.pechin@gmail.com" style="margin-left:auto;">jeanson.pechin@gmail.com</a>
          
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
            <img src="LIEN VERS LIMAGE" alt="">
            <figcaption>LEGENDE DE LIMAGE</figcaption>
        </figure>
    </main>
    
</body>
</html>
```
