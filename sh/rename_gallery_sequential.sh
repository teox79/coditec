#!/bin/bash

# Script semplificato per rinominare sequenzialmente i file nella gallery
# Utilizzo: ./rename_gallery_sequential.sh

GALLERY_DIR="../public/assets/img/gallery"

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

# Rinomina usando directory temporanea
temp_dir=$(mktemp -d)
counter=1

# Prima fase: sposta in temp
for file in "${valid_files[@]}"; do
    ext="${file##*.}"
    mv "$file" "$temp_dir/temp_$counter.$ext"
    ((counter++))
done

# Seconda fase: rinomina sequenzialmente
counter=1
for temp_file in "$temp_dir"/temp_*; do
    [ -f "$temp_file" ] || continue
    ext="${temp_file##*.}"
    mv "$temp_file" "./$counter.$ext"
    echo "✅ Creato: $counter.$ext"
    ((counter++))
done

rmdir "$temp_dir"

echo ""
echo "🎉 Rinomina completata! File rinumerati da 1 a $((counter-1))"
echo ""
echo "📁 Nuova lista file:"
ls -1 *.{jpg,jpeg,png,gif,webp} 2>/dev/null | sort -V