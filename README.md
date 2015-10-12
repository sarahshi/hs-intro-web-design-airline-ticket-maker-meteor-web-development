# Airline Ticket Maker

<img src="https://s3.amazonaws.com/after-school-assets/airline-boarding-pass-ticket-isolated-over-white-shadow-background-31428164.jpg" width="300" align="left" hspace="10">

It's time to take a flight! The airlines need all sorts of information from you in order to print out your ticket. Airlines use the same template for each ticket, and just plug in different data from each user. 

How can you automate this task? There are the few ways we can do this...

#### repace
The `replace` method is a handy JavaScript tool that allows you to replace a word or letter for another word or letter within a string. That means *every time the word or letter appears in the string, it will be substituted out.* Let's take a look at how that works.

We have a fact about Harry Potter assigned to a variable `wrong_fact`:

```js
var wrong_fact = "Harry Potter is a member of House Slytherin!";
```
But wait, Harry is in Gryffindor, not Slytherin! Let's swap out the word "Slytherin" for "Gryffindor" using the gsub method. `gsub` takes two `parameters`. *The first one is the word you want to replace, and the second one is the word you want to replace it with*:

```js
var right_fact = wrong_fact.replace("Slytherin", "Gryffindor");
```

The `return value` (aka what this action produces after it's called) will be "Harry Potter is a member of House Gryffindor!" Then, if we type `right_fact` into our console, we'll see the fact correctly printed.

### Chaining replaces

What if you have a sentence that you want to substitute more than one word in? We can do that by calling `gsub` more than once on the same line, through a process called `method chaining` in which you *call one method right after another*. Take a look:

```js
var wrong_fact = "Hermione has 4 siblings.";
var true_fact = wrong_fact.gsub("Hermione", "Ron").gsub("4", "6");
```


### Challenge 1 (using replace):
You will be coding your solution in `js/ticket.js`.

Copy the variable definition below, which is the airline ticket template that all airlines use, and paste it into `js/ticket.js`

```js
var ticket_template = "Joe Shmoe flying on Fancy Airlines Flight Number 000 arriving at Fancy Destination at 2400 hours. The flight will depart from gate 100.
```

Obviously there is some generic information in this ticket. Your job is to replace the passenger name, airline name, flight number, destination, flight arrival time, and gate number using the `replace` function with the following information:

```
name: Bessie Baker
airline: Delta
flight number: 939
destination: Atlanta
flight arrival time: 8pm
gate number: B10
```

### Challenge 2:
Now your mom needs to book a flight. Copy the ticket template into `js/ticket.js` and store it in the variable `mom_flight`.

```js
var ticket_template = "Joe Shmoe flying on Fancy Airlines Flight Number 000 arriving at Fancy Destination at 2400 hours. The flight will depart from gate 100.
```

Next, assign the following content from the original ticket to variables:

Now that we have the original information, it's time to change the value of these variables to reflect your mom's information. Your mom plans to fly to San Francisco on United Airlines on December 15. Her flight will arrive at 10:15am. The flight will take off from Gate A62. Create variables( `name`, `airline`, `flight_number`, `flight_destination`, `flight_arrival_time`, `gate`).


Using the variables you created and your expertise with the `replace` function, switch out the template for your mother's information. 

### S-T-R-E-T-C-H Challenges!
If you've made this far, here are some additional challenges for you to complete:

1.  What if the airlines decide to print the passenger names in all caps?
2.  Now that it's in all caps, they decide they want to print the names in lower case letters, how can you fix that?
3. What if they want to add the flight departure time to the ticket?

