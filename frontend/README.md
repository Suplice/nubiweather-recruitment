# Frontend – Nubisoft Weather App

Aplikacja frontendowa odpowiedzialna za prezentację aktualnej i prognozowanej pogody dla dwóch miast: Gliwice oraz Hamburg.

## Funkcjonalności

- Wyświetlanie **aktualnej pogody** w Gliwicach i Hamburgu
- Wyświetlanie **prognozy pogody** na kolejne dni dla obu miast

Aplikacja komunikuje się z backendem za pomocą dwóch endpointów:

- `GET /api/realtime-weather` – pobiera dane o aktualnej pogodzie
- `GET /api/forecast-weather` – pobiera prognozę pogody na nadchodzące dni

## Uruchomienie aplikacji

Aby uruchomić frontend lokalnie:

`cd frontend/next-ts`

`npm install`

`npm run dev`

Następnie otwórz przeglądarkę i przejdź pod adres:

`http://localhost:3000`

Aplikacja korzysta z backendu, dlatego zalecanym sposobem uruchomienia całego projektu jest użycie Dockera. W katalogu głównym projektu wystarczy wykonać:

`docker-compose up --build`

jeśli chcesz uruchomić frontend bez użycia Dockera, pamiętaj o wcześniejszym uruchomieniu backendu lokalnie. Instrukcje dotyczące uruchomienia backendu znajdziesz w pliku README.md w katalogu backend.
