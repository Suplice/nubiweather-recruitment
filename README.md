# Nubisoft Weather App

Aplikacja webowa umożliwiająca sprawdzenie aktualnej pogody oraz prognozy pogody dla dwóch miast: Gliwice i Hamburg.

## Funkcjonalności

- Sprawdzenie aktualnej pogody w Gliwicach i Hamburgu
- Sprawdzenie prognozy pogody na nadchodzące dni w obu miastach

## Architektura

Aplikacja składa się z dwóch części:

- **Frontend** – strona internetowa dostępna z poziomu przeglądarki
- **Backend** – serwer pośredniczący między frontendem a zewnętrznym API pogodowym

Frontend komunikuje się z backendem za pomocą dwóch endpointów:

- `GET /api/realtime-weather` – aktualna pogoda
- `GET /api/forecast-weather` – prognoza pogody

## Sposoby uruchomienia

Aplikację można uruchomić na dwa sposoby:

### 1. Oddzielnie frontend i backend

Szczegółowe instrukcje uruchomienia znajdują się w plikach `README.md` w katalogach `frontend` oraz `backend`.

### 2. Za pomocą Dockera

Aby uruchomić całą aplikację (frontend i backend) w środowisku Docker, wystarczy wykonać poniższą komendę w głównym katalogu projektu:

`docker compose up --build`

Po zakończeniu procesu budowania i uruchomienia, aplikacja będzie dostępna lokalnie w przeglądarce. Domyślny adres to: 

`http://localhost:3000`
