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


## Design Requirements
Before we can start designing anything, we first have to figure out what we are going to make. Robotic arms can vary wildly and every decision about the design creates trade-offs and compromise. Generally the more specific your design goals and requirements are the more straightforward the design process will be. That said, you're most likely not going to know all of the trade-offs of various requirements going into a project and so the design may have to change if it turns out that someone isn't feasible or impractical.

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

Mechanical System:
	This is concerned with the parts of the arm that are a part of it's structure. This is a fairly broad definition because it's a broad category. It includes the design of the joints of the robotic arm, the linkages between the joints, the base of the arm, and any other parts that physically hold, support, or contain any part of the robot.

Electrical System:
	This one if fairly self explanatory, if it uses electricity it's probably part of the electrical system. This includes the motors, power supplies, and controllers. 

Software System:
	Again fairly self explanatory, any code that is part of the operation of the robot. This could include code that runs on a microcontroller or programs that run on a computer connected to the robotic arm. 

A note about motors: motors exist in a bit of a gray spot between the mechanical and electrical system, they are an integral part of both design. That being said the mechanical system views motors as a physical part that produces a force and needs to be mounted, while the electrical system views motors as a circuit element that needs to be powered and controlled. 


## Mechanical System

Now that we've gotten through the design requirements we can start the actual designing. We will also talk about why the design requirements are the way they are. So we'll start from the ground up. As discussed early when you want to build a robotic arm you still have a lot of questions to answer about specific design requirements before you can really start in on a design. So lets go through the design requirements one by one and talk about what they mean, why they were chosen, and what they imply for the design.

1 - Be small enough to sit on a desk and affordable to build

We don't want to build a big robotic arm that you might find on a factory production floor, and we don't want it to cost thousands of dollars to build. These are practical requirements that will inform our design as well as our other design requirements. 


2 - Have a reach of about 12in or 30cm

This is really a more specific version of saying it should be able to sit on a desk. We have taken a general requirement and

## Electrical System


## Software System