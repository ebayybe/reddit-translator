# Journal des modifications

Toutes les modifications notables apportées à ce projet sont documentées dans ce fichier.

## [1.2.0]

### Ajouté
- Section « Mises à jour automatiques » dans le panneau des paramètres avec trois modes :
  - **Vérifier et ouvrir la mise à jour** — vérifie périodiquement la source de mise à jour fiable en arrière-plan et ouvre la page de mise à jour lorsqu'une version plus récente est trouvée
  - **Me notifier les mises à jour** — vérifie périodiquement et affiche uniquement une notification
  - **Désactiver les vérifications de mise à jour** — le script ne vérifie jamais de lui-même
- Bouton manuel « Vérifier les mises à jour », affiché à côté de la version actuelle du script (lue à partir des métadonnées du userscript)
- Texte explicatif clarifiant que la mise à jour automatique native de Tampermonkey/Violentmonkey est un mécanisme distinct non contrôlé par ce paramètre
- Système d'effets sonores (SFX) basé sur l'API native Web Audio, sans fichiers audio ni bibliothèques externes :
  - Interrupteur général d'activation/désactivation et contrôle du volume principal
  - 13 catégories de sons activables indépendamment (clics sur les boutons, traduction, copie, réécriture, panneau, onglets, paramètres, bascules, cache, historique, import/export, modes, traduction automatique)
  - Sons courts distincts pour différentes actions, et un bouton « Tester le son »
  - Totalement indépendant de toute fonctionnalité de synthèse vocale (TTS)
  - Délais de récupération (cooldowns) par événement pour éviter le spam sonore, y compris lors de la traduction automatique/par lots
- Vrais icônes de drapeaux SVG autonomes pour chaque langue prise en charge dans les sélecteurs de langue de l'interface et de traduction, remplaçant les drapeaux emoji Unicode. Les icônes sont directement intégrées dans le script ; rien n'est téléchargé sur le réseau pour les afficher
- Sons de clic distincts pour le bouton « Importer » et le bouton « Test » de DeepL

### Modifié
- La comparaison de versions pour les vérifications de mise à jour utilise une comparaison numérique appropriée des versions sémantiques (pas une comparaison de chaînes)

### Sécurité
- Les clés API DeepL sont exclues des fichiers de paramètres exportés
- L'importation d'un fichier de paramètres ne remplace plus les clés API stockées localement ; les clés ne peuvent être modifiées que via le champ dédié « Clés API DeepL »
- La configuration importée est validée champ par champ avant d'être appliquée (codes de langue, thème, moteur, plages numériques, paramètres sonores, mode de mise à jour) ; les valeurs invalides ou non reconnues sont ignorées et remplacées par des valeurs par défaut existantes/sûres au lieu d'être acceptées
- La source de mise à jour fiable est une valeur fixe dans le script et n'est pas configurable via les paramètres importés
- Les vérifications de mise à jour ne lisent qu'un numéro de version dans le texte du script récupéré ; aucun code téléchargé n'est exécuté à aucun moment

### Corrigé
- Disposition réactive pour la section Mises à jour automatiques, de sorte que les libellés localisés plus longs s'enroulent au lieu de déborder du panneau des paramètres

## [1.0.10]

### Ajouté
- 5 nouvelles langues d'interface : italien, portugais, coréen, vietnamien, arabe — l'interface prend désormais en charge 15 langues au total, avec chaque libellé, bouton, info-bulle et section (y compris DeepL et limites de requêtes) entièrement traduits
- La langue de l'interface est désormais automatiquement détectée à partir de la langue du navigateur/système lors de la première installation

### Modifié
- Les métadonnées de l'auteur et du dépôt ont été mises à jour pour refléter le mainteneur actuel
- Les sections Clés API DeepL et Limites de requêtes sont désormais entièrement localisées dans toutes les langues d'interface prises en charge (précédemment affichées en anglais quelle que soit la langue sélectionnée)
- Le curseur de délai de requête affiche désormais son unité de temps dans la langue correcte (ex. `ms`, `мс`, `毫秒`)
- Les sélecteurs de couleurs personnalisés mettent désormais correctement à jour leurs valeurs lors du changement de thème

### Supprimé
- Thème clair (les thèmes Sombre, Cyberpunk et Dracula restent disponibles)
- Sélecteur de couleur de texte (il n'affectait qu'une partie du texte de l'interface utilisateur, ce qui était trompeur)
- Synthèse vocale (TTS) — supprimée car elle ne fonctionnait pas correctement

### Corrigé
- Le lien d'aide DeepL pointait précédemment vers `api-free.deepl.com` ; pointe désormais correctement vers `deepl.com/pro-api`
- Le texte du bouton « Enregistrer les clés DeepL » était tronqué dans 6 langues d'interface (russe, ukrainien, allemand, français, espagnol, turc) ; libellés raccourcis pour s'adapter à toutes les tailles d'écran
- Le changement de thème ne laisse plus d'anciennes couleurs personnalisées appliquées sur le nouveau thème

[Voir la version](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.10)

## [1.0.9]

Contribution de [Dylan-ZQL](https://github.com/Dylan-ZQL). Vérifié en comparant les fichiers sources v1.0.0 et v1.0.9.

### Ajouté
- Moteur de traduction DeepL, aux côtés des moteurs Google et MyMemory existants
  - Prise en charge de plusieurs clés API DeepL avec rotation automatique et secours en cas d'échec d'une clé
  - Détection automatique des points de terminaison d'API Free vs Pro
  - Les textes me longs sont découpés en morceaux de la taille d'une requête avant la traduction
  - Limites de requêtes configurables : requêtes simultanées max., requêtes max. par seconde, caractères max. par requête, paragraphes max. par requête
- Traduction automatique lors du défilement : un `IntersectionObserver` supplémentaire traduit automatiquement le contenu au fur et à mesure qu'il entre dans la zone d'affichage, séparé de l'observateur d'injection différée de boutons existant
- Bouton de bascule « Afficher l'original / Afficher la traduction », permettant de basculer l'ensemble de la page entre le texte original et le texte traduit
- Préfixe de clé de stockage (`_x9_`) appliqué à chaque paramètre stocké pour éviter les collisions avec d'autres userscripts
- Fonctions d'échappement HTML de base et d'analyse JSON sécurisée utilisées dans l'ensemble du code de traduction/requête

### Modifié
- Réécriture de la file d'attente des requêtes de traduction : remplacement de la chaîne de délai fixe précédente par une file d'attente respectant la concurrence configurable et les limites de débit par seconde
- Redesign du bouton d'action flottant : remplacement du bouton étiqueté « TRANSLATE ALL », de la barre de progression et du bouton d'annulation par un seul bouton d'icône compact qui traduit le contenu visible lors d'un clic et ouvre le panneau des paramètres lors d'un double-clic
- La lecture de la synthèse vocale est désormais avec état : cliquer à nouveau sur « parler » sur le même texte arrête la lecture, le bouton actif est mis en valeur visuellement et la limite de tronquage précédente de 500 caractères a été supprimée

### Supprimé
- Raccourci clavier « Tout traduire » (`Ctrl+Shift+T`) et son paramètre de panneau — la traduction du contenu visible est désormais gérée par le bouton flottant repensé décrit ci-dessus

- [Voir la version](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.9)

## [1.0.0]

### Ajouté
- Version publique initiale

[Voir la version](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.0)
