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
This project is meant to serve as a method to teach you game design through theory and application along with good programming practices. Using this documentation you will be able to design your own game and with the knowledge gained, be able to design a whole new game of your own and get on track to learn even more about game design. The game here is a very simple one, meant only to teach methods of game design and give useful lessons or techniques about game design. Although such a simple game like this one has plenty of room for additions of your own if you like. And remember, in game design, anything is possible.

**Prior Knowledge**  
No knowledge of Unity / Visual Studio is needed, and neither is any knowledge about C# scripting. Although not necessary, experience or understanding of coding or game design theory is useful for understanding these topics.

**Game Demo and Premade Sprites**  
[Download Zip](/zip/DemoAndSprites.zip)  
*To play the demo, extract the zip file and run the middle application file from the folder named executable.*  

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
![](/imgs/Mike_Images/image17.png)
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
**Scripts**  
This is another very important thing to understand. Scripts are files of C# code that can be attached to game objects. These scripts can manage player movement or spawn enemies or do whatever you need them to do for your game. Typically a script is made of a section of variables, a start method and an update method. Variables could be numbers or strings or game objects or whatever that you can set in the editor or through the script. The start method is called the first frame a game object runs its code and only then. And the update method is called every frame. In these methods are chunks of code you put in there. 
An important concept in scripts is the variables, which generally are either public or private. A private variable can only be accessed within its script and must be set in that script, while a public variable can be accessed by other scripts and can be set in the editor too.  
**Components**  
These are additions to game objects you can add that handle various things not every game object might need. For example the Sprite Renderer component allows a game object to show an image in its place. And the BoxCollider component allows a game object to either collide and push other game objects with the same component or detect when overlapping with another game object. Components allow for game objects to do a lot more stuff.  
**Scenes**  
These are essentially the different levels of a game. They are built separately from each other and cannot interact with each other’s game objects easily because only one scene is able to run at a time. You are able to switch between scenes through scripts which stops and resets the current scene and starts the new one.  
**Variables**  
You can pretty much set a variable to be any kind of thing, like a regular number or word('string') or a component or game object. Some exaples of what the numbers are usally set as are either *int*, an exact number like 5 or 3 or -2, or *double*, which is a decimal number like 6.5 or 4.333, or *float*, which is a like a decimal number with an 'f' at the end like 7.8f and with less memory space so it is less precise, however it is very rare you need to be more precise than float can be.  
**Methods**  
These are basically functions that are handled specific ways in a script. There are some premade ones like Start (which runs its contents once at the start of a game) or Update (which runs its contents each frame of a game) or functions you define on your own which are handled based on how they are called in your script. They can also return a value such as a number or a component or even nothing (void).

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
![](/imgs/Mike_Images/image31.png)  ![](/imgs/Mike_Images/image28.png)  ![](/imgs/Mike_Images/image45.png)  







*Do something like this after each useful concept*
> ### **What You Have Learned**  
> ---
> **How to Control a Game Object's Velocity**  
> Requires a Reference to said Game Object with a Rigidbody Component like so:      
> ![VelocityVar](/imgs/Mike_Images/Learned/VelocityVar.PNG)
>
> Then You can set the Velocity in a Method like so:
> ![VelocitySet](/imgs/Mike_Images/Learned/VelocitySet.PNG)
> *Explaination?*  

> ### **What You Have Learned**  
> ---
> **How to Handle Hitboxes Overlapping between Objects**  
> Requires both Objects to have a Collider Component, which then requires them to have a Rigidbody Component.  
> Use the OnTriggerEnter2D method in a script on one or both Objects like so:
>![Overlap](/imgs/Mike_Images/Learned/Overlap.PNG)
> This method is called on frames when the Object collides with another Object

