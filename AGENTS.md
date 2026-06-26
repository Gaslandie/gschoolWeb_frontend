# AGENTS.md

# G-School Development Guide

Version : 1.0

---

# 1. Vision du Projet

G-School est une plateforme africaine de formation en ligne conçue pour rendre l'apprentissage accessible, moderne et professionnel.

Le projet est développé progressivement.

Version actuelle :

* Frontend Web : Angular
* Backend : Spring Boot
* Base de données : PostgreSQL

Des applications Flutter (Android, Desktop et iOS) seront développées ultérieurement.

---

# 2. Mission

La mission de G-School est de permettre aux élèves, étudiants et professionnels d'apprendre facilement grâce à une plateforme simple, rapide et adaptée aux réalités africaines.

---

# 3. Philosophie Générale

La philosophie de G-School est résumée par une seule phrase :

> **Le plus simple possible.**

Chaque décision doit respecter cette philosophie.

Avant chaque développement, toujours se poser ces questions :

* Est-ce plus simple ?
* Est-ce plus clair ?
* Est-ce plus maintenable ?
* Est-ce réellement utile ?
* Est-ce adapté aux utilisateurs africains ?
* Est-ce compatible avec une connexion Internet limitée ?

Si la réponse est NON, proposer une solution plus simple.

---

# 4. Valeurs du Projet

Toutes les décisions doivent respecter ces valeurs.

## Simplicité

Toujours privilégier les solutions les plus simples.

Ne jamais complexifier inutilement une fonctionnalité.

---

## Lisibilité

Le code doit être compréhensible plusieurs années plus tard.

Les noms de classes, méthodes et variables doivent être explicites.

---

## Maintenabilité

Chaque fonctionnalité doit pouvoir évoluer sans casser les autres.

---

## Sécurité

Les données utilisateur sont prioritaires.

Toute validation importante doit être réalisée côté backend.

---

## Performance

L'application doit fonctionner correctement même avec :

* une connexion lente ;
* un smartphone moyen de gamme ;
* une faible bande passante.

---

# 5. Philosophie Produit

G-School n'est pas une marketplace.

Les contenus sont :

* créés par des formateurs sélectionnés ;
* validés ;
* publiés par l'équipe G-School.

La qualité prime toujours sur la quantité.

---

# 6. Objectif de la V1

Le MVP doit rester volontairement simple.

Les priorités sont :

* authentification ;
* gestion des utilisateurs ;
* catalogue des cours ;
* vidéos ;
* progression ;
* quiz ;
* certificats G-School ;
* téléchargement offline (mobile plus tard) ;
* paiements ;
* administration.

Tout le reste est secondaire.

---

# 7. Ce qui n'entre PAS dans la V1

Ne jamais développer sans validation :

* Marketplace
* IA
* Live streaming
* Chat temps réel
* Réseau social
* Forum
* Gamification avancée
* Examens complexes
* Entreprises multi-organisations
* Multi-écoles

---

# 8. Méthode de Travail

Avant toute nouvelle fonctionnalité :

1. Comprendre le besoin.
2. Vérifier la documentation officielle.
3. Proposer la meilleure approche.
4. Attendre la validation si nécessaire.
5. Développer.
6. Vérifier la compilation.
7. Vérifier les tests.
8. Résumer les modifications.
9. Proposer le commit Git.

---

# 9. Documentation Officielle Obligatoire

Avant toute implémentation importante, toujours vérifier les recommandations les plus récentes.

Ne jamais se baser uniquement sur la mémoire du modèle lorsqu'une documentation officielle est disponible.

Toujours privilégier :

* documentation officielle ;
* recommandations officielles ;
* bonnes pratiques actuelles ;
* versions stables.

Sources principales :

* Spring Boot
* Spring Security
* Angular
* TypeScript
* PostgreSQL
* Maven
* Docker
* JWT

En cas de conflit entre une ancienne méthode et une méthode officielle récente :

Toujours choisir la méthode officiellement recommandée.

---

# 10. Dette Technique

Toujours éviter :

* duplication de code ;
* classes inutiles ;
* dépendances inutiles ;
* optimisation prématurée ;
* architecture trop complexe.

Toujours privilégier :

* code simple ;
* architecture claire ;
* faible couplage ;
* forte cohésion ;
* composants réellement réutilisables.

---

# 11. Communication

Lorsqu'un agent termine une tâche, il doit toujours expliquer :

* ce qui a été fait ;
* pourquoi ;
* les fichiers modifiés ;
* les impacts éventuels.

Ne jamais modifier silencieusement un comportement important.

---

# 12. Principe Fondamental

En cas de doute entre deux solutions :

Toujours choisir la plus simple si elle répond correctement aux besoins de la V1.

La simplicité est une fonctionnalité.
# 13. Architecture Générale

L'architecture officielle de G-School est une architecture 3-tiers.

```
Frontend Angular
        │
 REST API Spring Boot
        │
 PostgreSQL
```

Chaque couche possède une responsabilité claire.

Le frontend ne contient aucune logique métier importante.

Le backend contient toute la logique métier.

La base de données contient uniquement les données.

---

# 14. Architecture Backend

Le backend doit rester un monolithe modulaire.

Ne jamais créer de microservices pour la V1.

Package racine :

```
com.gschool.backend
```

Organisation recommandée :

```
config/
common/

auth/
user/
course/
module/
video/
quiz/
certificate/
payment/
notification/

exception/
security/
```

Chaque module contient si nécessaire :

```
controller
service
repository
entity
dto
mapper
validator
```

---

# 15. Architecture Frontend

Le frontend Angular doit suivre une architecture par fonctionnalités.

```
core/
shared/

features/
    auth/
    dashboard/
    courses/
    learning/
    certificates/
    profile/
    admin/
```

Les composants doivent être :

* petits
* lisibles
* réutilisables lorsque cela apporte une vraie valeur.

---

# 16. Base de Données

Base officielle :

PostgreSQL

Principes :

* noms explicites
* clés étrangères
* index lorsque nécessaire
* pas de duplication inutile

Ne jamais optimiser prématurément.

---

# 17. API REST

Toutes les API doivent respecter REST.

Exemple :

```
GET

POST

PUT

PATCH

DELETE
```

Les routes doivent être cohérentes.

Exemple :

```
/api/auth

/api/users

/api/courses

/api/modules

/api/videos

/api/quizzes

/api/certificates

/api/payments
```

---

# 18. Format des Réponses API

Toutes les réponses doivent être cohérentes.

Succès :

```
{
    success,
    message,
    data
}
```

Erreur :

```
{
    success,
    message,
    errors
}
```

Les messages doivent être compréhensibles.

---

# 19. Authentification

V1 :

* Email
* Téléphone
* Mot de passe

Plus tard :

JWT

L'authentification doit être entièrement gérée côté backend.

---

# 20. Autorisations

Rôles officiels :

```
ROLE_STUDENT

ROLE_TRAINER

ROLE_VALIDATOR

ROLE_ADMIN
```

L'administrateur peut également jouer le rôle de validateur.

Toutes les permissions importantes sont vérifiées côté backend.

Jamais uniquement côté frontend.

---

# 21. Sécurité

Toujours :

* valider les entrées utilisateur
* protéger les endpoints
* éviter les injections SQL
* éviter les XSS
* éviter les CSRF lorsque nécessaire
* protéger les mots de passe
* ne jamais stocker de secret dans Git

---

# 22. Standards de Code

Le code doit être :

* lisible
* documenté lorsque nécessaire
* cohérent
* simple

Toujours privilégier des méthodes courtes.

Éviter les classes énormes.

Éviter les méthodes de plusieurs centaines de lignes.

---

# 23. Gestion Git

Une fonctionnalité = un commit logique.

Messages de commit :

```
feat:

fix:

refactor:

docs:

test:

chore:
```

Exemples :

```
feat(auth): add user registration

fix(course): prevent duplicate enrollment

docs: update AGENTS.md
```

---

# 24. Avant chaque Commit

Toujours vérifier :

✓ Le projet compile.

✓ Aucun fichier inutile.

✓ Aucun mot de passe.

✓ Aucun secret.

✓ Aucun TODO oublié.

✓ Aucun debug.

---

# 25. Avant chaque Pull Request

Toujours vérifier :

* compilation

* cohérence

* lisibilité

* sécurité

* respect de l'architecture

* absence de duplication

---

# 26. Tests

Lorsque cela est pertinent :

Créer des tests.

Les nouvelles fonctionnalités importantes doivent être testées.

Les régressions doivent être évitées.

---

# 27. Documentation

Toute nouvelle fonctionnalité importante doit être documentée.

Le README doit rester à jour.

Les décisions importantes doivent être ajoutées dans AGENTS.md.
# 28. Décisions Produit Officielles

Cette section est vivante.

Chaque décision importante validée doit être ajoutée ici.

---

## Plateformes

### V1

* Frontend Web Angular
* Backend Spring Boot
* PostgreSQL

### Plus tard

* Flutter Android
* Flutter Desktop
* Flutter iOS

---

## Philosophie UX

Toujours privilégier :

* simplicité
* rapidité
* clarté
* peu de clics
* peu d'animations
* peu de bruit visuel

Objectif :

"L'utilisateur comprend l'application en moins d'une minute."

---

## Premiers cours officiels

### Cours 1

Bases de la cybersécurité / Se protéger en ligne

### Cours 2

Esprit critique

Cours futurs envisagés :

* Éducation financière
* Internet & réseaux sociaux intelligents
* Compétences numériques de base

---

## Structure d'un cours

Un cours peut contenir :

* miniature
* titre
* description
* modules
* vidéos
* résumés texte
* quiz

Pas d'examen final dans la V1.

---

## Quiz

Chaque module possède un quiz.

Le quiz doit être validé.

Si le quiz est échoué :

* l'utilisateur recommence le quiz
* les mêmes questions sont réutilisées dans la V1

---

## Progression

Une vidéo est considérée comme terminée lorsqu'elle est regardée à environ 90 % ou 95 %.

Les vidéos terminées doivent être clairement identifiées.

La progression est synchronisée avec le serveur.

---

## Certificats

Les certificats sont générés automatiquement.

Conditions :

* cours terminé
* tous les quiz validés

Le certificat contient :

* logo G-School
* mention G-School
* nom de l'apprenant
* nom du cours
* nom du formateur
* signature de la direction
* date
* identifiant unique

---

## Paiements

V1 :

* Orange Money
* MTN Mobile Money
* paiement manuel

---

## Offline Learning

Version mobile (future) :

* maximum 5 cours téléchargés
* vidéos uniquement
* lecture uniquement dans G-School
* plusieurs qualités vidéo
* synchronisation automatique de la progression

---

## Notifications

Notifications simples.

Jamais agressives.

Exemple :

"Tu avais commencé ton cours. Continue ton apprentissage aujourd'hui."

---

## Administration

L'administrateur peut :

* créer des cours
* modifier des cours
* supprimer des cours
* publier des cours
* gérer les utilisateurs
* gérer les paiements
* consulter les statistiques
* jouer le rôle de validateur pédagogique si nécessaire

---

# 29. Fonctionnalités Repoussées

Ces fonctionnalités ne doivent pas être développées sans validation explicite.

* IA
* Chat temps réel
* Marketplace
* Forum
* Live streaming
* Réseau social
* Gamification avancée
* Multi-écoles
* Entreprises SaaS
* Examens complexes
* Certification officielle avancée

---

# 30. Checklist Avant Développement

Toujours vérifier :

✓ Le besoin est compris.

✓ La solution est la plus simple possible.

✓ La documentation officielle a été consultée.

✓ L'architecture existante est respectée.

✓ Aucun doublon n'est créé.

✓ La sécurité est prise en compte.

---

# 31. Checklist Avant Livraison

Avant toute livraison :

✓ Le projet compile.

✓ Les tests passent.

✓ Aucun secret n'est présent.

✓ Aucun code mort.

✓ Aucun TODO oublié.

✓ Aucun debug.

✓ Les endpoints fonctionnent.

✓ La documentation est à jour.

✓ AGENTS.md est mis à jour si une décision importante a été prise.

---

# 32. Règle d'Or

Chaque ligne de code doit pouvoir répondre à cette question :

**"Est-ce que cette implémentation rend G-School plus simple, plus fiable et plus facile à maintenir ?"**

Si la réponse est NON, chercher une meilleure solution.

---

# 33. Devise Technique du Projet

> **Construire peu, mais construire bien.**

La qualité passe avant la quantité.

La simplicité passe avant la sophistication.

La maintenabilité passe avant la rapidité de développement.

---

# 34. Objectif Final

Construire une plateforme de formation africaine :

* simple
* rapide
* moderne
* sécurisée
* évolutive
* professionnelle
* facile à utiliser
* facile à maintenir

Chaque décision technique doit contribuer à cet objectif.
