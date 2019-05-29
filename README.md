# MEAN stack Boilerplate code

Ce dossier à pour but de mettre en place toutes les fonctionnalités de base à développer pour mettre en place un projet basé sur la stack MEAN. Le point de départ de ce projet est le constat d'un certain manque de principes dans la mise en production de projet Full Javascript. Ce langage magnifique à bien des égards présente néanmoins des logiques qui, trop permissives, sont mal adaptées à des profils non-experts car elles permettent de travailler sans réelle structure. Mais ce n'est pas pour autant que Angular ou NodeJS ne prennent pas de plue en plus place sur le marché du développement et imposent à des développeurs débutants à utiliser des frameworks en permanente évolution.

Dans cette situation il est alors impensable de ne pas utiliser ces nouveaux outils en ne gardant pas pour base l'expérience passée et les usages qui en sont issus. Prenons donc les frameworks pour ce qu'ils sont : des outils pour développer un environnement de travail.

## Présentation du boilerplate

Ce projet utilise les différent-e-s frameworks et librairies de la stack MEAN pour mettre en place un serveur hébergeant une API Rest, un client Angular et une base de données MongoDB. Les étapes de réalisation de ce projet ont été les suivante

- [x] Création d'un serveur __NodeJS__
- [x] Mise en place d'un router principal pour configurer les routes
- [x] Mise en place d'une route pour l'authentification
- [x] Sécurisation de compte via validation de l'inscription par email
- [x] Chiffrage du mot de passe utilisateur avec __Bcrypt__
- [x] Système de modification de mot de passe sécurisé
- [x] Sécurisation du token utilisateur via cookie HTTP avec __CookieParser__
- [ ] Mise en place d'une route pour gérer les données utilisateur
- [ ] Mise en place de contrôleurs sur le principe du _CRUD_
- [ ] Chiffrage de toutes les données utilisateur (_RGPD_) avec __CryptoJS__
- [ ] Gestion de l'historique de connexion utilisateur
- [ ] Gestion des _log_ avec __Winston__ et __Morgan__
- [x] Sécurisation des routes privées avec __PassportJS__
- [x] Gestion des requêtes utilisateur via __Postman__
- [x] Création d'un client __Angular__
- [x] Création des vues client (home/email validation/lost password/ me)
- [x] Création des formulaires (register/email validation/login/lost password) 
- [x] Création du service d'authentification
- [x] Gestion des requêtes utilisateur via le client __Angular__
- [ ] Sécurisation des routes client privées