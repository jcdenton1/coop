#!/bin/bash

./kill_all.sh

#run mongodb
./mongodb/run.sh
./mongodb/wait.sh

#mongodb load dump
if [ "$#" -eq 2 ]; then
  ./mongodb/load_dump.sh $1 $2
fi

#run admin
./admin/run.sh
