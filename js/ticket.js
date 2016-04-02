//Code Your Solution Here

var ticket_template = "Joe Shmoe flying on Fancy Airlines Flight Number 000 arriving at Fancy Destination at 2400 hours. The flight will depart from gate 100.";

// ticket_template = ticket_template.replace("Joe Shmoe", "Bessie Baker").replace("Fancy Airlines", "Delta").replace("000", "939").replace("Fancy Desitination", "Atlanta").replace("2400 hours", "8pm").replace("100", "B10");

var name = "Mother";
var destination = "San Francisco";
var airline = "United Airlines";
var flight_arrival = "1015am";
var gate = "A62";

ticket_template = ticket_template.replace("Joe Shmoe", name.toUpperCase()).replace("Fancy Airlines", airline).replace("Fancy Destination", destination).replace("2400 hours", flight_arrival).replace("100", gate);

ticket_template = ticket_template + " on Fancy Departure Date"

alert(ticket_template)