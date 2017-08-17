# DOM of Thrones

[See assignment in Alexa.](https://alexa.bitmaker.co/admin/wdi/may-2017/assignments/2605)

Wednesday, Aug 16th
02 - DOM of Thrones
Introduction

Due to budget cuts, HBO has reached out to you to create the final season of Game of Thrones using JavaScript and CSS.

We'll create new scenes by manipulating the DOM.

Note: for reasons to be revealed next season, many characters that were killed off during earlier seasons have been resurrected.

Fork and clone this repo: https://github.com/bitmakerlabs/dom-of-thrones

Open up index.html in your web browser. You should see:

a stage
cast, wardrobe, props and sets sections (note: if your browser isn't wide enough, you can scroll along to see all the images available)
Open up chrome dev tools. You should keep these open for this exercise.

You may want to re-size your browser to find a layout that works best for this assignment.

Scene 1: Children Playing

This scene has already been put together for your viewing pleasure.

Start the scene by executing the scene1() function in your browser's console:

scene1()
Warning! Scene 1 Spoiler ahead!
You should have scene Bran eat a mushroom and chase Arya away.

To watch it again, refresh your browser and run scene1() again.

Take a look at the files in the assignment to get an idea of how the scene was put together. Don't worry if you don't understand everything just yet.

Scene 2: Ned's Revenge

In this scene, Ned Stark is armed with a sword and is looking meanly at Joffrey. What happens next is anyone's guess ...

You'll set this scene up yourself, with my helping hand ...

Setup Files

Let's first setup our files:

Copy js/scene-template.js to js/scene2.js.

Open scene2.js and change the function name from:

function scene<scene_number>() {
to

function scene2() {
Open index.html and add the following to the <head>:

<script type='text/javascript' src='js/scene2.js'></script>
Let's confirm our scene.js is working okay by adding a console log:

function scene2() {
  console.log('Executing scene 2!')

  // ...
}
Refresh your page and run scene2() in the console. You should see the console log message.

Query Stage

We're going to be appending everything to our stage, so let's query that first and set it up in a variable to use:

stage = document.querySelector('#stage')
Setup Setting

Now we're going to move to our browser console and get the stage working there first. Once we have the correct javascript, we'll copy the code over to our scene2 function.

The first step is to query the setting we want. Let's query the #sets section and take a look at the html:

document.querySelector('#sets')
Open up the section so you can see all the html within it. It should look similar to this:

<section id="sets">
  <h3>#sets</h3>
  <div class="section-content">
    <img id="castle" title="#castle"  src="img/sets/castle.jpg">
    <img id="desert" title="#desert"  src="img/sets/desert.jpg">
    <img id="grassy-field" title="#grassy-field" src="img/sets/grassy-field.jpg">
    <img id="kings-landing" title="#kings-landing" src="img/sets/kings-landing.jpg">
    <img id="the-wall" title="#the-wall" src="img/sets/the-wall.jpg">
    <img id="trees" title="#trees"  src="img/sets/trees.jpg">
  </div>
</section>
Our scene takes place by the castle. Let's query that:

castle = document.querySelector('#castle')
Currently our stage has a placeholder image. You can see by querying #stage-img.

stageImg = stage.querySelector('#stage-img')
Take a look at the src. It's pointing to the placeholder image. We're going to swap that out with the castle src image.

castleImgSrc = castle.getAttribute('src')
stageImg.setAttribute('src', castleImgSrc)
If you see the castle nicely fitted on the stage, you should copy these lines over to your scene2.js file.

Refresh your browser and run scene2() in the console. It should setup the setting for you.

Setup Cast

Ned

First our hero.. Ned Stark! We're going to create a div to contain both his head and his wardrobe.

nedContainer = document.createElement('div')
Let's append it to our stage:

stage.append(nedContainer)
Note that the div won't be visible yet.

Everything that goes on the stage needs to be positioned absolutely. Let's position this div in the centre of the stage and give it some dimensions:

nedContainer.style.position = 'absolute'
nedContainer.style.width = '10%'
nedContainer.style.height = '20%'
nedContainer.style.top = '50%'
nedContainer.style.left = '50%'
It's still not going to be visible yet!

I like to give my containing div a nice bright yellow background and a red border while I'm working with it. This makes it easy to see:

nedContainer.style.border = '2px solid red'
nedContainer.style.background = 'yellow'
Now we can see our div!

Let's grab Ned's head and put it into our div:

ned = document.querySelector('#ned')
nedContainer.append(ned)
And now let's grab some armour for him:

leather = document.querySelector('#leather-armour')
nedContainer.append(leather)
Let's add a border to both his head and armour so it's easy to see exactly where they're at on the page. Don't worry, we'll remove them when we're done.

ned.style.border = '2px solid blue'
leather.style.border = '2px solid green'
It appears our container isn't big enough for both. Let's increase its height. Oh, I can't remember what we set it to.. let's check

nedContainer.style.height
Right, 20%. Let's try 25%:

nedContainer.style.height = '25%'
Still not big enough.

nedContainer.style.height = '35%'
Better, but let's contain everything completely:

nedContainer.style.height = '45%'
That's better. Let's shrink it a little:

nedContainer.style.height = '44%'
There we go.. almost perfect.

Now let's size both his head and armour so they match up. Generally you'll want to work with % for divs to cooperate properly on the stage.

ned.style.width = '20%'
That's too small!

ned.style.width = '200%'
Now it's too big!

ned.style.width = '70%'
That's better.. it looks like it'll go nicely with his leather armour.

His armour's size is actually looking good how it is. Let's leave its size alone.

There's likely a space between his head and armour. We can fix that by positioning his head and leather absolutely. We'll put his head at the top of the container, and his armour at the bottom:

ned.style.position = 'absolute'
ned.style.top = 0
leather.style.position = 'absolute'
leather.style.bottom = 0
And now let's re-adjust the container's height to bring his head and body together.


// First let's check what it's set to
nedContainer.style.height

// Now we'll adjust slow until it looks good
nedContainer.style.height = '43%'
nedContainer.style.height = '40%'
nedContainer.style.height = '35%'
nedContainer.style.height = '36%'
nedContainer.style.height = '37%'
nedContainer.style.height = '38%'
nedContainer.style.height = '37%'
Where should Ned stand? How about on the rocks:

nedContainer.style.top = '55%'
nedContainer.style.left = '10%'
That's a little too far left.

nedContainer.style.left = '25%'
Perfect!

Finally, we'll remove the background and borders:

ned.style.border = 'none'
leather.style.border = 'none'
nedContainer.style.border = 'none'
nedContainer.style.background = 'none'
Ah, what a fine, upstanding gentleman!

Let's copy all of this over to scene2.js. What, you weren't paying attention to our settings?! No worries, we can just read back our DOM elements:

nedContainer
ned
leather
Joffrey

Ah, Joffrey. I don't envy you right now. Setup Joffrey using the process you used to setup Ned. You'll find Joffrey's head in the #cast section and you can give him the #king from the #wardrobe section.

I'll wait here while you get Joffrey onto the stage and all sized nicely. Note that you may want to position his head to the left somewhat to have it sit nicely on his wardrobe.

No peaking ahead until you've Joffrey!

Joffrey all good to go? Great!

This is what I ended up with for Joffrey:

joffContainer = document.createElement('div')
joffContainer.id = 'joff-container'
stage.append(joffContainer)
joffContainer.style.width = '8%'
joffContainer.style.position = 'absolute'
joffContainer.style.height = '31%'
joffContainer.style.top = '55%'
joffContainer.style.left = '55%'

joff = document.querySelector('#joffrey')
joffContainer.append(joff)
joff.style.width = '75%'
joff.style.position = 'absolute'
joff.style.left = '33%'

kingWardrobe = document.querySelector('#king')
joffContainer.append(kingWardrobe)
kingWardrobe.style.position = 'absolute'
kingWardrobe.style.bottom = 0
Sword

And now for the sword. We'll be giving that to Ned. Fortunately as it's just a single img tag we'll be moving around, we won't need a container for it.

sword = document.querySelector('#sword')
stage.append(sword)
sword.style.position = 'absolute'
sword.style.top = '77%'
sword.style.left = '31%'
sword.style.height = '5%'
Ah, let's flip that around and point it toward Joffrey:

sword.style.transform = 'rotateY(150deg)'
Nice! Copy that over to scene2.js. Refresh the page and run the scene to ensure everything looks good.

Setup Animations

I've setup up a function to execute a frame everything half-second. You can look at dom-of-thrones.js if you'd like to see how it works. We need to place the new placement of our characters and props inside each "frame" in order to animate our picture.

Sword Animation

Okay, we've got a Ned, a Joffrey, and a sword. What should we do? How about Ned's throws his sword at Joffrey!

To setup this animation, we need to figure out where the sword is going to end up (Joffrey's neck).

Play around with the sword's position in the console until it's lined up right at his neck:

// First let's check where it's at:
sword.style.top
sword.style.left

// Now move it, move it, move it ...
sword.style.top = '70%'
sword.style.top = '60%'
sword.style.left = '35%'
sword.style.left = '45%'
sword.style.left = '55%'
sword.style.top = '61%'
sword.style.top = '62%'
sword.style.top = '63%'
sword.style.top = '64%'
sword.style.left = '54%'
sword.style.left = '53%'
That's looking good!

Now that we have the sword starting position and ending position, let's set those up in a few frames. Add this to the end of your scene2 function in scene2.js:

frame(function() {
  sword.style.top = '77%'
  sword.style.left = '31%'
})

frame(function() {
  sword.style.top = '64%'
  sword.style.left = '53%'
})
Refresh your browser and play the scene. You should see the sword move to Joffrey's neck!

The next step is to give the sword an in between state. Basically you'll insert a new frame in between the start and end frames above, setting the top and left attributes to about halfway between the starting and ending values. Your frames should look like this now:

// Existing Start Frame
frame(function() {
  sword.style.top = '77%'
  sword.style.left = '31%'
})

// New Middle Frame
frame(function() {
  sword.style.top = '71%'
  sword.style.left = '41%'
})

// Existing End Frame
frame(function() {
  sword.style.top = '64%'
  sword.style.left = '53%'
})

Now run your scene again.

Let's add two final frames for the sword animation. These frames will go in between the start & middle frame, and the end & middle frame. The top and left value should be about halfway between each of corresponding existing frames. The final js should look like this:

  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '31%'
  })

  frame(function() {
    sword.style.top = '74%'
    sword.style.left = '36%'
  })

  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '41%'
  })

  frame(function() {
    sword.style.top = '68%'
    sword.style.left = '47%'
  })

  frame(function() {
    sword.style.top = '64%'
    sword.style.left = '53%'
  })
Test it out!

Head Animation

And now for the part you've been waiting for. Use the same process you used for the sword to have Joffrey's head fly into the river. Once you've done that, see below for what I ended up with.

No peaking! (unless you're stuck)

This is what I ended up with.

frame(function() {
  joffrey.style.top = 0
  joffrey.style.left = '33%'
})

frame(function() {
  joffrey.style.top = '17%'
  joffrey.style.left = '90%'
})

frame(function() {
  joffrey.style.top = '35%'
  joffrey.style.left = '160%'
})

frame(function() {
  joffrey.style.top = '55%'
  joffrey.style.left = '230%'
})

frame(function() {
  joffrey.style.top = '75%'
  joffrey.style.left = '300%'
})
Test everything out and ensure it's working.

Finally let's give Joffrey's head a spin as it flies through the air. Add a rotation to each existing head-flying frame:

frame(function() {
  joffrey.style.top = 0
  joffrey.style.left = '33%'
  joff.style.transform = 'rotateZ(220deg)'
})

frame(function() {
  joffrey.style.top = '17%'
  joffrey.style.left = '90%'
  joff.style.transform = 'rotateZ(140deg)'
})

frame(function() {
  joffrey.style.top = '35%'
  joffrey.style.left = '160%'
  joff.style.transform = 'rotateZ(260deg)'
})

frame(function() {
  joffrey.style.top = '55%'
  joffrey.style.left = '230%'
  joff.style.transform = 'rotateZ(180deg)'
})

frame(function() {
  joffrey.style.top = '75%'
  joffrey.style.left = '300%'
  joff.style.transform = 'rotateZ(100deg)'
})
Sit back, relax and enjoy.

Scene 3: Dragon's Egg

Using the same steps as you used to construct Scene 2, create a scene with Danerys and Drogo playing catch with the dragon's egg. The egg is in the #props section.

Briefly, the steps are:

Setup Files
Query Stage
Setup Setting
Setup Cast
Setup Prop
Setup Animations
Scene 4: The Dance

Create a scene that has characters dancing on the lake by King's Landing. At the end of the dance, try to make them sink into the water.

Stretch

Scene 5: Tyrion's Throne

I know, we all want to see Tyrion end up on the Throne. Create a scene in which several contenders battle about the Throne, but with Tyrion ending up on it. You can find the throne in the #props section.
