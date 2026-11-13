// Deterministic demo data. Coordinates are illustrative and are NOT live vehicle positions.
window.DEMO = {
  center: [13.12, 77.42],
  villages: [
    {name:"Kerehalli",lat:13.135,lng:77.385,demand:34},
    {name:"Honnaghatta",lat:13.105,lng:77.385,demand:28},
    {name:"Mavinakere",lat:13.145,lng:77.465,demand:31},
    {name:"Doddamudigere",lat:13.085,lng:77.455,demand:27},
    {name:"Kallur",lat:13.115,lng:77.49,demand:48}
  ],
  schools:[{name:"Government PU College",lat:13.12,lng:77.435},{name:"Taluk Examination Centre",lat:13.095,lng:77.42}],
  buses:[
    {id:"BUS-01",name:"North Shuttle",capacity:32,assigned:30,cluster:"Kerehalli"},
    {id:"BUS-02",name:"East Connector",capacity:28,assigned:28,cluster:"Mavinakere"},
    {id:"BUS-03",name:"South Link",capacity:26,assigned:24,cluster:"Doddamudigere"},
    {id:"BUS-04",name:"Central Mini",capacity:24,assigned:24,cluster:"Honnaghatta"},
    {id:"BUS-05",name:"Community Van",capacity:22,assigned:22,cluster:"Kallur"}
  ],
  outages:["GOV-06","GOV-07"],
  floodedRoad:[[13.108,77.414],[13.119,77.448]]
};
