---
layout: post
title:  "Video Game"
date:   2020-09-22 10:03:30 -0400
categories: project
project_img: "/imgs/video_game_placeholder.png"
project_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor metus, molestie ac quam vitae, vulputate congue felis. Etiam dictum neque ante, ac efficitur sapien commodo non. Quisque et venenatis risus, non interdum dui."
project_color: "#4B9E37"
---

Video Game Page

# Introduction
**Goal of the Project**  
This project will introduce game development through Unity and C# Scripting and provide the knowledge to make your own game and create the foundation for learning more C# and building games at a higher level. Unity is a very useful tool for developing games whether it be some small one for a game jam or even much larger games sold around the world. And C# is a very useful modern object orientated language found in many different softwares today. 

**Prior Knowledge**  
No knowledge of Unity / Visual Studio is needed, and neither is any knowledge about C# scripting. Although not necessary, experience or understanding of coding or game design theory is useful for understanding these topics.

**Game Demo and Premade Sprites**  
[Download Zip]({{ site.url }}/zip/DemoSprites.zip)  
*To play the demo, extract the zip file and run the middle application file from the folder named demo.*  

# Installing Unity and Visual Studio
If you do not have Unity or Visual Studio installed you are going to want to install the latest versions of Unity Hub and Visual Studio. Unity Hub acts as a medium for installing the actual Unity Editor along with accessing content provided by other users, It also makes installing Unity much easier. Visual Studio is an excellent programming software that Unity prefers to use to edit code and create scripts for your game.

**Unity Installation Documentation**  
<https://docs.unity3d.com/2020.2/Documentation/Manual/GettingStartedInstallingUnity.html>  
**Visual Studio Installation Documentation**  
<https://docs.microsoft.com/en-us/visualstudio/gamedev/unity/get-started/getting-started-with-visual-studio-tools-for-unity?pivots=windows>

# Understanding the Unity Editor
Before starting your project it is important to have a basic understanding of Unity and how you can use the Editor. However the bulk of your understanding will come from actually designing your game and testing things out. 

### **The Unity Editor**
*This is a screenshot of what the Editor generally looks like*  
![]({{ site.url }}/imgs/Mike_Images/image17.png)
*As you can see, there are four main parts of the screen*  
**The Hierarchy (Upper Left)**  
This part shows all the objects present in the game scene at that moment. This could include the camera, the player, random objects like rocks, or enemies, etc. It also displays the relationship between the objects too, for example if a certain object is a child of another where all of its movements are relative to its parent instead of the space around it.  
**The File System / Console (Bottom)**  
This part displays the files in your game such as images or programs or useful tools the editor needs but you don’t really need to worry about. The file system is useful for organizing things you need to put into your game. The console acts as a method to display errors or messages to you from code running in your game or errors with your game objects. It is useful for debugging your code.  
**The Game (Middle)**  
This displays what your current scene looks like. It allows you to move objects around, scale them or edit components of them. It also displays your game when you run it so you can play it as you build it.  
**The Inspector (Right)**  
This part allows you to add components and scripts to a game object, set variables, position objects very specifically and much more. It allows you to interact with your scripts’ variables before and during running your game.  

### **Important Concepts**
**Game Objects**  
This is a very important concept to understand. Essentially everything that is in a game is an object or clone of an object. All code that is run must be attached to a game object. The camera is a game object, and so is some light source or some background image or an enemy or anything. All game objects have a Transform component which means they have a position that can be set in the X Y and Z axis, a scale on each axis, and a rotation around each axis. Game objects don't have to be visible, some are there purely to run code. These values can be changed through the editor or through scripts.  
**Components**  
These are additions to game objects you can add that handle various things not every game object might need. For example the Sprite Renderer component allows a game object to show an image in its place. And the BoxCollider component allows a game object to either collide and push other game objects with the same component or detect when overlapping with another game object. Components allow for game objects to do a lot more stuff.  
**Scenes**  
These are essentially the different levels of a game. They are built separately from each other and cannot interact with each other’s game objects easily because only one scene is able to run at a time. You are able to switch between scenes through scripts which stops and resets the current scene and starts the new one.  
**Variables**  
You can pretty much set a variable to be any kind of thing, like a regular number or word('string') or a component or game object. Some exaples of what the numbers are usally set as are either *int*, an exact number like 5 or 3 or -2, or *double*, which is a decimal number like 6.5 or 4.333, or *float*, which is a like a decimal number with an 'f' at the end like 7.8f and with less memory space so it is less precise, however it is very rare you need to be more precise than float can be.  
**Methods**  
These are basically functions that are handled specific ways in a script. There are some premade ones like Start (which runs its contents once at the start of a game) or Update (which runs its contents each frame of a game) or functions you define on your own which are handled based on how they are called in your script. They can also return a value such as a number or a component or even nothing (void).  
**Scripts**  
This is a very important part of unity. A script is basically code that you write that can become components for game objects.  
<img src="{{ site.url }}/imgs/Mike_Images/Script.PNG" width="400px" height=auto />  
So "Frames" is the name of this script (which is also the name of the class of the script), this is also the name of the component this script becomes when put onto a game object. It is called a class because when it is attatched to an object it is essentially being represented as an object that shares that class info with similar objects like how animals can be divided into classes and share traits but are still individuals.  

Inside the Frames class definition are methods and variables. These are the traits of the class essentially. in this examples we have the start and update method. The Start method runs whatever code is inside it once for the first frame an object exists. The Update method runs its code every frame of the game.  

You can define variables in the same scope of the methods, so within the class defnitiion but not within other methods, which means they can be used anywhere inside that class, in any method, or you can define a variable inside a method which means it can only be used within that method.  

# Setting up for Your Game  
### **Create a New Project**  
We will be making a simple 2D game so you can start by clicking new and making a new 2D project and save it to wherever you want it to be located such as your Desktop or a specific folder or something.  
![](/imgs/Mike_Images/image8.png)  
### **Folders**  
The first thing you should do if you want to stay organized is to set up several files to divide your assets into. Four general folders for a simple game like this one would be *Scenes* (which should already exist), *Sprites*, *Scripts*, *Prefabs* and if you want, *Audio* (optional whether you want to include audio in your game). Right click on open space in Assets or click the + to the left while in Assets to add  the folders.
![](/imgs/Mike_Images/image44.png)  

# Making Your Game
### **The Player**  
The first essential part of making a game is setting up the player controls and making sure it feels right to play, we will start by making the game object for it.  
<img src="{{ site.url }}/imgs/Mike_Images/image31.png" width="210px" height=auto />
<img src="{{ site.url }}/imgs/Mike_Images/image28.png" width="200px" height=auto />
<img src="{{ site.url }}/imgs/Mike_Images/image45.png" width="200px" height=auto />

To add a Game Object into your scene, there are a couple methods:
* Click on the + to open a drop down menu, or Right Click in the open space below the Main Camera
* In this menu you can select either Empty Game Object, or select 2D Object then select Sprite
* You can also open up the GameObject menu at the top of the screen for the drop down menu
* Clicking on the new Game Object after already clicking it (Highlighted Blue) will allow you to name it whatever you want to distinguish it >within the hierarchy  

*Selecting 2D > Sprite will essentially make an Empty Game Object but with a Sprite Renderer already attached to it*  
*Always Remeber to Reset the Transform component of a new Game Object (sometimes start off as random values)*  

**Player Components**  
As of now we will just need two components to make the player movement:
* Sprite Renderer - This simply displays an image for the object  
* Rigidbody2D - This allows you to apply physics to an object such as velocity in 2 Dimensions  

To add components to an object you can click on the player object in the heirarchy or in the scene view, then look over to the right in the Inspector.  
Then you can press the button 'Add Component' and search for *Sprite Renderer* and *Rigidbdy2D* and add each of them to the Player object.  
<img src="{{ site.url }}/imgs/Mike_Images/image41.png" width="250px" height=auto />
<img src="{{ site.url }}/imgs/Mike_Images/image23.png" width="250px" height=auto />  

In the Rigidbody2D component we will need to make some changes:
* Set the body type to Kinematic
* * Dynamic means it will experience Mass and Forces applied to it by scripts and other objects
* * Kinematic means it will only have a velocity value that is set through scripts
* Set collision detection to Continuous
* * Discrete means it checks for collisions less often which means they may be missed at higher speeds
* * Continuous check for colliosions more often which avoids the clipping effects  

In the Sprite Renderer component we need to
* Open the folder section to where the plaeyr sprite is located
* Then find the player object again and go to its inspector and open Sprite Renderer
* Then drag the player sprite into the empty slot in Sprite Renderer  
<img src="{{ site.url }}/imgs/Mike_Images/image37.png" width="250px" height=auto />
<img src="{{ site.url }}/imgs/Mike_Images/image42.png" width="250px" height=auto />  

Now you may or may not notice the Sprite is not the size it should be and that is because the pixel size Unity thinks it is has not been set.  
So we can select all the images in the sprite folder and in the inspector it should show some information about the sprites:  
<img src="{{ site.url }}/imgs/Mike_Images/SpriteFolder.PNG" width="500px" height=auto />
<img src="{{ site.url }}/imgs/Mike_Images/SpriteStuff2.PNG" width="250px" height=auto />  
We should:
* Set the pixels per unit to 16, this can help unity with handling the sprites but is more useful with keeping pixel art images consistent in pixel sizes.  
* Set Filter Mode to Point (no filter) and Compression to none
* Select Apply  


*Do something like this after each useful concept*
> ### **What You Have Learned**  
> ---
> **How to Control a Game Object's Velocity**  
> Requires a Reference to said Game Object with a Rigidbody Component like so:      
> ![VelocityVar]({{ site.url }}/imgs/Mike_Images/Learned/VelocityVar.PNG)
>
> Then You can set the Velocity in a Method like so:
> ![VelocitySet]({{ site.url }}/imgs/Mike_Images/Learned/VelocitySet.PNG)  
> **What are the uses**  
> This is used for applying physics to a game object such as a velocity, but can also be used for collisions or gravity.   

> ### **What You Have Learned**  
> ---
> **How to Handle Hitboxes Overlapping between Objects**  
> Requires both Objects to have a Collider Component, which then requires them to have a Rigidbody Component.  
> Use the OnTriggerEnter2D method in a script on one or both Objects like so:
>![Overlap]({{ site.url }}/imgs/Mike_Images/Learned/Overlap.PNG)
> This method is called on frames when the Object collides with another Object

