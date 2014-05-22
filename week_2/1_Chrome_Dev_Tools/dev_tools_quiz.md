#### Include an inline screenshot of your codeschool's points from the profile page:

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 
  - The element tabs. User can edit DOM and styles from the element tabs. Alternatively the sources tab allow modification of the original files.

  * Javascript Debugging
  - Javascript Debugging can be done at the Console tab; or alternatively the Sources tab where original files can me modified. 

  * Performance Optimization 
  - Performance Optimization can be done at the Network, Timeline, Profiles tabs. ALl these three tabs allow user to monitor the performance of different elements in the websites, identify which particular element was causing the issues and resolving each issue accordingly. 
  Network allows user to see the time it takes for each item to communicate and download certain files; Timeline allows recording of events, frames rate and memory usage of files. Profiles let user to take heap snapshot to dignosis the different issues of the site.

* What's the quick key for your OS to spawn the Dev Tools inspector?
  - Command + Option + i

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)
  - #0b0f11

  * Tweak the background color to white.

  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.

  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.

  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/

  * Upload your own image to the imgs directory in the `1_Chrome_Dev_Tools` directory.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.
  - Because the text is not real text, but part of the background image; the Image at the url (http://www.postmachina.com/images/home_bg.gif); the only way to twist this part is to either use the background or change it to a different one.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 
  - The largest image is (92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png)
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
  - I found out by going to Nework tab, refresh the page, and sort by size, then finding the largest png/jpg file. The size of image is 316KB.  The URL is (http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png).

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the easiest thing to change to optimize the website?  How many kilobytes of data can be eliminated?
  - Easiest thing to change to optimize the website is to losslessly compressing the images. According to PageSpeed, Optimize the images can reduce theirs size by 885.0KiB(39% reduction).





