---
layout: post
title:  "Design CNC Machines"
date:   2020-09-22 10:02:30 -0400
categories: project
project_img: "/imgs/cnc_placeholder.png"
project_desc: "Learn about the operating principles of CNC machines and follow along in CAD to design simple 1 and 2 axis machines. If you're feeling up to the challenge you can even gather the parts to assemble your own 2 axis pen plotter."
project_color: "#45C9E5"
---

![]({{ site.url }}/imgs/CNCMachine/image35.png)

**1. Kickoff and Design Ideology**
==================================

1. Kickoff & Introduction
-------------------------

This class intends to flesh out the process of designing and building a
CNC milling machine as a gateway to the magic of project based
engineering. The project should build skills and impart grander project
structure advice along the way. Practical skills covered include:
terminology, using CAD (Computer Aided Design), design for
manufacturing, concepts in robotics and mechatronics, and much more! On
a grander pedestal: We hope that going through this short work will
impart wisdom about the thought process behind successfully completing
practical engineering projects.

The class is designed to fit into five bite sized, and fairly
independent chunks covering different material. This structure affords
engineers the ability to spread themselves only across the parts they
will benefit the most from.

### Structure:

1.  Introduction and Design Ideology (You're already here)

    a.  A slightly dry kickoff to design ideology in simple terms of
        > what to do on a high level when starting a project and some
        > thinking exercises.

2.  The Nuts and Bolts of CNC Electronics

    a.  A high level overview of terminology, units, electronics, robot
        > control, linear motion, and standards. Brief but targeted
        > understanding of the background requirements for a CNC
        > machine.

3.  CAD and Linear Motion

    a.  3D CAD ramp from beginner to intermediate and a jumping off
        > point for the more practical half of the materials. With an
        > introduction focusing on visualizing the moments and basic
        > physics concepts and choosing fasteners, bearings, and general
        > hardware.

4.  Design for Manufacturing

    a.  School of hard knocks lesson split between more advanced design
        > information and making better CAD. Design information covers
        > an explorative look at the limitations of materials,
        > tolerances, and advice for different forms of manufacturing.
        > Practical side focuses on implementing the new knowledge into
        > existing CAD designs for a new... revision.

5.  Epilogue, What's Next, and Why it's All Important

    a.  Calibration, safety, and software implementation plus milling
        > machine usage including basic CAM and tooling overview. Final
        > tidbits about how you can use an "okay" milling machine to
        > make a better one.

2. Design Ideology
------------------

The cliche of beginning with a definition can be frustrating, but it
really helps to conceptualize some of the philosophy I want to impart in
this short course. For our purposes, engineering is like taking a large
group of non-intersecting requirements and inputs and developing a way
to convert them into a desired output. At its more abstract, this
definition allows us to view an engineering solution as we can any
simple solvable problem: The knowns and the unknowns. The sheer number
of possible orientations and solutions creates a deluge of ideas that
won't work and rooting them out through careful thought early will save
huge headaches.

I want to set out a few tenets of finishing engineering projects:

1.  Simplicity is every engineers best friend

2.  Mistakes are inevitable, revisions are the key to successful
    > projects

3.  The earlier revisions are made, the faster, and cheaper they are

Engineering seems to be unique in the complexity and variations possible
within these structures allowing for solutions from the beautiful and
elegant to the functional to even the non-functional. Within this
spectrum from working to non-working the only difference is the number
of revisions. As I like to say: there are no failed projects, only
unfinished work. The practical component of this wisdom is that projects
that work and work well need to be revised, revised, revised, and
revised again. To this end, it is in the engineers best interest to
remove as much friction from the process of revisions possible. Finding
solutions to the problems created by legacy implementations can be much
harder than finding novel implementations. There is no easy answer of
when to add a new feature or to change a feature, but thinking about it
in stages can help develop an important intuition. Like anyone starting
or enjoying a journey, mistakes and pitfalls mark the path but an open
mind and adherence to the tenets I've set here are a reasonable start.

**What is the best CAD software?**

*It is the one that the engineer works best in, but it's also a trick
question. As of my writing this, the only CAD software that can flesh
out complex ideas in seconds is old fashioned pen and paper.*

![]({{ site.url }}/imgs/CNCMachine/image11.png)

*Fig. 1, an example of the level of detail an extremely neat engineering
drawing should include. Simple circles, boxes, and arrows with rough
dimensions should suffice. Sketches like this are powerful but can only
function when the designer finds their own work legible.*

Any engineering project should start with documentation on the specific
needs that need to be met in a final project both functionally and
physically. The fun work can only begin with a clear list of objectives
and constraints in place. The ideas phase should be as simple as
thinking about different novel solutions and drawing them on paper.
Taking some time to visualize motion, key steps in the function, the
assembly, and manufacturing quickly aids the selection of ideas that are
more practical.

The cost of any changes to a project go up exponentially as projects
gain momentum and a base of research. Which is why cheap and fast tools
like this are so essential.

 

2. An Application
-----------------

The time has finally come to begin thinking about some applications of
these tools to enshrine their usage. In one of its most simple forms,
any CNC milling machine (or for that matter a device similar such as a
laser cutter, 3D printer, robot arm, etc) is just a device developed to
move around in a certain coordinate plane. Note figure two and consider
how many motors (or manipulators) it would take to move a robot from the
origin to the point *P*(3,5).

![]({{ site.url }}/imgs/CNCMachine/image1.png)

*Fig. 2 A Cartesian Coordinate plane with two axes (x & y). Note the
variation in possible locations that can be reached within the marked
bounds of 0-10 on each axis.*

If you only need to move *between the two points P(3,5) and the origin*,
that can easily be achieved with a single stationary motor. This single
motor configuration can be achieved in any number of ways but two
examples are a motor attached to a leadscrew (turning the rotational
motion into linear motion) or a motor placed between the two points with
an armature or reach allowing a purely spinning motion to move between
the points. It can be easy to over think challenges and hard to leave
behind those assumptions. With two motors we have a lot more freedom, we
can access an arbitrary number of spaces in this coordinate plane. This
distinction is very important as cases where we don't need the
versatility offered by the extra motor can be greatly simplified with
its absence.

3. An Exercise
--------------

Exercise: *Given a two-dimensional coordinate plane (shown in figure 1),
design a simple mechanical system that can reach any given point using
its own motors. Then design **two more** different systems to fulfill
the same criteria. With three simple designs drawn out, compare them.
Which would you rather make? Do you think some will be easier to program
than others? Try to articulate specific reasons why some are better or
worse. (**Hint: Use paper and if you get stuck try thinking about cars
navigating from top down or polar coordinates, don't spend more than
five minutes on this if you aren't enjoying it**)*

**2. The Nuts and Bolts of CNC Electronics**
============================================

1. Introduction to Electronics and Movement
-------------------------------------------

This lesson is about thinking of the challenges involved in all levels
of getting objects from one discrete location to another with
repeatability. The main focus of this class is linear automation systems
that require getting to an arbitrary number of positions along a certain
route or within the size constraints of the machine. I will also be
touching on some elegant solutions to scenarios in automation that only
require repeatable translation between specific a and b positions.

### Structure:

1.  The Nuts and Bolts of CNC Electronics

    a.  A high level overview of terminology, units, electronics, robot
        > control, linear motion, and standards. Brief but targeted
        > understanding of the background requirements for a CNC
        > machine.

2. Electrical and Computer Engineering Words
--------------------------------------------

It can be very easy to slip into techno-babble while writing work like
this. Generally I will try to use technical words that I consider to be
essential in the text with explanations. As these terms will show up in
the process of acquiring goods and looking through less beginner
friendly documentation. I will use this section, as glossary for this
technical lesson and as an introduction to these topics for the totally
uninitiated so don't skip this section if you aren't familiar with or
need a refresher on terms like Arduino, serial communication, NEMA
stepper, linear bearing, etc...

Electrical and Computer Engineering

-   Arduino

-   PWM

-   C++

-   Serial Communication

-   NEMA Stepper

-   I2C / SPI

3. Mechanical Engineering Words
-------------------------------

This section will also operate as a standard glossary for those familiar
with the subject but will be a very handy guide for those who haven't
had the fortune to work with linear slides too long.

### Figuring out fasteners and the metric / imperial dilemma

**The difference between Metric and Imperial in short and how to use
them**

-   *The very basics:*

> Metric and imperial are "competing" standard systems of units in the
> world. It is hard to provide substantial evidence of the objective
> superiority of one system over the other but metric poses many
> advantages for the beginner in manufacturing.

-   *Measuring things*

> The easiest way to measure things distances accurately in an amature
> shop is either a ruler (for bigger stuff ideally no smaller than a few
> mm or one eighth of an inch) or a caliper. Which is a special kind of
> digital ruler that can be fantastically accurate. Figure 1 shows a
> digital caliper that you could expect to use when making sure a part
> has been manufactured to the right size. This tool and it's
> capabilities are important when deciding whether to implement a metric
> or imperial shop as it is the main tool to use when converting between
> decimal inches and fractional inches until intuition kicks in.

![]({{ site.url }}/imgs/CNCMachine/image29.png)

*Fig. 1 a typical Digital Caliper which measures the distance between
the jaws in decimal mm, decimal inches, and fractional inches.*

-   *Hole sizes, drill bits*

> In the metric system, drill bits are denoted by their diameter in mm
> (generally in whole numbers like 3mm but exceptions do exist) 3.175mm
> (= ⅛" or one eighth of an inch), 5mm, 10mm, etc\... Which is also the
> diameter of the hole they will make in the material to be drilled
> (small footnote here: there will be more details on this in DFM).
>
> In the imperial system, drill bits are denoted by inch fractions and
> by a gauge system. The "gauge system" operates with overlap on the
> very small end of imperial drills starting with a 1 (7/32") and
> proceeding in *non-linear steps* to an 80 (\~1/90"). In other words
> higher gauge drill bits are smaller. While fractions might seem very
> simple it can be tricky to quickly determine the fraction of an inch
> something is. Drill bits, like anything are not perfect. Some will be
> slightly bigger or smaller and all will wear over time. Say the exact
> diameter of a drill bit has shifted by 1/125" or 0.008". That drill
> bit is still fine for general use but when it is measured using the
> fractional setting on a caliper (from the bullet) the fraction might
> be confusingly different from the given drill size. Say the drill bit
> was a ⅛" given the fraction might be 15/128" which is only 1/128"
> below ⅛". **This is counter intuitive.** Metric is all decimal, no
> gauges, no fractional conversions. If a 3mm has worn slightly, it will
> read 2.97mm and be immediately recognisable, as pretty much 3mm. This
> is a convenience that cannot be understated for beginners. If this is
> too complicated, consider figure 2. Top is the spectrum of metric
> drill bits between 0 and 1". And bottom is the same spectrum in
> inches. Then add having to do decimal conversions.

![]({{ site.url }}/imgs/CNCMachine/image24.png)

*Fig. 2 a simple ruler showing the spectrum of drill bits and holes
below 1"*

-   Threads

    -   Threads are the helical or curvy teeth around the outside of a
        > screw or the inside of a nut. They are always defined by a
        > diameter of the screw or nut hole and "rate of teeth" which
        > can be measured in two ways. Pitch, as shown in figure 3 is
        > the distance between corresponding parts of a thread. Then
        > there is the other way to measure "rate of threads" which is
        > the quantity of threads per unit distance. There can be screws
        > with the same diameter that have a different rate of teeth
        > which means that for each rotation the screw will travel a
        > different distance into the nut. Smaller pitch bolts are
        > slowly to bolt in but have a higher mechanical advantage.

![]({{ site.url }}/imgs/CNCMachine/image21.png)

*Fig. 3 Shows a bolt sideways with labels. Note the major diameter and
pitch. They are the units that generally define the identity of a
thread.*

> Metric Threads: Metric threads are measured with diameter and pitch.
> But to make things easier there are standard pitches for every
> diameter of bolt. Which means that for the vast majority of cases it
> is as simple as calling out a metric bolt diameter. Which looks like
> this M5 for a 5mm hole with a 0.8mm pitch. For every diameter it's
> just "M" and the major diameter of the bolt in metric (remember the
> major diameter notation from figure 3). Non-standard pitches can be
> manufactured but generally the "fine" and "coarse" options as well as
> the default provide ample options.
>
> Imperial Threads: Once again, imperial screw sizes are much more
> complicated. For the little ones, there are gauges which run in the
> opposite direction as the gauges of imperial drill bits. Which means
> that the lower the gauge of thread, the smaller the diameter. For sub
> ⅛" bolts, the gauges from 12 down to 0 in increments of 1 and then
> there are three aditional sizes: 00, 000, and 0000. For everything
> else (again, ⅛" and larger) it is the inch fraction. Okay we're
> halfway there. The second part of an imperial thread is always going
> to be noted as a whole digit and it is the number of threads per inch.
> There aren't technically standard pitches so all imperial screws are
> noted with both the diameter and pitch. For a little screw that could
> look like "000-120" or like 1⅛-5 for a screw with a diameter of an
> inch and an eight and five threads per inch. One last thing to note is
> that custom bolts can be made in the system for any size, but there
> are only a few pitch options regularly available at each given
> diameter.

-   The insignificant extras

    -   International standards

> Almost everywhere in the world uses metric. That is a fact and the
> result of that fact is that very cheap parts are often available only
> in metric. While high end builds are available in either metric and
> imperial the low-end is ruled by metric. Which is very useful advice
> in the hobby-grade we are working with.

-   Metric is substantially easier to work with across almost all of
    > fabrication, even with no prior experience and is often cheaper
    > due to inexpensive international manufacturing options. If you
    > haven't understood all of the finer details of this discussion at
    > least take this home with you: have a good reason to use inches
    > because even if you don't know metric very well it is easier.
    > *Period.*

This explanation of screws and their uses may feel like a gigantic waste
of time but having an in-depth understanding of using screws and how
they work is a necessity in building toys like a CNC machine. CNCs are
generally driven by linear actuators that use big screws to turn
rotational energy into linear motion. Oh and everything is held together
by them. You will need to buy hundreds of screws to make a toy like this
work and knowing what you're doing with them is important.

### Learning the linear motion lingo

Most linear motion is a collection of a motor, a drive system, and a set
of bearings that constrain motion in all but one axis. Rotational motion
is almost universally the cheapest way to turn in electrical power into
locomotion. Which means that the motor and drive system have to work
together to turn the rotation of the motor shaft into linear motion.
There are two main ways to achieve this. One is with screws and
screw-like things (well go into this in a minute) and the other is with
timing belts.

-   Belts or timing belts

    -   The big advantage of belts is the inexpensive buy in and the
        > versatility that affords. Belts are extremely cheap by almost
        > any metric and don't need to be shipped in any special fashion
        > due to their not needing to stay excessively straight. They
        > are almost perfect. Before I ruin the magic, check your
        > understanding by looking at fig. x below. Belts are often used
        > in hobbyist machining applications but they are flexible. In a
        > milling machine that means that when the cutting starts,
        > excessive forces can cause the machine to lose all consistency
        > and accuracy. Okay you may ask... What about a belt like thing
        > that isn't slippery? Flex creates the enemy of the CNC milling
        > machine: backlash. Backlash is the play between components in
        > a CNC system and the best CNCs need to maintain almost none so
        > would a metal belt improve the backlash?

![]({{ site.url }}/imgs/CNCMachine/image5.png)

*Fig. x a linear motion system driven by a belt. The ends of the belt on
the right and left sides are fixed so as the motor (the large, central,
silver wheel) turns pulling the axis in either a left or right
direction.*

-   Chain: Great point. But the three problems are tensioning,
    > efficiency, and noise. Exact distances are difficult to achieve
    > with chains because the loop sizes are "quantised" by the
    > individual links. This creates the problem of how to tension the
    > chain while maintaining efficiency. Really tight chain will have
    > the least play but it will also be the hardest to turn.
    > Fundamentally, the chain is designed to be a high power and very
    > efficient transfer system but it suffers at higher RPMs because of
    > the number of moving parts and it isn't designed to transfer loads
    > without backlash. But with all of that said, there are a lot of
    > smart engineers like you who have found work arounds that make
    > chain work. Checkout the maslow CNC in fig. x which uses a
    > carefully weighted gantry to ensure the chain keeps the right
    > tension in action.

![]({{ site.url }}/imgs/CNCMachine/image15.png)

*Fig x. Maslow CNC machine which uses a weighted freehanding gantry and
chains that are sprung and weighted for tensioning. It is designed to be
an inexpensive huge CNC mill for wood.*

-   Screws (and screw-like things)

    -   Here's where our discussion of screws wraps back around.
        > Remember a screw can be defined with two numbers: the diameter
        > and the rate of teeth. The rate of teeth is important because
        > it is part of the mechanical advantage the machine has. If you
        > have a very fine pitch or high rate of the teeth the machine
        > will exert much more torque on the workpiece but it will also
        > move much slower. The classic dilemma: speed or power. The
        > reason that screws aren't often used in CNC machining is
        > because of backlash. Screws are really bolts and bolts don't
        > need to be very precise, they are designed to be tightened
        > till they bind and hold in place. Bolts and nuts have a lot of
        > play. If you hold a bolt with an engaged nut with a hand on
        > the bolt and a hand on the nut the nut will be able to move a
        > little bit. In figure x, we can see why this happens. There
        > will be a deeper analysis of this effect, in the fourth class
        > which focused on DFM but the nut has to be made larger than
        > the screw for it to engage on the thread and that means that
        > the screw has to re-engage the nut each time in changes
        > directions that means that the nut isn't moving along the
        > thread as much as the thread is moving. Backlash. Figure x,
        > shows a nut engaged on each direction of the screw, we can use
        > this to our advantage by placing a spring that forces the two
        > nuts apart and keeps them engaged. This is called an
        > anti-backlash nut and it almost counts as a screw-like thing
        > because it is such an improvement on what a normal screw
        > brings to the table.

![]({{ site.url }}/imgs/CNCMachine/image13.png)

Fig. x shows how a nut can only be engaged in one direction at a time,
and when the direction of the thread changes there is some lost linear
motion.

![]({{ site.url }}/imgs/CNCMachine/image10.png)

Fig. x shows two sprung nuts, in much the same orientation as the nuts
in figure x but as a more tangible solid part.

-   Screw like things: The undisputed king of CNC is the ball screw.
    > Ball screws work by creating a totally different kind of
    > engagement between a nut and the helical slot. Ball screws are so
    > called because there are intermediary ball bearings between the
    > mediums that both work to reduce friction and create such long and
    > smooth segments that they can cancel much of the individual
    > engagement problems.

![]({{ site.url }}/imgs/CNCMachine/image19.png)

A couple other things to touch on:

-   Couplings

    -   The world is far from perfect and no rotating bodies will ever
        > line up perfectly. It is very important to consider how the
        > rotational motors will actually connect to the linear rods. On
        > a lot of early 3D printers, makers just shoved aquarium tubing
        > on the motor shaft and the linear rod and then added many
        > zipties.

![]({{ site.url }}/imgs/CNCMachine/image31.png)

*Fig x, an adequate coupling built from zip ties and flexible tubing.*

-   There are slightly better ways to couple linear motion components
    > once you have a 3D printer available.

![]({{ site.url }}/imgs/CNCMachine/image26.png)

-   The next tier of coupling quality on this kind of project are spring
    > or flexible bearings which are manufactured to a higher quality
    > professionally and are, despite their name, still more rigid than
    > either of the previous mentions.

![]({{ site.url }}/imgs/CNCMachine/image20.png)

*Fig. x, a flexible coupling with two set screws at odd angles.*

-   Finally, the one of the best coupler designs is a semi-flexible
    > oldham coupling. Which tends to be particularly noteworthy due to
    > the stark color contrast of the brushed aluminum finish and a
    > bright softer middle.

![]({{ site.url }}/imgs/CNCMachine/image6.png)

*Fig. x, an oldham style semi-flexible coupling. Note the red middle is
a rubber material and typically called the spider.*

This brief joant into the magical realm of couplings is included for a
couple reasons, one to steer you in the direction of good couplings but
more importantly to continue to highlight the variance of engineering
solutions, each with their own reward structure.

-   Types of bearings: CNC machines mainly use linear slides for
    > purposes of smooth locomotion. A linear slide is generally any
    > kind of bearing assembly that constrains all but one degree of
    > motion. No pitch, no roll, no yaw, just one axis of sliding.
    > Typically, there are about five standard linear slide designs.
    > Dovetails, dual linear rods connected by a carriage, flat steel or
    > aluminum with skate bearings constraining it on all sides, nylon
    > or low friction covered bearings riding in or on an aluminum
    > profile, and loaded linear rail carts. The decision of which to
    > use is basically: price, weight, and maintenance. Though even that
    > is really cheating because price, performance, and weight on CNC
    > mills are all positively correlated. In an example like figure x
    > we can see a very cheap and lightweight setup that can still do a
    > lot of awesome stuff. But heavier linear motion components are
    > much stronger and more rigid allowing for manufacturing with much
    > tougher materials.

    -   Quick note on dovetails: they require more maintenance than many
        > realize and is a reason that converinting old manual machining
        > equipment into modern CNC equipment isn't more popular.
        > Dovetails need active lubrication throughout their usage or
        > they will grind down and create more play.

![]({{ site.url }}/imgs/CNCMachine/image17.png)

*Fig x, shows a short linear slide featuring a weak and flexible belt
and a light and cheap extrusion slide linear bearing system. This is a
cheap and cheerful setup that will be more than adequate for wood.*

4. The Right Linear Motion System for You
-----------------------------------------

In order to decide on a linear motion system and the composition and
design of the frame, it is important to understand the limitations of
budget and what materials you are interested in cutting. Very
inexpensive machines can have surprising versatility and due to more
ubiquitous access the rest of the focus of this course will rest on belt
and extrusion slide-based machines intended to cut wood, vinyl, leather,
plastics, etc... as accurately as possible. With a little creativity
much of this material applies to more expensive rigid milling machines.

5. What does a mill look like electrically? What will yours look like?
----------------------------------------------------------------------

### The big picture

There are three main parts to an operational CNC machine. Firstly, there
is the cnc milling machine, with its motors, linear slides, and spindle.
Secondly, there is a control box that supplies power to an embedded
microcontroller that interfaces between stepper drivers (one for each
stepper motor on the CNC) and the third and final component, a PC that
runs the G-CODE or coordinates that tell the machine where to go. There
are several other inputs that go into the embedded microcontroller.
There will be an "end stop" for each axis that homes the machine so it
knows the exact position of each axis each time it powers up. Finally,
there is an external emergency stop or E-STOP. Generally it is a big red
panic button that occasionally has to be stressfully slammed.

![]({{ site.url }}/imgs/CNCMachine/image32.png)

*Fig x, shows an incomplete assembly of a CNC electronics stack
featuring a wall power supply and buck converter or voltage changer
providing power to four stepper drivers which are in turn connected to
an embedded microcontroller.*

### Motors and Stepper Drivers

In the hobby space, the vast majority of CNC machines use DC stepper
motors. The physics and exact functionality of these motors isn't
extremely important. What is important is that stepper motors have some
behavioral quirks that other motors don't share. Firstly, stepper motors
have peak torque at a standstill and only lose torque as their RPM
increases. Secondly, there is a much smaller variety of motors due the
National Electrical Manufacturers Association or NEMA. They use three
standard convenient sizes for projects the NEMA 17, NEMA 23, and NEMA
34. The numbers correspond to a slightly confusing motor width in
inches. The NEMA 17 motor is 1.7" across.

  Motor Type:   Motor Size:   Typical Torque:\*   Price Per:   Stepper Driver Price:
  ------------- ------------- ------------------- ------------ -----------------------
  NEMA 17       1.7"          60 Ncm              \$13.99      \$2.00
  NEMA 23       2.3"          190 Ncm             \$25.99      \$24.00
  NEMA 34       3.4"          1200 Ncm            \$69.99      \$50.00

*Table 1. Note that the typical torque is dependent on the length of the
motor. Also note that each stepper motor doubles the cost of the last
but has substantially higher torque per dollar.*

Nema 17s are pretty small and weak but their popularity among 3D printer
designers has massively brought their costs down making them a focus for
the requirements of this class. NEMA XX motors are always available in a
number of different depths which grant more customization and overhead
on the typical torque numbers from the table.

**3. CAD and Linear Motion**
============================

1. Introduction
---------------

This

**Structure:**

> CAD and Linear Motion

a.  An overview of working in Fusion

b.  3D CAD ramp from beginner to intermediate and a jumping off point
    > for the more practical half of the materials.

c.  A few tips

d.  Discussion of several devices and the complexity of making full 3D
    > models

2. Working In Fusion
--------------------

When you first open fusion, after you are prompted to sign in you will
see a home screen that looks much like this one below. Minus the crudely
drawn colorful rectangles of course. The rectangles are placed on the
screenshot below for a brief explanation of all of the parts they
represent. The pink or top rectangle that encircles all of the icons is
the least important to explain. All of the icons in the pink rectangle
have an information dialog box that will pop up if you hover the mouse
icon over them meaning that they don't really need to be explained in
great detail here. The icons are all about making changes to or
formulating the design. The blue and magenta boxes (in the upper left
and right corners) and the brown box at the bottom are all about
observing the file and it's parts and history. The final box, green or
positioned in the lower center is the slightly tough to find display and
interaction settings block.

![]({{ site.url }}/imgs/CNCMachine/image2.png)

The brown box at the bottom encapsulates the timeline of a design file.
This will track changes as they occur. It is empty or unpopulated at the
moment because the file has just been opened. The timeline allows you to
go back in the file history and make changes at different points. The
system will then regenerate a new timeline with those changes, often
without needing to fix merge conflicts.

The purple box, located in the upper right corner is the view cube. You
can click on any of its sides that are visible to move the camera to
that perspective. Generally it is more useful to click and drag on a
face to move the camera around for more fine control. If you do this
before you've actually made any geometry in Fusion, the results will be
pretty uninteresting.

The blue box shows all the entities that exist in the file. These
entities are generally restricted to:

-   Sketches

    -   These are the flat planes with sketch geometry on them that make
        > up the bases of all of the 3D geometry in your CAD file.

-   Components & Bodies

    -   Understanding the difference between components and bodies and
        > the broader reasoning for those differences is key to
        > understanding the difference between Fusion and other CAD
        > softwares.

    -   In fusion, no matter how many parts are in an assembly, it all
        > takes place in one file. The way this one file (generally
        > .f3d) organizes parts and sub assemblies is within the
        > confines of components and bodies. A body is any self
        > contained piece of 3D geometry. Any number of bodies can make
        > up a component, but generally it is only one body per
        > component and then, you simply add more components when you
        > have more bodies. A component is kind of like a folder for
        > bodies. But like folders a component can have a component or
        > multiple inside it. This is how sub assemblies are organized.

    -   For a more in depth and user friendly explanation of this
        > dynamic: [[Fusion 360 Components & Bodies for New Designers -
        > Fusion 360 Blog
        > (autodesk.com)]{.ul}](https://www.autodesk.com/products/fusion-360/blog/components-bodies-for-new-designers/)

-   Joints (sometimes called constraints in other CAD softwares)

    -   Joints are user created rules defining how parts interact with
        > each other. If you want a bolt to stay in a hole, you have to
        > constrain it there. Joints can also be used to simulate
        > motion. You can define the gear ratio between rotating bodies
        > so when one is rotated the other will rotate the correct
        > amount relative.

    -   More details: [[Joints in Fusion 360: A Comprehensive Tutorial!
        > FF117 -
        > YouTube]{.ul}](https://www.youtube.com/watch?v=Bw08O6XsfDI)

-   Construction Geometry (think planes that can be sketched on)

    -   Construction geometry is an advanced tool for accessing parts of
        > a CAD file that can be difficult to get to otherwise. Much
        > like scaffolding in real life. Construction geometry is
        > advanced for the scope of most of our work but I think it's
        > important to touch on here.

    -   For reference later: [[Hacker Lab Coworking & Makerspace - Using
        > Construction Planes in Fusion 360 - Bringing your sketches to
        > new heights \| Hackerlab
        > Global]{.ul}](https://www.hackerlab.org/en/blog/read/1342521194/using-construction-planes-in-fusion-360---bringing-your-sketches-to-new-heights)

3. Ramp to Intermediate CAD Skills
----------------------------------

![]({{ site.url }}/imgs/CNCMachine/image34.png)

4. A Few Tips
-------------

Save time by grabbing CAD files of standard parts

![]({{ site.url }}/imgs/CNCMachine/image7.png)

Sectional analysis

![]({{ site.url }}/imgs/CNCMachine/image14.png)

![]({{ site.url }}/imgs/CNCMachine/image8.png)

Modifying the appearance of different bodies

![]({{ site.url }}/imgs/CNCMachine/image4.png)

![]({{ site.url }}/imgs/CNCMachine/image9.png)

An important step in reducing the number of revisions in any design
involves finding problems before the parts have gone to manufacturing.

5. Taking it Further and Developing something for this class
------------------------------------------------------------

**4. Design for Manufacturing**
===============================

1. Introduction
---------------

This

**Structure:**

> CAD and Linear Motion

a.  3D CAD ramp from beginner to intermediate and a jumping off point
    > for the more practical half of the materials. With an introduction
    > focusing on visualizing the moments and basic physics concepts and
    > choosing fasteners, bearings, and general hardware.

2. 3D Printing
--------------

### The Basics

3D printers lay down plastic in thin lines that bead together as they
dry, forming a strong bond. These bodies can be very complex and
customizable as long as they are smaller than 20 cm\^3. But keep in mind
that FDM printing is really slow and can be less accurate than other
forms of manufacturing. 3D printers are most accurate in the X-Y axes.
With distortion and layer thickness reducing the resolution. So you may
be tempted to design parts in thin assembly ready plates that utilize
the accuracy constraints on the Z. That is the smart way to work. But
instead of 3D printing those parts it is better to cut them out on the
laser cutter because thin wood is often stronger than thin plastic and
importantly the part will come off the bed in far less time. But if you
are set on 3D printing, then understand the differences between the
plastics and the significance of print slice settings.

### Designing Parts to be 3D Printed

#### Geometry

-   Bridging

    -   Is when the printer has to lay out plastic between two supported
        > points. This causes the plastic to sag in these places during
        > the printing process. This process happens the most on
        > vertical axis holes found in the walls of items printed going
        > up on the Z-axis.

    -   Solutions:

        -   Make the distances involved really small.

        -   Use support material, which will be generated by the slicer.

            -   Support material is a additional plastic extruded to
                > ensure that the part doesn't sag, it is then removed
                > after the printing process. Removing it can be hard
                > without damaging the part and it will always leave a
                > mark on the surfaces it has been removed from.

    -   At the end of the day, some sag or marks will always be
        > noticeable on parts unless the bridges are reduced to
        > 0.25"/5mm or less.

        -   3D hubs suggests that an advanced solution is to separate a
            > part into several pieces to be assembled after printing.

-   Vertical Axis Holes

    -   When you put a whole in the side of 3D printed part, be ready
        > for the hole to be undersize by a decent margin.

    -   The reasons for this are fairly simple (3Dhubs):

        -   As the nozzle prints the perimeter of a vertical axis hole,
            > it compresses the newly printed layer down onto the
            > existing build layers to help improve adhesion.\
            > The compressing force from the nozzle deforms the extruded
            > round layer shape from a circle into a wider and flatter
            > shape (see image below).\
            > This increases the area of contact with the previously
            > printed layer (improving adhesion), but also increases the
            > width of the extruded segment.\
            > The result of this is a decrease in the diameter of the
            > hole that is being
            > printed.![]({{ site.url }}/imgs/CNCMachine/image30.png){width="3.697270341207349in"
            > height="3.3906255468066493in"}

    -   This issue is particularly bad, when the holes are smaller
        > relative to the nozzle. Think 3mm holes.

    -   This effect can be accounted for in slicers and even on printer
        > firmware, but since you are likely working on educational
        > equipment. Expect the worse end of that spectrum.

    -   Solutions:

        -   If the diameter is not critical, aka the bolt/screw needs to
            > be a slip fit, then just make the hole oversized in the
            > slicer.

        -   If the diameter needs to be exact, CAD the hole actual size
            > and then drill it out when the print comes off the bed.

-   Overhangs

    -   This is an annoying one. Overhang causes a lot of problems in
        > FDM printing. It occurs when a material is printed only
        > partially supported by the layer below. It is a lot like
        > bridging but more troublesome. It is normally fine to print up
        > to 45 degrees. As you can tell at 45 degrees a new layer is
        > half supported by the previous layer. Note the a side effect
        > of this trend where the end of a steep overhang gets thinner
        > causing uneven cooling and the tip to trend towards drifting
        > up.![]({{ site.url }}/imgs/CNCMachine/image3.png){width="4.442708880139983in"
        > height="1.4189271653543307in"}

    -   Solutions:

        -   Similar to bridging, use supports or prepare for the worst.

        -   You can also avoid this by staying away from this feature.

-   Corners

    -   Keep in mind that no 3d printed outside edge is ever going to be
        > perfectly square because the nozzle is round. (Most machines
        > have 0.4mm nozzle, though it is replaceable and smaller ones
        > can be purchased.) This is important if you are trying to
        > design parts to slide together. Another important factor, if
        > this weird effect called elephant\'s foot. Wherein the first
        > layer of the print is pushed into the bed by the nozzle
        > causing it to spread out a little over the rest of the wall.
        > ![]({{ site.url }}/imgs/CNCMachine/image23.png){width="2.8125in"
        > height="1.8125in"}

    -   Solutions:

        -   3D Hubs: If assembly or overall dimensions are critical to
            > the function of an FDM part, include a 45o degree chamfer
            > or radius on all edges touching the build plate. For high
            > precision form & fit testing, go to college.

-   Vertical Pins

    -   These features are often used to ensure that parts designed to
        > press fit are lined up properly. To shorten a lot of
        > information. Always make them \<5mm in diameter, otherwise
        > they will be extremely brittle.

    -   Solution:

        -   If you need a really small pin, add a fillet at the base to
            > shift the stress point up the length of the rod.

-   Advanced Stuff

-   Rules of Thumb

    -   3D Hubs gives this convenient list of rules of thumb:

    -   If a bridge exceeds 5mm, sagging or marks from support material
        > can occur. Splitting the design or post-processing can
        > eliminate this issue.

    -   For critical vertical hole diameters, drilling after printing is
        > recommended if high accuracy is desirable.

    -   The addition of support will allow FDM printers to print wall
        > angles greater than 45 degrees.

    -   Include a 45 degree chamfer or radius on all edges of an FDM
        > part touching the build plate.

    -   For applications with small vertical pins, add a small fillet at
        > the base or consider inserting an off the shelf pin into a
        > printed hole instead.

    -   Splitting a model, re-orientating holes, and specifying build
        > direction are all factors that can lower cost, speed up the
        > printing process, and improve the strength and print quality
        > of a design.

#### Hole Tolerances and Integrating reusable fasteners

![]({{ site.url }}/imgs/CNCMachine/image22.png)

Fig x, table of tolerances for different mm diameter holes

-   Charts like this provide really nice numbers for manufacturing and
    > CAD based on what you want to use the screws for. Keep in the mind
    > the top, where it says close fit, medium fit, and free fit.

    -   If you want a chart like this for non-metric screw sizes...

        -   Don't use non-metric screw sizes (google it).

Attaching several 3D printed parts

-   Bolts and Nuts

    -   Reliable, cheap, simple, somewhat inconvenient

-   Bolt and heat-set inserts for plastics.

    -   Reliable, expensive, simple
        > convenient![]({{ site.url }}/imgs/CNCMachine/image12.png){width="1.5677088801399826in"
        > height="2.2868405511811023in"}

    -   They are typically bronze and are very simple to use. Just over
        > size your hole to the spec of the manufacturer and then set
        > the thread insert onto the hole and place a hot soldering iron
        > onto the top. It will soften the plastic and the thread insert
        > will slide in. Once it is in place, remove the iron and gently
        > blow on the plastic around the threaded insert.

-   Super glue/solvent

    -   Excellent solution though difficult to undue and can be messy.

-   Welding

    -   Plastic welding is really easy and fun way to get a strong
        > connection between two or more pieces. Pick up a plastic
        > welder or just use a discarded soldering iron. Run the warm
        > tip along the seam until you cannot see between the parts.

-   Friction

    -   Be careful on this one, it is a little difficult to explain to
        > an authority figure.

    -   Place some discarded filament into a dremel tool and spin it up
        > while applying light pressure to the joint. While it will
        > require some practice and experimentation, it can provide a
        > fast, wireless way to connect stuff.

### Slicing 3D Prints

#### File Selection

All 3D prints start with a 3D model, that model is generally in the .STL
format. In order to send the model to the printer it has to be sliced,
or converted into motion coordinates for the machine to interpret in
binary. This process is called slicing and the programs that do it are
called slicers. This useful as frontend information because lots of
settings between you exporting a 3D printed model and the model going to
the printer can be edited or optimized for strength or weight. The main
ones to consider are:

#### Infill percentage

Infill percentage is almost certainly the most important characteristic
to manage while slicing a new 3D Print. It is the amount of plastic fill
that is used inside of the part. 20% infill is strong enough for the
majority of 3D prints which is why that is the default setting on almost
every machine. If you need to make a very light part you can drop the
infil or if you are making a very small load bearing part, you may need
to increase the infil. Not in the figure below the red lines inside the
outer shell on the left figure and then their disappearance on the
right. That is the infil level going from a geometric 20% to a barebones
0%. Basically the stronger you need the part to be, the higher the
infill should be.

### ![]({{ site.url }}/imgs/CNCMachine/image33.jpg)

#### Coordination or relative position (and supports)

This one is simple but important. As mentioned earlier, the printer has
the most resolution on the ground X-Y axes. So it is an important
decision how the part is oriented. Ideally orientation of printing has
been a consideration throughout the design process. The sooner you think
about this the better. Note in the figure to the right how the layers
going up are very low resolution. Causing the outside of the drum to be
very rough. Features that require accuracy in the Z axis are going to be
rougher than those that only require accuracy in the X-Y axes. To
further illustrate this, notice how the circle in the next figure is
much smoother.

![]({{ site.url }}/imgs/CNCMachine/image25.png)![]({{ site.url }}/imgs/CNCMachine/image16.png)

#### Shell Thickness

This is a really simple one that you basically never need to worry
about, but should know is tweakable anyway. In the figure below you see
a cross section of a sliced part with the infil in red and the outside
layers in yellow. The shell thickness is the width of the outside wall
as circled in the picture. You never need to worry about messing this
unless you are printing without infill.

### ![]({{ site.url }}/imgs/CNCMachine/image28.png)

#### Layer Height

This is another fairly simple one. The reason it is below shell
thickness is because it doesn't have the power to compromise the
integrity of the part. Just exponentially increase the amount of time it
will take to print. If you have a small part, print it at 0.10-0.20, for
really big stuff go up to 0.3-0.35. Low layer heights result in passes
on the machine making high res parts take forever to print, print at low
resolution whenever you can.

![]({{ site.url }}/imgs/CNCMachine/image27.png)

#### Scale

Just keep in mind that you can scale parts in the slicer without having
to edit the actual design file. Allowing for quick customization for
cosmetic parts like models, jewelry, or name plates.

### Life in Plastic

Now onto a slightly less useful and interesting part of the lesson:
Plastic choice. This can seem like a pretty mundane and useless decision
to make during an engineering project, but it can make quite the
difference.

PLA

Hassle: very low, 15\$ per roll, non-translucent, glossy coloring

Is the cheapest filament or plastic by far. Always start with PLA to
make sure the dimensions are right for a part you are making because it
is the cheapest to replace. It also prints in the highest quality so
cosmetic parts are best kept in the warm and fuzzy realm of printing
with PLA. It is also the weakest mainstream printer filament and the
easiest to melt. On a warm summer day it will get soft and lose form
(don't leave PLA in a warm car).

Additional bonus when working with PLA, it is biodegradable.

ABS

Hassle: pretty high, 23\$ per spool, non-translucent, glossy coloring

ABS is much harder to print than PLA so parts that are supposed to look
very smooth and professional should probably stick to PLA. But it is
stronger for applications where high yield strength is necessary, it
also won't soften on a warm day, making it much more useful for
applications involving nichrome wire or other instances of induced
heating.

PETG

Hassle: pretty low, 27\$ per spool, translucent, glossy coloring

PETG is a slightly modified version of the plastic that most bottles are
made from, modified to be clearer and less brittle. It is stronger again
than ABS, it cannot be overheated and made brittle, it can be
sterilized, it is more impact resistant and it doesn't soften under
intense radioactive conditions.

Not that the cost increase may not seem like a big deal it is really
more the hassle increase due to how hard getting non-pla materials to
stick is.

Weird Other Stuff

There are lots of other filaments with properties like even more
strength than PETG, actually being clear, having embedded materials like
wood, stone, or ceramics, etc... Most of these aren't necessary for a
SCIOLY event, but I encourage you to research on your own time and see
what else is out there.

**5. Epilogue**
===============

1. Introduction
---------------

This

### Structure:

> Epilogue, What's Next, and Why it's All Important

a.  General notes on machine safety

b.  Materials and why researching them beforehand is important

c.  Calibration and software implementation plus milling machine usage
    > including basic CAM and tooling overview. Final tidbits about how
    > you can use an "okay" milling machine to make a better one.

2. Safety Concerns, Equipment, and Material Handling
----------------------------------------------------

### Introduction to Safe CNC Operation

Something to keep in mind about machining is that it doesn\'t compare
too well to other forms of manufacturing available to makers. Processes
like 3D printing, laser cutting, and even plasma cutting have far fewer
variables to consider and can generally be nearly totally automated. The
stakes of plasma cuts, 3D prints, and laser cutting failures are also
generally fairly well constrained to poor performance and perhaps a
small chance of fire or dangerous fumes. CNC really raises the bar in
this regard. The first things to consider are fractures which can happen
at high speeds sending airborne shrapnell in a near random direction.
Next the fumes and fire risks need to be accounted for. Lots of
materials create hazardous dust or chips when machined that need
containment.

### A Note on Materials Handling and Selection

After a maker moves past exclusive use of 3D printers, they need to get
into the habit of doing some basic research on any and all materials
they are interacting with. Any spool on a 3D printer is a heavily vetted
and researched item. The versatility of more advanced maker tools comes
with costs. Almost anything can be machined but since most materials
aren't designed or sold for the sole purpose of CNC, it can take time to
find the safety information you may need. And taking that time is always
worthwhile.

### Device Specifics

#### Laser Cutters

Many materials are available as thin, hard, sheets, but not all of them
are well suited to laser cutters. Optimal choices for laser cutting will
"vaporize" instead of melting under the extreme heat of the laser. Many
plastics, especially those commonly used for food storage like HDPE and
Polycarbonate melt and burn causing terrible quality parts and high risk
of damage to a laser cutter and exposure to fairly toxic fumes[^1]. It
is always a good idea to make sure a material you want to laser cut is
either on the "machine approved list of materials" or checking elsewhere
that it has behavior similar to materials that are. The main dangers
from laser cutters are eye damage, risk of combustion, and fume
exposure. Most laser cutters are fully enclosed in a protective shield
and have a vacuum pump pulling air out of the enclosure and filtering
it. If a laser cutter is missing one or both of these it is a good idea
to use a light respirator mask and laser rated shaded safety glasses. As
for combustion risks, they are low if you have done your research on the
material you're cutting but it's always a good idea to know where the
fire extinguisher is located.

#### Plasma Cutters

Plasma cutters work by using accelerated super heated electrically
ionized gas to cut through conductive metals. The limitation that the
work pieces need to be conductive metals keeps things pretty simple
here. The usual conductive metal suspects Steel, Iron, Aluminum, Brass,
Copper, and Stainless are all chemically stable and relatively safe.
However, the interaction between the plasma and the metal is extremely
dangerous. The bright arcs require welding visors to protect our
sensitive eyes and the extreme heat and force of the plasma creates
sparks and can create airborne chunks of superheated metal. If you're
plasma cutting, ensure you're wearing the proper safety equipment for
welding the equivalent material. This includes, long sleeves to block
from small burning fragments and from high UV exposure, a welding visor,
and a respirator mask for fine dust and metal impurities made airborne
by the heat.

#### Milling Machines

As mentioned before the big general safety concerns with milling involve
the endmills or milling machine specific drill bits breaking during
operation. This generally happens because the machine programmer, you,
have fallen into one of thousands of pitfalls. For hobbyist machines the
speeds the fractured metal will reach can be a little frightening but
with solid eye protection like safety glasses or a clear face shield
seriously mitigate the risks. The end mills are so light weight that
it's unlikely the force from an endmill will cause more than a light
bruise in a worst case scenario. What can be more dangerous is the
workpiece or material being machined getting thrown. It is important to
make sure that any material being held down for machining is held
strongly enough to withstand a blow from a mallet. A CNC can easily
exert forces rivaling that hammer strike in extreme circumstances. The
material hazards involved in CNC machining are generally derived from
the way the CNC mill cuts material. The end mill takes small circular
slices as it moves across the material and some materials, especially
the soft ones, chip off in very small pieces. Aluminum chips will often
be sized as splinters and very sharp while in stark comparison MDF or
Medium-Density Fibreboard when milled often produces micrometer fine
dust. The fine dust produced when machining MDF is dangerous because it
contains high levels of formaldehyde and the fine particles can
penetrate deep into the lungs.

The sheer amount of versatility offered by CNC milling is exciting.
Mills can cut almost anything to pretty precise dimensions. But that
means that materials with huge health risks associated with their use
can slip by without a user taking the proper precautions. Always read
about the materials you are about to cut beforehand and take proper
precautions.

3. What's next after hardware and electrical assembly?
------------------------------------------------------

### Calibration and software implementation

This section is heavily reliant on information from part 2 of this
coursework. Especially the materials in section 5 relating to
information and communication structure of the milling machine. To
briefly review that section, a mills electrical control system has a
micro controller and a desktop computer that interact together to drive
the CNC. The computer will have control software that will parse or
interpret the CAM or toolpaths you've generated into serial or digital
coordinate and machine status information for the controller. Many CNC
controllers, especially older ones will be very "plug and play" because
their hardware is built to be very proprietary. Newer CNC controllers
will be built on more versatile platforms like the Arduino
microcontroller which may require finding relevant source code and
uploading it to the microcontroller. This article from Howtomechatronics
([[How to Setup GRBL & Control CNC Machine with Arduino
(howtomechatronics.com)]{.ul}](https://howtomechatronics.com/tutorials/how-to-setup-grbl-control-cnc-machine-with-arduino/)
is an extremely useful guide for getting a handle on putting the right
community made software on your Arduino powered CNC. The same article
goes into how to calibrate a CNC machine too. This is useful because
CNCs are very good at knowing how far they've traveled since they were
powered up but pretty bad at figuring out their starting position. This
is why CNC machines need to "home". This is a prompted or unprompted
slow motion of each axis in a defined direction until each gets to an
origin position. The machine knows each axis has gotten to the correct
position because there is a touch sensor in that position that is
activated as the machine reaches it.

### Milling Machine Usage, CAM, and understanding tooling

Milling machines are awesome tools but they are slow and expensive. As
you become a machinist you'll begin to see exactly where milling
machines work and what makes them more difficult and unrully. Something
to come to terms with is that a lot of projects will take as much time
to make tool paths/CAM for as they took to design. There are plenty of
great introductory resources online to get started, I will link a few of
the resources I've found the most useful and introduce the workflow of a
lot of the machining operations I've done.

[[Fusion 360 CAM for CNC Beginners : 19 Steps (with Pictures) -
Instructables]{.ul}](https://www.instructables.com/Fusion-360-CAM-Tutorial-for-CNC-Beginners/)

[[Fusion 360 CAM: Introduction & Toolpaths - Fusion 360 Blog
(autodesk.com)]{.ul}](https://www.autodesk.com/products/fusion-360/blog/getting-started-introduction-to-cam-and-toolpaths/)

[[https://www.youtube.com/watch?v=Do_C\_NLH5sw]{.ul}](https://www.youtube.com/watch?v=Do_C_NLH5sw)

[[CAM for Fusion 360 Tips and Tricks - Fusion 360 Blog
(autodesk.com)]{.ul}](https://www.autodesk.com/products/fusion-360/blog/cam-for-fusion-360-tips-and-tricks/)

Most of the CAM you'll write for starter CNC projects will be
essentially 2.5 axis machining. Which is essentially when you are only
interested in a 2 axis sketch with various features having only a
straight extruded depth. Think parts that can be designed with only one
sketch. Like a flat panel with a series of holes and a special outline.
The lack of complex 3D geometry on these parts makes them comparably
very easy to design CAM for.

#### Some Simple CAM tools and advice

For the majority of 2.5 axis milling there are three tools to consider.
2D Pocket, 2D Contour, and Engrave. 2D Pocket is the tool for clearing
large amounts of stock without making a hole. It makes simple recessed
parts quickly and efficiently. 2D Contour is for "cutting things out."It
creates long slots as deep as the stock. It is important when contour
machining to enable the "tabs" option so the parts being machined don't
instantly fly out.

Any milling machine worth its wait

### The path to a better machine

If you've decided to follow along on the hardware and electrical side of
this project and have a budget, but reasonably capable machine or if
you're considering taking the dive there is a long and reasonably
interesting history of improving machines. A well designed machine tool
will always be able to make a more accurate version of itself. This
process is exactly how we are able to achieve the extreme precision of
commercial machines.

If you're interested in how this process worked historically, or in
following along with with your own slightly optimised process check out
a series of books by a famous DIYer called David Gingery who wrote a
series of books on building a formidable machine shop with time and
materials available in dumpsters and hardware stores.

Books: [[Build Your Own Metal Working Shop From Scrap - Hard Bound
Edition
(gingerybookstore.com)]{.ul}](https://gingerybookstore.com/MetalWorkingShopFromScrap.html)

Good Video Resource: [[The Best Gingery Lathe Video Series To Date \|
Hackaday]{.ul}](https://hackaday.com/2016/07/07/the-best-gingery-lathe-video-series-to-date/)

But what steps can I take with this specific device? Well that really
depends on your time and creativity. The pen plotter, really doesn't
need physical strength upgrades unless you want to build a bigger one.
The pen plotter, as mentioned in section 3, can fairly easily be turned
into a somewhat capable milling machine. From there the mill should be
able to make ⅛" parts out of aluminum which could be used to shore up
the much less rigid 3D printed parts increasing rigidity and potentially
feedspeeds. As mentioned in section 2, there are plenty of linear motion
drivers and bearings across all price ranges that could be implemented.
The aluminum extrusion in combination with steel linear bearings would
be a good combo for moving into more audacious CNC aluminum projects.
Really, the only constraints on the upwards mobility of this system are
time and money.

[^1]: Note in this case "fairly toxic fumes" denotes NFPA fire rating of
    1, with hazard identification noting toxic gases and fumes are
    released in burning but overexposure poses little likelihood of
    significant side effects. [[SciCron \| MSDS \| Polycarbonate Sheets
    (sctech.com)]{.ul}](https://www.sctech.com/MSDS-Polycarbonate-Sheets)
