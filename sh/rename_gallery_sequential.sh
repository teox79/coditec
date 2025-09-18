#!/bin/bash

# Script semplificato per rinominare sequenzialmente i file nella gallery
# Utilizzo: ./rename_gallery_sequential.sh

# Resolve script directory so paths work regardless of current working directory
# Use BASH_SOURCE if available (when running under bash), otherwise fall back to $0
SCRIPT_PATH="${BASH_SOURCE[0]:-$0}"
SCRIPT_DIR="$(cd "$(dirname "$SCRIPT_PATH")" && pwd)"
GALLERY_DIR="$SCRIPT_DIR/../public/assets/img/gallery"

echo "=== Script di Rinomina Gallery Sequenziale ==="
echo "Directory target: $GALLERY_DIR"
echo ""

# Verifica directory
if [ ! -d "$GALLERY_DIR" ]; then
    echo "❌ Errore: Directory $GALLERY_DIR non trovata!"
    exit 1
fi

cd "$GALLERY_DIR"

# Lista file attuali
echo "📁 File attuali nella gallery:"
ls -1 *.{jpg,jpeg,png,gif,webp} 2>/dev/null | sort -V | head -10
echo ""

# Conta file
file_count=$(ls *.{jpg,jpeg,png,gif,webp} 2>/dev/null | wc -l)
echo "📊 Totale file trovati: $file_count"

if [ "$file_count" -eq 0 ]; then
    echo "❌ Nessun file immagine trovato!"
    exit 1
fi

# Conferma
read -p "🤔 Vuoi procedere con la rinomina? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Operazione annullata."
    exit 1
fi

echo ""
echo "🔄 Inizio rinomina..."

# Crea array con tutti i file
files=(*.{jpg,jpeg,png,gif,webp})
valid_files=()

# Filtra solo i file esistenti
for file in "${files[@]}"; do
    [ -f "$file" ] && valid_files+=("$file")
done

total=${#valid_files[@]}

if [ "$total" -eq 0 ]; then
    echo "❌ Nessun file immagine valido trovato (estensioni supportate: jpg jpeg png gif webp)"
    exit 1
fi

# Calcola padding (numero di zeri) in base al totale
# se total < 10 -> width=1, <100 -> width=2, <1000 -> width=3, ecc.
width=${#total}
# Ensure width is at least 1
if [ "$width" -lt 1 ]; then
  width=1
fi

echo "🔢 Totale file validi: $total -> padding width: $width"

read -p "🤔 Vuoi fare prima una simulazione (dry-run)? (Y/n): " -n 1 -r
echo
dryrun=false
if [[ $REPLY =~ ^[Nn]$ ]]; then
  dryrun=false
else
  dryrun=true
fi

echo ""
echo "🔄 Inizio preparazione rinomina..."

# Ordina i file naturalmente (version sort) per preservare ordine umano
IFS=$'\n' sorted=( $(printf "%s\n" "${valid_files[@]}" | sort -V) )

# Usa directory temporanea per evitare collisioni
temp_dir=$(mktemp -d)
counter=1

# Prima fase: sposta in temp con nome intermedio
for file in "${sorted[@]}"; do
    ext="${file##*.}"
    mv -- "$file" "$temp_dir/temp_$counter.$ext"
    ((counter++))
done

# Seconda fase: rinomina con padding
counter=1
for temp_file in "$temp_dir"/temp_*; do
    [ -f "$temp_file" ] || continue
    ext="${temp_file##*.}"
    # printf with leading zeros according to width
    newname=$(printf "%0${width}d.%s" "$counter" "$ext")
    if [ "$dryrun" = true ]; then
        echo "DRY-RUN: $temp_file -> ./$(basename "$newname")"
    else
        mv -- "$temp_file" "./$newname"
        echo "✅ Creato: $newname"
    fi
    ((counter++))
done

if [ "$dryrun" = true ]; then
    echo ""
    echo "🔎 Dry-run completata. Nessun file è stato modificato." 
    echo "Se vuoi applicare le modifiche, riesegui lo script e rispondi 'n' alla domanda di dry-run."
    # ripulisci temp e ripristina files (spostandoli indietro)
    for temp_file in "$temp_dir"/temp_*; do
        [ -f "$temp_file" ] || continue
        orig_index=${temp_file##*_}
        orig_index=${orig_index%.*}
        orig_file=${sorted[$((orig_index-1))]}
        mv -- "$temp_file" "$orig_file"
    done
    rmdir "$temp_dir"
    exit 0
fi

rmdir "$temp_dir"

echo ""
echo "🎉 Rinomina completata! File rinumerati da $(printf "%0${width}d" 1) a $(printf "%0${width}d" $((counter-1)))"
echo ""
echo "📁 Nuova lista file:"
ls -1 *.{jpg,jpeg,png,gif,webp} 2>/dev/null | sort -V