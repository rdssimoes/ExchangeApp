# ExchangeApp

O propósito desse projeto é disponibilizar o valor em reais na conversão para outra moeda na cotação do dia e com acréscimo de uma taxa que é configurada por segmento. 

## Projeto

No projeto é utilizado:
 - Angular
 - .Net Core
 - Microsoft SQL Server
 - Dapper ORM
 - Docker

O projeto esta dividio em duas parte, a primeira que é em Angular esta a interface onde é possivel consultar e editar as taxa de conversão que é a parte de adminstração da solução e tambem a parte que pega os dados de conversão e exibe o resultado que é a soma total dos custos da operação.
A segunda parte esta a API em .Net Core que tem todo o controle de acesso a base de dados, dividida em camadas a API faz o acesso aos dados e repassa para a interface. Faz acesso a API de exchange para pegar o valor da moeda em tempo real e assim fazer o calculo.

## Estrutura

E está dividido em camada:
  - Domain
  - Infrastructure
  - Service
  - UI

