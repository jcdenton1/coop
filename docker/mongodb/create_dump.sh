#!/bin/bash

if [ "$#" -ne 2 ]; then
  echo "Usage: create_dump.sh [db_name] [output_dump_path]"
else 
  mongodump --db=$1 --out=$2
fi
