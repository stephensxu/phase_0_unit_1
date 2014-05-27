// I worked on this challenge [by myself]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 // Mission One: Rescue Mission

 this.moveUp();// move up
 this.moveRight();// move right
 this.moveRight();// move right
 this.moveDown();// move down
 this.moveDown();// move down
 this.attackNearbyEnemy();// attack
 
 // Mission Two: Grab The Mushroom

this.moveUp();// move up x1
this.moveRight();// move right x1
this.moveLeft();// move left x1
this.moveUp();// move up x1
this.attackNearbyEnemy();// attack

// Mission Three: Drink Me

this.moveRight();// move right
this.attackNearbyEnemy();// attack
this.moveRight();// move right
this.moveDown();// move down
this.moveUp();// move up
this.moveRight();// move right
this.attackNearbyEnemy();// attack

// Mission Four: Taunt The Guards

this.moveRight();// move right
this.say("Follow me.");// say follow me
this.moveRight();// move right
this.moveRight();// move right
this.moveUp();// move up
this.moveRight();// move right
this.say("Hey there!");// say hey there
this.moveDown();// move down
this.moveRight();// move right
this.moveUp();// move up
this.moveRight();// move right
 
 // Mission Five: It's a Trap!

this.moveDown();// move down
this.moveDown();// move down
this.say("Hey There!");// say hey there
this.moveUp();// move up
this.moveUp();// move up
this.say("Attack!");

// Mission Six: Taunt

this.say("Hey you fat");// say something
this.say("Hey you idiot!");// say something
this.say("OWOWOW");// say something


// Mission Seven: Cowardly Taunt

this.moveXY(57,25);// move to (57,25)
this.say("HEY"); // say something
this.moveXY(70,12); // move to tower

// Mission Eight:  Commanding Followers

this.say("follow me"); // say follow
this.moveXY(62,42); // move to (62,42)
this.say("Attack!"); // say attack

// Mission Nine: Mobile Artillery

this.moveXY(16,44); //move to (16,44)
this.moveXY(27,69); //move to (27,69)
this.attackXY(46,63); // attack
this.attackXY(43,71); // attack
this.moveXY(25,59); // move to (25,59)
this.moveXY(50,57); // attack
this.attackXY(67,53); // move to (67,53)
this.attackXY(62,56); // attack
 
// Reflection:
// Write your reflection here.

// What is this referring to?
// A: This refers to the current object.
// What does the () do in JavaScript?
// A: The () takes argument for a method. () can also be empty for a method that requires no argument.
// What is the point of the semicolons?
// A: The point of the semicolons is to tell the computer this is a complete sentence and run the script as an individual task.

// Reflection:

// A: My strategy is to observe what the object does in the beginning sample run, figure out what each method does,
// and then implement the method in my own game plan. During the process I had to figure out how many space does the 
// object move with each command, and how close I need to get near the enemy in order to trigger an attack. One concept 
// I had trouble with is that later in the game there was object in the map that would block my moving path. I need to
// figure out how to move to a certain cordinate without running into the road block. After the game I'm very confident
// with my Learning Competencies. I enjoyed the part where I get to figure out different way to deal with the enemy. I 
// found that having to calculate and test out safe distance very tedious.


