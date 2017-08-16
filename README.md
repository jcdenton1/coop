# Dockerized NodeJS, MongoDB, React-Redux sample app

## Description

This project is supposed to give you a quick start if you want to create a NodeJS + MongoDB app using docker containers.  
You can run the sample app in no time, and then quickly focus on your code.  
The project was built on Ubuntu. If you run on Windows or another system, it can definitely work but you'll need to
create batch files similar to the shell scripts provided in the docker folder.

## Before build
1. Install docker & add user to docker user group:  
https://docs.docker.com/engine/installation/linux/ubuntu/  
https://docs.docker.com/engine/installation/linux/linux-postinstall/

2. add the following line to /etc/hosts:  
`127.0.0.1       admin mongodb`

## Build

`$ cd ./docker
$ ./build_images.sh
$ ./admin/compile.sh`

## Run

`$ cd ./docker
$ ./run.sh`

And you have a running app.  
Enter: http://admin:8080

You can also run the env with and load an existing mongodb dump:  
`$ ./run.sh [name of db] [dump path]`  
Sample dump is provided with the sample app:  
`$ ./run.sh testdb ./mongodb/dumps/testdb`  

## Logging

`tail -f ./admin/log.log`

Log contains:  
* All incoming requests to the server  
* All queries that are executed by the server to mongodb

## Details & Scripts
Docker images built in this project:  
* **admin**- webapp image,  
* **mongodb**- mongodb image.

Some scripts to build the images and run the containers are provided.  
You can also achieve this with docker-compose though IMO it's easier and more customizable to use your own scripts.

### Scripts inside /docker folder:
* `$ ./build_images.sh` - build docker images
* `$ ./remove_images.sh` - delete all containers and images
* `$ ./run.sh [name of db] [dump path]` - run all containers in the correct order and load an existing dump to mongodb 
    (admin container depends on mongodb). Running the script without arguments will just run the containers without 
    loading a dump.
* `$ ./kill_all.sh` - kill and remove all containers
* `$ ./admin/run.sh` - run admin container  
   Notice 2 important things about how we run admin container:  
   * We mount the app's code into the container. Thus every code change is immidiately reflected to the running container. Also the log.log file is reflected from the container. 
   * We pass the type of the environment as an ENV variable to the container.
* `$ ./admin/kill.sh` - kill admin container
* `$ ./admin/shell.sh` - enter admin container shell
* `$ ./admin/compile.sh` - get all webapp server and client dependencies
* `$ ./mongodb/run.sh` - run mongodb container
* `$ ./mongodb/kill.sh` - kill mongodb container
* `$ ./mongodb/wait.sh` - wait for mongodb to run and open ports
* `$ ./mongodb/shell.sh` - enter mongodb container shell
* `$ ./mongodb/create_dump.sh [db_name] [output_dump_path]` - Create dump from existing mongodb state
* `$ ./mongodb/load_dump.sh [db_name] [input_dump_path]` - load existing dump to mongo db: db_name
