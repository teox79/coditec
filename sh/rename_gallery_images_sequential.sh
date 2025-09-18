#!/bin/bash

# Script per rinominare sequenzialmente i file immagini nella cartella gallery
# I file vengono rinominati da 1.ext a n.ext mantenendo l'estensione originale

# Percorso della cartella gallery
GALLERY_DIR="$(dirname "$0")/../public/assets/img/gallery"

# Verifica che la directory esista
if [ ! -d "$GALLERY_DIR" ]; then
    echo "Errore: La directory $GALLERY_DIR non esiste!"
    exit 1
fi

# Vai nella directory gallery
cd "$GALLERY_DIR" || exit 1

echo "Rinomino i file nella directory: $(pwd)"

# Conta i file immagine presenti
total_files=$(find . -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.webp" \) | wc -l)

if [ "$total_files" -eq 0 ]; then
    echo "Nessun file immagine trovato nella directory!"
    exit 1
fi

echo "Trovati $total_files file immagine da rinominare..."

# Crea una directory temporanea per evitare conflitti di nomi
temp_dir=$(mktemp -d)
echo "Directory temporanea: $temp_dir"

# Sposta tutti i file nella directory temporanea con nomi univoci
counter=1
for file in *.jpg *.jpeg *.png *.gif *.webp; do
    # Controlla se il file esiste (evita problemi con glob che non matcha)
    if [ -f "$file" ]; then
        # Ottieni l'estensione del file
        extension="${file##*.}"
        # Sposta nella directory temporanea con nome temporaneo
        mv "$file" "$temp_dir/temp_${counter}.${extension}"
        echo "Spostato $file -> temp_${counter}.${extension}"
        ((counter++))
    fi
done

# Ora rinomina sequenzialmente dalla directory temporanea
counter=1
for temp_file in "$temp_dir"/temp_*; do
    if [ -f "$temp_file" ]; then
        # Ottieni l'estensione del file temporaneo
        temp_name=$(basename "$temp_file")
        extension="${temp_name##*.}"
        
        # Sposta il file dalla directory temporanea alla directory originale con il nuovo nome
        new_name="${counter}.${extension}"
        mv "$temp_file" "./$new_name"
        echo "Rinominato in: $new_name"
        ((counter++))
    fi
done

# Rimuovi la directory temporanea
rmdir "$temp_dir"

echo ""
echo "Rinomina completata! I file sono stati rinumerati da 1 a $((counter-1))"
echo ""
echo "File presenti nella gallery:"
ls -la *.jpg *.jpeg *.png *.gif *.webp 2>/dev/null | sort -V