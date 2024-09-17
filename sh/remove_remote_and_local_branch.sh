#!/bin/bash

# Nome del repository remoto (modifica se il remote è diverso da 'origin')
REMOTE="origin"

# Branch da escludere dalla cancellazione
EXCLUDE_BRANCHES=("main" "gh-pages")

# Ottenere tutti i branch remoti
echo "Recupero dei branch remoti da $REMOTE..."
REMOTE_BRANCHES=$(git branch -r | grep "$REMOTE/" | sed "s|$REMOTE/||")

# Se non ci sono branch remoti
if [ -z "$REMOTE_BRANCHES" ]; then
  echo "Nessun branch remoto trovato. Esci."
  exit 0
fi

# Funzione per verificare se un branch è da escludere
is_excluded_branch() {
  local branch=$1
  for exclude in "${EXCLUDE_BRANCHES[@]}"; do
    if [[ "$branch" == "$exclude" ]]; then
      return 0 # Trovato nella lista, escludi
    fi
  done
  return 1 # Non è nella lista, non escludere
}

# Cancella tutti i branch remoti tranne quelli esclusi
echo "Inizio la cancellazione dei branch remoti..."
for branch in $REMOTE_BRANCHES; do
  if ! is_excluded_branch "$branch"; then
    echo "Eliminazione del branch remoto: $branch"
    git push "$REMOTE" --delete "$branch" && echo "Branch $branch eliminato con successo." || echo "Errore durante l'eliminazione del branch $branch."
  else
    echo "Branch $branch escluso dalla cancellazione."
  fi
done

# Aggiornare i riferimenti locali, rimuovendo i branch remoti eliminati
echo "Aggiornamento dei riferimenti locali e rimozione dei branch remoti eliminati..."
git fetch --prune && echo "Aggiornamento completato." || echo "Errore durante l'aggiornamento dei riferimenti locali."

echo "Pulizia dei branch completata."
