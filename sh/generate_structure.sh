#!/bin/bash

# Funzione ricorsiva per esplorare la directory
generate_structure() {
    local dir=$1
    local prefix=$2

    echo "Esplorando la directory: $dir"

    # Lista dei file e delle cartelle nella directory corrente
    for file in "$dir"/*; do
        # Ignora le directory .git e node_modules
        if [[ "$(basename "$file")" == ".git" || "$(basename "$file")" == "node_modules" ]]; then
            echo "Ignorando la directory: $(basename "$file")"
            continue
        fi

        if [ -d "$file" ]; then
            echo "${prefix}├── $(basename "$file")/"
            generate_structure "$file" "${prefix}│   "
        elif [ -f "$file" ]; then
            echo "${prefix}├── $(basename "$file")"
        fi
    done
}

# Usa la directory specificata come primo argomento, altrimenti usa la directory corrente
project_dir=${1:-.}

echo "Inizio dell'esplorazione della directory: $project_dir"
echo "----------------------------------------"

# Genera la struttura del progetto
structure=$(generate_structure "$project_dir" "")

# Scrive la struttura nel file README.md
echo -e "# Struttura del Progetto\n\n\`\`\`\n$structure\n\`\`\`" > README_str.md

echo "----------------------------------------"
echo "Struttura del progetto generata con successo nel file README.md"
