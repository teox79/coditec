#!/bin/bash

# Colori
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Percorso della cartella contenente i file
DIR="./public/assets/img/gallery"
# Percorso del file gallery.ts
GALLERY_TS="./src/data/gallery.ts"

echo -e "${YELLOW}Inizio processo di rinominazione dei file nella cartella: $DIR${NC}"

# Trova l'ultimo numero usato nei file
last_number=$(ls "$DIR" | grep -E '^[0-9]+\.jpg$' | sort -n | tail -n 1 | sed 's/\.jpg//')

# Se non ci sono file numerati, inizia da 1
if [[ -z $last_number ]]; then
    last_number=0
    echo -e "${YELLOW}Nessun file numerato trovato, iniziamo da 1.${NC}"
else
    echo -e "${GREEN}Ultimo numero trovato: $last_number${NC}"
fi

# Incrementa per iniziare a rinominare dal prossimo numero
next_number=$((last_number + 1))

# Rinominare i file che non sono numerati
for file in "$DIR"/*; do
    # Estrai solo il nome del file senza estensione e percorso
    filename=$(basename "$file")
    
    # Verifica se il file non è già numerato
    if ! [[ "$filename" =~ ^[0-9]+\.jpg$ ]]; then
        # Mostra messaggio prima della rinominazione
        echo -e "${YELLOW}Rinomino file: $filename in $next_number.jpg${NC}"
        
        # Rinominare il file con il prossimo numero disponibile
        mv "$file" "$DIR/$next_number.jpg"
        
        # Mostra messaggio dopo la rinominazione
        if [[ $? -eq 0 ]]; then
            echo -e "${GREEN}File rinominato con successo: $filename -> $next_number.jpg${NC}"
        else
            echo -e "${RED}Errore nella rinominazione di $filename${NC}"
        fi
        
        # Incrementa il numero
        next_number=$((next_number + 1))
    else
        echo -e "${GREEN}$filename è già numerato, lo salto.${NC}"
    fi
done

# Aggiornare il file gallery.ts con l'ultimo numero
if [[ -f $GALLERY_TS ]]; then
    sed -i -E "s/createImagesArray\([0-9]+\)/createImagesArray($last_number)/" "$GALLERY_TS"
    if [[ $? -eq 0 ]]; then
        echo -e "\033[32mFile gallery.ts aggiornato con createImagesArray($last_number)\033[0m"
    else
        echo -e "\033[31mErrore nella modifica di gallery.ts\033[0m"
    fi
else
    echo -e "\033[31mIl file gallery.ts non esiste nel percorso specificato: $GALLERY_TS\033[0m"
fi


echo -e "${GREEN}Processo completato.${NC}"
