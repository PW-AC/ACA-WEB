# ACENCIA Monorepo

## Struktur

- `backend` FastAPI Service mit MongoDB (Motor)
- `frontend` React (CRA + CRACO + Tailwind)

## Schnellstart (Entwicklung)

1) Backend starten

```bash
cd backend
export MONGO_URL="mongodb://localhost:27017" # oder Produktions-URL
export DB_NAME="acencia"
export CORS_ORIGINS="http://localhost:3000"
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

2) Frontend starten

```bash
cd frontend
cp -n .env.example .env || true
yarn install
yarn start
```

Standard-URLs:
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:8000`

CRA-Proxy und `setupProxy.js` leiten `/api`-Requests automatisch an das Backend weiter. Alternativ `REACT_APP_BACKEND_URL` in `.env` setzen.

## API Kurzüberblick

- `GET /api/` Hello World
- `GET /api/healthz` Healthcheck `{ status, db }`
- `POST /api/status` Body: `{ client_name }`
- `GET /api/status` Liste StatusChecks
- `POST /api/contact` Body: `{ name, email, company?, message }`

## Tests

```bash
python backend_test.py
python contact_test.py
```

## Modell-Empfehlung

- Entwicklung/Refactor: **GPT-5 normal** genügt
- Komplexe Architektur/Performance-Analysen: **GPT-5 High**
- Günstige Batch-Aufgaben: **Claude Sonnet/Haiku** je nach Verfügbarkeit

