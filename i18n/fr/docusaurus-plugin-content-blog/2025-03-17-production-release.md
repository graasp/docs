---
title: 17 mars, Mises à jour
description: Updates to the Graasp platform
date: '2025-03-17'
authors:
  - graasp
---

L'équipe travaille actuellement sur une refonte importante du serveur. En attendant, profitez des corrections de bugs qui nous ont été signalés. Pour en savoir plus, lisez la suite.

<!-- Everything below this will not be shown in the post overview -->

<!-- truncate -->

## Correction d'un problème avec le téléchargement automatique de fichiers PDF dès l'ouverture de l'élément

Suite au retour d'un utilisateur, un bug gênant a été détecté. Ce bug affectait les éléments PDF créés par copie. Les fichiers PDF copiés se téléchargeaient automatiquement à l'ouverture (dans les vues Builder et Player) au lieu de s'afficher normalement, ce qui causait des désagréments et des problèmes de lisibilité.

Nous avons déployé un correctif qui garantira que les copies futures ne seront pas affectées. Ainsi, si vous copiez un fichier PDF dès aujourd'hui, vous ne devriez pas être affecté par ce bug. Si le bug persistait, n'hésitez pas à nous le signaler (voir email de contact en bas de page).

:::info[How do I stop my PDF files from automatically downloading when I open them?]

Si vous possédez des fichiers PDF présentant un comportement défectueux, téléchargez-les, puis supprimez la copie défectueuse. Recréez-les en téléversant le PDF téléchargé ou en le créant par copie à partir d'un fichier original non affecté par le comportement incorrect. Une fois le téléchargement terminé, le fichier PDF ne devrait plus se télécharger automatiquement à l'ouverture.

:::

## Fixed an issue affecting sub-elements not displaying in the Trash

Lors de la suppression d'un élément avec un parent (sous-élément), dans certaines conditions, celui-ci n'apparaissait pas dans la corbeille. Ce problème affectant les utilisateurs de manière significative, l'équipe l'a rapidement corrigé. Les utilisateurs devraient désormais pouvoir consulter et restaurer les sous-éléments depuis la corbeille afin de récupérer du contenu supprimé par erreur. Il est important de noter que le nombre total d'éléments supprimés affiché peut être incorrect (le nombre affiché peut être plus élevé que prévu). Un correctif pour ce problème sera bientôt disponible.

## Divers

### Library (details)

- Correction de la taille des vignettes de cartes dans le navigateur Safari
- Correction du remplissage des cartes sur les écrans mobiles

### Backend (details)

- Implémentation de la possibilité de supprimer et créer plusieurs fichiers à la fois
- Correction de la copie erronée des fichiers (chemin, supprimer la disposition automatique du contenu en pièce jointe et le contrôle du cache)
- Correction de l'affichage des enfants supprimés dans la corbeille (dont les droits d'accès sont hérités). Le compte total peut être supérieur à la réalité.
- Correction de l'URL du lien envoyé dans l'e-mail de notification d'une demande d'adhésion

<!-- Generic message -->

We warmly welcome and encourage feedback from our users to continuously improve our platform. You can contact us by email [admin@graasp.org](mailto:admin@graasp.org) or by submitting an issue in this [Github repository](https://github.com/graasp/graasp-feedback).
