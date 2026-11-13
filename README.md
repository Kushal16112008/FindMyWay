# FindMyWay — ROUTELESS Rural Mobility

AI-assisted rural student transportation for disrupted routes, limited bus capacity, and time-critical school travel.

> **Demo status:** This starter uses deterministic sample data. Bus positions, road conditions, demand, and assignments are not live feeds and must not be used for real dispatch.

## What this starter includes
- Map-led operations dashboard using Leaflet and OpenStreetMap tiles
- Sample villages, schools, buses, pickup points, and a flooded-road incident
- A deterministic capacity-aware allocation proposal
- Exam deadline and unserved-student visibility
- English/Hindi language toggle for core labels
- Text/list alternative to the map
- Human review before dispatch; no automatic dispatch or notifications

## Run locally
Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Safety and integration boundary
- Sample vehicle locations and incidents are clearly labelled as simulated.
- The demo blocks the flooded road in its illustrative route logic; it does not calculate verified road-safe navigation.
- Do not send students onto closed or unverified roads.
- Dispatch, pickup confirmation, and family notifications require a human operator and real integrations.
- Production deployment needs verified routing/road-closure feeds, vehicle GPS, operator authentication, student-minimal demand data, and validated language/speech services.

## Planned structure
```text
FindMyWay/
├── index.html
├── styles.css
├── app.js
├── data/demo-data.js
├── docs/architecture.md
├── tests/allocation.test.js
├── .gitignore
└── LICENSE
```

## License
MIT. See `LICENSE`.
