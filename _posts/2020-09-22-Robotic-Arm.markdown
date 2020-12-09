---
layout: post
title:  "Robotic Arm"
date:   2020-09-22 10:06:30 -0400
categories: project
project_img: "/imgs/robotic_arm_placeholder.jpg"
project_desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dolor metus, molestie ac quam vitae, vulputate congue felis. Etiam dictum neque ante, ac efficitur sapien commodo non. Quisque et venenatis risus, non interdum dui."
project_color: "#44679C"
---

# Introduction 

---

## Overview 

The goal of this tutorial is to walk you through the design of a robotic arm, from design requirements to planning to a completed design that you could then fabricate. We hope to provide enough context for our decisions so that you could take this knowledge and apply it to designing things besides a robotic arm. We will also routinely reference physics and other engineering theory to verify that the arm will work, improve the design, and demonstrate how theory gets used in practical engineering. 

This tutorial is split up into sections for the various "subsystems" of the robotic arm. These subsystems are the mechanical system, electrical system, and software system. These systems will then be broken up into even smaller subsystems. Most things in the world can be viewed as a collection of systems working together. There are many advantages to taking this viewpoint when designing things. For one it gives you a logical way to break the project into manageable chunks to work through. It is also scalable, you could have different people work on different subsystems, or even entire teams working on a subsystem. That is not to say the design of the systems are independent. Obviously the electronics of a robotic arm depend on the mechanical system and vica-versa. But by incrementally designing you can ensure that all design goals are met and that the systems will work together seamlessly. 


## Methodology


This chart demonstrates the basic design methodology that I'll be walking you through. At the most basic level we start with a set of goals, that we use to form more concrete design requirements. These design requirements then inform the design requirements of the various subsections. Then the various subsections get designed, and then combined together in the final design. 
{:refdef: style="text-align: center;"}
![Engineering Flowchart]({{site.url}}/imgs/Robotic_Arm_imgs/Engineering_Flowchart.png)
{: refdef}

As is denoted in this diagram, the subsections are not designed in a vacuum. The size of the arm in part determines the motors that get used which determine what circuitry is needed to control those motors, etc. What this diagram does not show, is that the process is not as linear as may be indicated. Your design requirements may change, parts of your goals may not be attainable, etc. You likely won't know how feasible your design requirements are until you start designing and prototyping. As such you may learn that what you thought was possible may not be, or maybe your requirements weren't as ambitious as they could have been.


This tutorial will generally follow this flowchart. Included in this will be discussion of various sections that might have driven our design requirements or forced us to go with a different solution that we may have originally imagined. 


# Goals
---

Starting at the first step of our design methodology, we first need to start with basic goals for the project. These goals are as follows

- Create something that obviously resembles a robotic arm
- Design something that can reasonably be built by a college student with access to standard equipment
- Follow "good design practices" as often as possible
- Have the final design be affordable enough to built

Most of these goals are self explanatory. Some of these goals may get higher priority than others as design decisions need to be made, but these are the basics of what we started with. If you were to design a robotic arm, you may end up with different goals. You may care more about the functionality, or you may have a specific application in mind that you can tailor your design towards.


# Design Requirements

---

Now that we have our basic goals, we can try and flesh these out into design requirements. Generally speaking, the more specific your design goals and requirements are the more straightforward the design process will be. That said, there are a lot of decisions that you make when you define your design requirements. For example the size of robotic arm plays a large part in terms of things like materials used, motor choice, and design cost. You're most likely not going to know all of the trade-offs that those decisions play when you set out on a project. That means your design requirements are likely to change as you progress through the design phase. 

That being said for this robotic arm our main goal was for it to be straight forward to design and build, and make use of available parts that are reasonably priced. Here are the design goals we came up with:

- Be small enough to sit on a desk and affordable to build
- Have a reach of about 12in or 30cm
- Be able to lift small objects
- Have 3 axises plus a controllable hand/grabber
- Have a reasonable amount of positional accuracy and repeatability

Throughout this tutorial we will discuss the rational behind these design goals, and what the robot might look like if you choose different design goals. But for now we'll keep them in mind as we start the design process. 

# Design

---

## Basics

Like we said in the overview, we have split the design into three major subsystems: mechanical, electrical, and software. First let's define exactly what we mean by those terms.

**Mechanical System**:
<div style="padding-left: 30px;">
This is concerned with the parts of the arm that are a part of it's structure. This is a fairly broad definition because it's a broad category. It includes the design of the joints of the robotic arm, the linkages between the joints, the base of the arm, and any other parts that physically hold, support, or contain any part of the robot.
</div>

<br/>
**Electrical System**:
<div style="padding-left: 30px;">
This one if fairly self explanatory, if it uses electricity it's probably part of the electrical system. This includes the motors, power supplies, and controllers. 
</div>
<br/>
**Software System**:
<div style="padding-left: 30px;">
Again fairly self explanatory, any code that is part of the operation of the robot. This could include code that runs on a microcontroller or programs that run on a computer connected to the robotic arm. 
</div>
<br/>
A note about motors: motors exist in a bit of a gray spot between the mechanical and electrical system, they are an integral part of both design. That being said the mechanical system views motors as a physical part that produces a force and needs to be mounted, while the electrical system views motors as a circuit element that needs to be powered and controlled. 


## Mechanical System

Now that we've gotten through the design requirements we can start the actual designing. We will also talk about why the design requirements are the way they are. So we'll start from the ground up. As discussed early when you want to build a robotic arm you still have a lot of questions to answer about specific design requirements before you can really start in on a design. So lets go through the design requirements one by one and talk about what they mean, why they were chosen, and what they imply for the design.

1 - Be small enough to sit on a desk and affordable to build

We don't want to build a big robotic arm that you might find on a factory production floor, and we don't want it to cost thousands of dollars to build. These are practical requirements that will inform our design as well as our other design requirements. 


2 - Have a reach of about 12in or 30cm

This is really a more specific version of saying it should be able to sit on a desk. We have taken a general requirement and given it a clear meaning. The exact size if somewhat arbitrary. A nice round number like 30cm will our numbers reasonably nice. This size also influences what motors we have to choose. As we'll talk about later, the longer the arm is, the bigger motor or the more mechanical advantage we need in order for the robot to be able to support itself as well as anything it is holding onto. 

3 - Be able to lift small objects

We want the arm to at least be somewhat functional, although we're prioritizing 


4 - Have 3 axises plus a controllable hand/grabber

This is a practical requirement. Most modern robotic arms have 6 axis, but at this scale that would be challenging, and is more design work that this tutorial is aiming for. Three axises is the smallest number of axises that can make something that is at least reasonably useful.

5 - Have a reasonable amount of positional accuracy and repeatability

This is another general requirement that basically amounts to saying that the robotic arm should know where it is and be able to move between locations, although the precise positional accuracy is unimportant.

### Base of the Arm

### Shoulder

### Elbow

### Hand

## Electrical System


## Software System