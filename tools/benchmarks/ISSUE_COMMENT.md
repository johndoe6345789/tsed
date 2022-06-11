# Benchmarks

- **Machine:** darwin arm64 | 8 vCPUs | 32.0GB Mem
- **Node:** `v16.13.1`
- **Run:** Sat Jun 18 2022 12:02:32 GMT+0200 (Central European Summer Time)
- **Method:** `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          |  Version | Router | Requests/s | Latency | Throughput/Mb |
| :----------------------- | -------: | -----: | :--------: | ------: | ------------: |
| nest-fastify             |    8.4.3 |      ✓ |  54512.0   |   19.85 |          9.15 |
| micro                    |    9.3.4 |      ✗ |  54128.0   |   20.61 |          9.65 |
| micro-route              |    2.5.0 |      ✓ |  53360.0   |   20.48 |          9.51 |
| connect                  |    3.7.0 |      ✗ |  52816.0   |   21.29 |          9.42 |
| connect-router           |    1.3.7 |      ✓ |  52080.0   |   20.80 |          9.29 |
| fastify                  |   3.29.0 |      ✓ |  44560.0   |   26.40 |          7.95 |
| koa                      |   2.13.4 |      ✗ |  41552.0   |   26.36 |          7.41 |
| restify                  |    8.6.1 |      ✓ |  41104.0   |   26.45 |          7.41 |
| microrouter              |    3.1.3 |      ✓ |  31288.0   |   34.26 |          5.58 |
| koa-router               |   10.1.1 |      ✓ |  21464.0   |   45.99 |          3.83 |
| hapi                     |   20.2.2 |      ✓ |  18984.0   |   52.02 |          3.39 |
| tsed-no-context          | 6.114.17 |      ✓ |  10332.0   |   97.34 |          1.73 |
| express-route-prefix     |   4.18.1 |      ✓ |   9836.0   |  105.22 |          3.64 |
| express                  |   4.18.1 |      ✓ |   9428.0   |  104.67 |          1.68 |
| koa-isomorphic-router    |    1.0.1 |      ✓ |   9420.0   |  105.48 |          1.68 |
| express-with-middlewares |   4.18.1 |      ✓ |   8252.0   |  126.82 |          3.07 |
| tsed-koa                 | 6.114.17 |      ✓ |   8062.0   |  127.92 |          1.57 |
| nest                     |    8.4.3 |      ✓ |   7774.0   |  126.85 |          1.77 |
| fastify-big-json         |   3.29.0 |      ✓ |   6174.0   |  159.38 |         71.03 |
| tsed-express             | 6.114.17 |      ✓ |   4686.0   |  209.34 |          1.00 |
