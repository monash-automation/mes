# Manufacturing Execution System

## Run

Grafana may complain about no permission to modify `/var/lib/grafana`, we need to add your user id (`id -u`)
under grafana service:

Note: `tee` is used because `sed -i` may not work in macOS.

```shell
user_id=$(id -u) && sed -e "s/MY_USER_ID/\"${user_id}\"/g" compose.yaml | tee compose.yaml
```

Then run all services:

```shell
sudo docker compose up -d
```

Or run services according to dependencies:

```shell
sudo docker compose up -d db # Database for printer server
sudo docker compose up -d opcua-server
sudo docker compose up -d printing-server # depends on db and opcua-server
sudo docker compose up -d printing-service # Dashboard, depends on printing-server
sudo docker compose up -d redis # Bridge OPC UA and Grafana (Deprecated)
sudo docker compose up -d grafana # Old version dashboard (Deprecated)
```

## Update

```shell
sudo docker compose down printing-service
sudo docker image rm mes-printing-service
sudo docker compose up -d printing-service

sudo docker compose down printing-server
sudo docker image rm mes-printing-server
sudo docker compose up -d printing-server

sudo docker compose down opcua-server
sudo docker image rm mes-opcua-server
sudo docker compose up -d opcua-server
```

## Dashboard

![dashboard.png](docs/dashboard.png)
