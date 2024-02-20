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

Or run services one by one:

```shell
sudo docker compose up -d redis # Bridge OPC UA and Grafana
sudo docker compose up -d db # Database for printer server
sudo docker compose up -d opcua-server
sudo docker compose up -d printing-server
sudo docker compose up -d grafana # Dashboard
```

## Update

```shell
sudo docker compose down printing-server
sudo docker image rm mes-printing-server
sudo docker compose up -d printing-server

sudo docker compose down opcua-server
sudo docker image rm mes-opcua-server
sudo docker compose up -d opcua-server
```