<p style="text-align: center" align="center">
 <a href="https://tsed.io" target="_blank"><img src="https://tsed.io/tsed-og.png" width="200" alt="Ts.ED logo"/></a>
</p>

<div align="center">

   <hr />

[![Build & Release](https://github.com/tsedio/tsed/workflows/Build%20&%20Release/badge.svg)](https://github.com/tsedio/tsed/actions?query=workflow%3A%22Build+%26+Release%22)
[![PR Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/tsedio/tsed/blob/master/CONTRIBUTING.md)
[![Coverage Status](https://coveralls.io/repos/github/tsedio/tsed/badge.svg?branch=production)](https://coveralls.io/github/tsedio/tsed?branch=production)
[![npm version](https://badge.fury.io/js/%40tsed%2Fcommon.svg)](https://badge.fury.io/js/%40tsed%2Fcommon)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![github](https://img.shields.io/static/v1?label=Github%20sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/romakita)
[![opencollective](https://img.shields.io/static/v1?label=OpenCollective%20sponsor&message=%E2%9D%A4&logo=OpenCollective&color=%23fe8e86)](https://opencollective.com/tsed)

</div>

<div align="center">
  <a href="https://tsed.io/">Website</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://tsed.io/getting-started/">Getting started</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://api.tsed.io/rest/slack/tsedio/tsed">Slack</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://twitter.com/TsED_io">Twitter</a>
</div>

<hr />

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
