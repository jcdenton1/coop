#define app network
docker network create mynet
#build admin
cd ./admin/build
./build.sh
#build mongodb
cd ../../mongodb/build
./build.sh
