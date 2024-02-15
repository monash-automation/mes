# Manufacturing Execution System

## Run

```shell
sudo docker compose up -d
```

Or

```shell
sudo docker compose up -d redis # Bridge OPC UA and Grafana
sudo docker compose up -d db # Database for printer server
sudo docker compose up -d opcua-server
sudo docker compose up -d printing-server
sudo docker compose up -d grafana # Dashboard
```