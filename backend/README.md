# Backend – Nubisoft Weather App

Aplikacja backendowa odpowiedzialna za pobieranie danych pogodowych z zewnętrznego API oraz ich udostępnianie w formacie JSON dla aplikacji frontendowej.

## Funkcjonalności

- Pobieranie aktualnej pogody w Gliwicach i Hamburgu
- Pobieranie prognozy pogody na kolejne dni dla obu miast
- Udostępnianie danych w formacie JSON poprzez REST API

Aplikacja korzysta z zewnętrznego serwisu pogodowego [https://www.weatherapi.com/](https://www.weatherapi.com/) i udostępnia dane pod dwoma endpointami:

- `GET /api/realtime-weather` – zwraca aktualną pogodę dla Gliwic i Hamburga
- `GET /api/forecast-weather` – zwraca prognozę pogody na nadchodzące dni

## Uruchomienie aplikacji

Aby uruchomić backend lokalnie, należy wykonać poniższe polecenia:

`cd backend/expressjs`

`npm install`

`npm run dev`

Domyślnie backend będzie dostępny pod adresem 

`http://localhost:5000`

Backend można również uruchomić jako część całego systemu (frontend + backend) za pomocą Dockera, wykonując w katalogu głównym projektu:

`docker-compose up --build`
