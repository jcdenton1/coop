#!/bin/bash

if [ "$#" -ne 2 ]; then
  echo "Usage: load_dump.sh [db_name] [input_dump_path]"
else 
  mongorestore -d $1 $2
fi
