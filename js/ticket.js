//Code Your Solution Here

var ticket_template = "Joe Shmoe flying on Fancy Airlines Flight Number 000 arriving at Fancy Destination at 2400 hours. The flight will depart from gate 100.


var real_ticket = ticket_template.replace("Joe Shmoe", "Bessie Baker");
var real_ticket1 = ticket_template.replace("Fancy Airlines", "Delta");
var real_ticket2 = ticket_template.replace("000", "939");
var real_ticket3 = ticket_template.replace("Fancy Destination", "Atlanta");
var real_ticket4 = ticket_template.replace("Joe Shmoe", "Bessie Baker");
var real_ticket5 = ticket_template.replace("Joe Shmoe", "Bessie Baker");
var real_ticket6 = ticket_template.replace("2400", "8pm");
var real_ticket7 = ticket_template.replace("100", "B10");

alert(real_ticket);
