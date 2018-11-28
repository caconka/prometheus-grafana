# Example prometheus-grafana

Instrumentation nodejs api with [Prometheus](https://prometheus.io/) and
[Grafana](https://grafana.com/)

## Steps
1. Run sample server: `npm install` and `npm start`
2. Run Prometheus
3. Run Grafana
4. Import `grafana-dashboard.json` dashboard

## Prometheus

### Run

Modify: `/prometheus-data/prometheus.yml`, replace `192.168.1.37` with your own host machine's IP.

```sh
docker run -p 9090:9090 -v "$(pwd)/prometheus-data":/prometheus-data prom/prometheus --config.file=/prometheus-data/prometheus.yml
```

Open Prometheus: [http://localhost:9090](http://localhost:9090/graph)

### Reload config

Necessary when you modified prometheus-data.

```sh
curl -X POST http://localhost:9090/-/reload
```

## Grafana

### Run

```sh
docker run -i -p 3000:3000 grafana/grafana
```

Open Grafana: [http://localhost:3000](http://localhost:3000)

```
Username: admin
Password: admin
```

### Setting datasource

Create a Grafana datasource with this settings:
+ name: DS_PROMETHEUS
+ type: prometheus
+ url: http://localhost:9090
+ access: direct (Browser)

### Setting dashboard

Grafana Dashboard to import: [/grafana-board.json](/grafana-board.json)
