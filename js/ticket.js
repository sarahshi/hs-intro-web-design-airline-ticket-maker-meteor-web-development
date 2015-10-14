//Code Your Solution Here

//Challenge 1:
var ticket_template = "Joe Shmoe flying on Fancy Airlines Flight Number 000 arriving at Fancy Destination at 2400 hours. The flight will depart from gate 100.";

ticket_template = ticket_template.replace("Joe Shmoe", "Bessie Baker").replace("Fancy Airlines", "Delta").replace(000, 939).replace("Fancy Desitination", "Atlanta").replace("2400 hours", "8pm").replace("100", "B10");

//Challenge 2:
var ticket_template = "Joe Shmoe flying on Fancy Airlines Flight Number 000 arriving at Fancy Destination at 2400 hours. The flight will depart from gate 100.";


var name = "Mama Bear";
var destination = "San Francisco";
var airline = "United Airlines";
var flight_arrival = "1015am";
var gate = "A62";

ticket_template = ticket_template.replace("Joe Shmoe", name).replace("Fancy Airlines", airline).replace("Fancy Destination", destination).replace("2400 hours", flight_arrival).replace("100", gate);

//FIRST BONUS
var ticket_template = "Joe Shmoe".toUpperCase() + " flying on Fancy Airlines Flight Number 000 arriving at Fancy Destination at 2400 hours. The flight will depart from gate 100.";


//SECOND BONUS
ticket_template = ticket_template + " on Fancy Departure Date"