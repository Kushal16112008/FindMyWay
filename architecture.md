# Architecture and operational boundaries

## Demo flow
1. Render the OpenStreetMap base map.
2. Overlay sample villages, schools, vehicles, and a flooded-road closure.
3. Show a deterministic proposed allocation with seat counts.
4. Surface unserved demand (36 in the sample) rather than silently overbooking.
5. Require operator review before any dispatch-like action.

## Production services still required
- Authenticated dispatcher, school coordinator, driver, and family roles.
- Verified vehicle GPS feed and timestamp/last-known-position display.
- Road closure and routing data with explicit confidence and source timestamps.
- Routing engine configured for vehicle access, road restrictions, and pickup feasibility.
- Allocation optimizer that checks capacity, travel-time estimates, exam deadlines, and unserved demand.
- Consent-aware, minimal student demand data and retention controls.
- Verified Hindi/English and regional speech services; language and dialect coverage must be tested individually.
- SMS/voice/WhatsApp provider and delivery receipts, if approved.

## Safety rules
- Never dispatch based solely on an AI recommendation.
- Never route across a closed or unverified road.
- Mark stale or simulated data.
- Keep student identity out of aggregate operational views unless necessary.
- Show infeasible or uncertain trips as unresolved for human review.
