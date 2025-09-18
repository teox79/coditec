#!/bin/bash
# Wrapper script chiamato da npm (rename-images)
# Si limita a invocare lo script principale di rinomina in modalità interattiva

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]:-$0}")" && pwd)"
exec "$SCRIPT_DIR/rename_gallery_sequential.sh" "$@"
