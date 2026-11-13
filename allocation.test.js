// Lightweight invariant checks for the illustrative sample allocation.
const buses = [
  {capacity:32, assigned:30},{capacity:28,assigned:28},
  {capacity:26,assigned:24},{capacity:24,assigned:24},
  {capacity:22,assigned:22}
];
if (!buses.every(b => b.assigned <= b.capacity)) throw new Error("Capacity exceeded");
const seats = buses.reduce((n,b)=>n+b.assigned,0);
if (seats !== 128) throw new Error(`Unexpected assigned total: ${seats}`);
const demand = 168;
if (demand - seats !== 40) throw new Error("Unserved demand mismatch");
console.log("Allocation invariants passed.");
