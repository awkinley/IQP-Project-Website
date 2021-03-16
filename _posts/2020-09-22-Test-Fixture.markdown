---
layout: post
title:  "Design a Carabiner"
date:   2020-09-22 10:05:30 -0400
categories: project
project_img: "/imgs/test_fixture_placeholder.png"
project_desc: "Follow along with the tutorial to design a 3d printable carabiner. Learn about mechanical stress and use various tools to improve the strength of your design."
project_color: "#DF5959"
---

Designing a Carabiner
=====================

Project Information
===================

Description: Students will follow along with a tutorial and learn to
design a 3d printable carabiner in CAD and then use FEA to analyze the
performance of the design under stress. Students will use the insights
gained from FEA to improve the strength and performance of their design.

Learning outcomes:

-   Students will understand how stress affects 3d printed parts.

-   Students will know the basics of how FEA can be applied to part
    design.

-   Students will know what FEA is and its applications to mechanical
    engineering.

-   Students will better understand how to apply their knowledge of
    mechanical stress to part design.

-   Students will be able to use FEA to study part stresses.

Estimated Time: 5 hours

What students will need:

-   A computer with some CAD and FEA software (Fusion 360 is used in
    this tutorial)

-   Basic knowledge of how to use CAD and FEA

    -   This can be learned at the tutorial goes, although it will
        increase the amount of time it takes

Introduction
============

Project Goal
------------

The goal of this project is to introduce part design, design
optimization using FEA (Finite Element Analysis), design for
manufacture, and iterative design. Giving examples of how to apply those
skills to a carabiner, then challenging them to design their own
carabiner and compete to see who can make the strongest one inside a set
of parameters.

Prior knowledge
---------------

Basic knowledge of a CAD program is needed, there are many online CAD
classes available. Since I will be using Fusion 360 I would suggest this
series by Lars Christensen <https://youtu.be/A5bc9c3S12g>

You will also need to know your way around the FEA (Finite Element
Analysis, a method for simulating physical phenomenon on parts or
mechanisms) section of your CAD Program.

Fusion 360 is not the only CAD program you can use; the concepts will
translate to most programs. You can use any program you prefer, but this
tutorial will cover how to do things in Fusion 360.

Needed Programs
---------------

CAD/FEA: Fusion 360 or your choice

Slicer: Cura or your choice

3D Printing
-----------

3D printing and specifically FDM is a form of additive manufacturing
that can turn part files into finished parts using a variety of
materials. FDM stands for Fused Deposition Modeling, creating parts by
putting down material layer by layer until a 3D part is formed. With
each layer being a cross-section of the chosen part file.

(VIDEO HERE) <https://www.youtube.com/watch?v=AwIjArLWjtY>

While not the most ideal for making carabiners the combination of
widespread availability, speed, along with the low cost of 3D printing
makes it ideal for interactive design and prototyping.

As a whole, you can 3D print out of materials from sugar to Kevlar, we
will be focusing on PLA and ABS. The two most popular materials to print
with.

PLA, Polylactic acid, is a thermoplastic polymer usually made from corn
starch. PLA's advantages are its low cost, ease of printability and good
strength.

ABS, Acrylonitrile Butadiene Styrene, is another low-cost thermoplastic.
With better impact resistance and wear resistance than PLA. With the
main disadvantage of being harder to print due to higher temperatures
and increased warpage.

One of the most useful ways to analyze a material is by looking at the
stress-strain curve. Showing the relationship between stress (σ),
representing the amount of force the material is under per cross
sectional area, measured in lb/in\^2 or N/m\^2. And strain ε,
representing how much the material has changed in shape measured in
change in length (ΔL) / original length.

![]({{ site.url }}/imgs/TensileTester/image1.png)

Figure X, Stress-Strain graph for low carbon steel

![]({{ site.url }}/imgs/TensileTester/image2.jpg)

Figure \_ ; ABS vs PLA Stress-Strain Graph

From these two graphs, what can we tell about these materials? From the
start to the peak, called the elastic region, PLA has a steeper slope
before the yield point. The slope of this line is the Young's modulus E,
the relation between tensile stress σ, and axial strain ε (E = σ/ε). So,
looking back to the graphs of PLA and ABS, we can see that PLA is
stiffer, and has a higher yield strength.

But this is not the whole story, since with this graph we can also
measure the energy absorbed by the material, known as toughness. We find
this by calculating the area under the curve created by the
stress/strain graph. Comparing PLA to ABS, we can see that although PLA
has a higher yield strength, ABS has better toughness and can absorb
more energy before breaking.

While the stress vs strain graph is a great tool, the main problem with
comparing material properties from PLA vs ABS (in our case) is the
manufacturing method. FDM 3d printing does not create a solid block of
the printer material. One of the main variables is your printer settings
in your slicer. The slicer (I will be using CURA) takes a 3d part in an
STL format and cuts it up into multiple layers depending on your printer
settings. FDM builds 3d parts from the bottom up (+z) so each 'slice' is
in the xy plane with a set layer height. Because of this, printed parts
will have a lower tensile strength along the z axis compared to the xy
axes.

Designing a Carabiner
=====================

Let's start designing a carabiner. Like most CAD projects, it is almost
always best to start with a hand drawing of what you want your part to
look like before you do anything on the computer. This is a good way to
quickly get your ideas down without having to give things specific
values or precise plans. First, we'll get the basic structure down A
standard carabiner is pretty simple, and you probably have one laying
around to copy.

![]({{ site.url }}/imgs/TensileTester/image3.jpg)

I decided to do with the more usual shapes. An oval(ish) one, a D shape,
and a tapered design. The carabiner I have is a mix of a taper and D
shape, with a D curved top and a smaller, circular radius at the bottom.
Something I also do when drawing by hand is starting to think about how
I will design it in CAD. For the tapered carabiner, there is a big and
small circle space apart from each other. The 'oval' shape has two
circles of the same size. While this example is relatively simple,
considering CAD at the sketch level and thinking about how to break a
part down into features is important for being an efficient CAD
designer. But whatever you have, let\'s get out first sketch down in
CAD.

But before you get started, if you want to compete in the design
competition then I need to put down some ground rules so everyone is on
the same level (no 100kg 3ft carabiners that would take 9 months to
print, sorry). Your carabiner must be able to fit two, ¾ " bar's that
are 2" apart. With either one or two gates large enough to fit the bars,
with enough internal room to fit both bars in one at a time. Your
carabiner will also need to weigh no more than 0.5 ounces (\~14.2
grams). That's pretty light, good luck!

So now, we have our boundary conditions. Since those are our only known
values, let\'s get those into CAD first. I started with a sketch on the
top plane (the plane you use is arbitrary) using a construction line
starting at the origin and going down horizontally. Then adding the two
¾" circles at each end.

![]({{ site.url }}/imgs/TensileTester/image4.jpg)

Figure \_, boundary condition sketch

Your sketch should look something like this. Now that the boundary
conditions are down, you can put in your own design. This is one of the
more important choices to be made when starting a CAD model, since the
first sketch or main body is usually the hardest to change later down
the line. Since this will be 3D printed, I'd suggest making the main
body a single straight extrusion from the base plane. This not only
models how a 3D printer prints, from the bottom up, but (as outlined in
the previous section) using this printing orientation will make the
carabiner as strong as possible. Meaning that the main body won't use
any support material (support material example
[here](https://www.gambody.com/blog/wp-content/uploads/2019/10/45-degree-rule-in-3d-printing.jpg)).

With the basic design chosen, I will now sketch out the overall design.
Following my sketch, I'll start with a larger circle for the top,
connected to the bottom circle with tangent lines. Then for the outer
boundary, I used the 'offset' tool in Fusion 360 (Offset Entities in
Solidworks) to save time. After extruding your sketch, it should look
something like this.

![]({{ site.url }}/imgs/TensileTester/image5.jpg)

Figure \_, Carabiner Frame

If you are designing your carabiner for the competition, this is a good
time to apply a material (PLA) and get a rough weight. You can always
edit it at the end to get it exact, but make sure it doesn't weigh 100+
grams or else you might have a problem once it's fully designed. If
yours doesn't look like mine, while I hope you arent doing this exactly
since I'm making mine a simple as possible to leave you as much
imagination room as possible. Feel free to email me any questions and
I'll be glad to help out
([MakerIQP\@Gmail.com](mailto:MakerIQPCarabiner@Gmail.com)).

Now that the easy part of designing a carabiner is done, we need to make
the complicated part, the gate. But before we jump into that, lets apply
some of what we learned from the previous unit on the outline of your
carabiner. One of the key ways for approaching engineering problems is
breaking it down into simple parts. So, with our basic model, let\'s
find out the theoretical maximal force it can with stain before
breaking. While carabiners have three main force ratings (the main axis,
with the gate open, and in the transverse direction) we will only be
looking at its maximum strength along the main axis with the gate
closed. Let\'s start by drawing a free body diagram and find the load
path. While carabiners have three main force ratings (the main axis,
with the gate open, and transversally on the gate) we will only be
looking at the major axis.

Pretty simple stuff, but this tells us some important information about
how we can analyze this simplistic carabiner. Since the load is
symmetrical on the part, we can split the carabiner in half and only
worry about one side and multiply that by two at the end. Let\'s review
the fundamental types of loading, before we find out what the carabiner
is experiencing.

![]({{ site.url }}/imgs/TensileTester/image6.png)

Figure \_, [The five fundimental types of
loading](https://www.linearmotiontips.com/mechanical-properties-of-materials-stress-and-strain/)

Looking at our carabiner, the loading on our carabiner is tension, and
the bending effect brought by the two sides wanting to become
perpendicular. While there will be some displacement from the carabiner
being pulled thinner, we will be focusing on the tensile strength.

While the tensile strength of PLA is known, we will be 3D printing
theses so we cant go off of those numbers. As a best estimate, I found a
[paper](https://aip.scitation.org/doi/abs/10.1063/1.5085981?class=pdf&journalCode=apc)
where they tested 3D printed PLA and found the ultimate tensile strength
was 32.94 MPa (4777.5 PSI) with 80% infill. Wich is about as solid as
you can go for 3D printed parts. Now we need the cross-section area of
our carabiner, since tensile strength is measured in psi (pounds per
square inch). My carabiner is 0.2in \* 0.2in = 0.04in\^2 \* 4777.5 =
191.1 lb. So, our theoretical maximum tensile strength for my carabiner
is 191.1lb \* 2 (both sides) = 382.2lb.

Now, let\'s work on the gate of the carabiner, the main purpose of the
gate is to allow a gap in the frame of the carabiner, letting you attach
whatever is needed. Since we know roughly how strong the frame itself
is, the goal is to design a working gate that can hold at least that
much force.

 Designing the Gate
==================

Now, let\'s work on the gate of the carabiner, the main purpose of the
gate is to allow a gap in the frame of the carabiner letting you attach
whatever is needed. While also having a mechanism to automatically
re-engage the gate once it has been opened (I will be referring to it as
the sprint return, but it doesn't need to be a spring). Since we know
roughly how strong the frame itself is, the goal is to design a working
gate that can hold at least that much force. While we will be 3D
printing, let\'s have a look at some common metal carabiner designs.

![]({{ site.url }}/imgs/TensileTester/image7.png)![]({{ site.url }}/imgs/TensileTester/image8.png)

Hook Pin-Hook

![]({{ site.url }}/imgs/TensileTester/image9.png)![]({{ site.url }}/imgs/TensileTester/image10.png)![]({{ site.url }}/imgs/TensileTester/image11.png)

Screw-lock hook Screw-lock pin Wire Gate

Looking at these designs, let\'s look at each part of the carabiner's
gate. They have a bottom pivot, a hook on the non-pivot side, some form
of spring to keep the gate closed (inside the bottom pivot for most
designs) and an optional gate lock.

The wire gate design is a great example of a very simplistic and
efficient design. The bend in the wire creates the hook, the gate itself
keeping the carabiner closed, and acting as the spring. Making the wire
gate design vastly cheaper than other designs with the main trade-off
being strength. How could this basic design idea be adapted for 3d
printing? Looking at the size of the wire, a plastic version would need
to be beefed up a good bit. Since PLA is more brittle, while the top
notch will look similar the pivot and spring parts of the gate need some
changes. Making the two sides of the gate further apart, meaning the
gate will be easier to operate and not act like a solid piece of plastic
or shatter when you try to clip the carabiner onto something.

Looking specifically at the bottom part of the gate, the main design
goal is to create a 3d printable pivot that is at least as strong as the
other side of your carabiner. Aka the maximum strength it can with the
current design. Let\'s start by having a look at the classic bottom gate
pivot with just a rivet that has been peened over (Peening is where a
rivet is pushed through two parts then rounded off, but in this case the
joint is not tight to allow the gate to pivot). For most of the
non-climbing carabiners, we can take an educated guess that the pin on
either the pivot point of the gate or the hook (depending on the design)
will be the weak link. Making 'engineering approximations' is kind of a
meme for mechanical engineers (like pi = 3, e = 3, gravity = pi\^3
m/s\^2, etc) making assumptions based on your best judgement as an
engineer is a needed skill. Many of you have already made these kinds of
assumptions in physics or other classes. Like neglecting air resistance
(good luck on that one aero majors) assuming negligible friction,
assuming rigid bodies, etc. For the carabiner, we are assuming the hook
at the top of the carabiner will be stronger than the pin at the bottom.
This is reasonable since the pin doesn't seem to be hardened (on any
garden variety carabiner I have), and the hook is larger in area than
the pin. With that said, let\'s make a basic sketch of the pin's cross
section.

Here, we will be dealing with shear stress (see Figure \_ above). Shear
stress is any stress that is acting parallel or tangential to a surface.
Let\'s look at the most simplistic representation of shear, a single
shear plane. The formula for average shear stress (denoted here as P) in
a plane is P = F / A. Plugging in the formula for the area of a circle
since we are using circular pins, P = F / (2\*pi\*r\^2). This formula is
for normal shear stress, but we are applying a force to a pin, the way
it transmits that force onto the contact surface is called bearing
stress. Bearing stress is the contact pressure between separate bodies,
in our case this is between the plate and the pin.

![]({{ site.url }}/imgs/TensileTester/image12.jpg)![]({{ site.url }}/imgs/TensileTester/image13.jpg)

Figure \_, Un-deformed bearing load. Figure \_ , Deformed Bearing Load.

While not exact, the force distribution from this bearing stress on the
inside of a hole, and the resulting displacement will look something
like this.![]({{ site.url }}/imgs/TensileTester/image14.jpeg)

Figure \_, Single Plane Shear

Before we go onto the carabiner pin, let\'s look at the simplest example
with a pin and a single shear plane. Where the force is spread out along
one cross sectional area of the bolt.

![]({{ site.url }}/imgs/TensileTester/image15.jpg)

Figure \_, Double Shear

In a double shear scenario, there are 3 total plates creating two shear
planes within the pin resisting the shear force. So (as labeled in the
drawing) the average shear stress on each plane is equal to ½ of the
total force. Going back to our formula, denoting average shear stress as
tau 𝜯 avg.

![]({{ site.url }}/imgs/TensileTester/image16.jpg)

Where

𝜯 = Shear Stress (lbs/in\^2 - N/mm\^2)

F = Force (lbs - N)

r = Radius (inches - mm)

For our carabiner, we want to find how much force for it to break, so we
need to move the formula around to solve for F. F = 4π*T*r\^2

With this formula, most carabiner pins seem to be about 1/16" in
diameter. And for 𝜯, since the steel alloy is not precisely known we
need to estimate based on general mild steels. Since shear strength of
mild steel is usually around 50% of the tensile strength, so about 200
MPa or 29,000 psi.

Plugging these values in F = 2\*pi\*29000psi\*(1/32in) \^2 = 177.9 lb

With this equation, we can make a more applicable observation about
using pins in carabiner design. Knowing the rough value for PLA's shear
strength, around 35Mpa or 5075psi, we can now relate the shear force to
the radius of the pin by solving for r.

![]({{ site.url }}/imgs/TensileTester/image17.jpg)

Using this formula, we can use the shear strength of a material, and a
set force to calculate the radius of the pin.

Another design is just using the PLA itself to act as the gate and pivot
without a separate part or pivots. This is usually done by making
cutouts in the lower part of the gate, using the elasticity of the
material to make a small spring section that is printed along with the
frame in the same print.

![]({{ site.url }}/imgs/TensileTester/image18.png)

This [design](https://www.flickr.com/photos/creative_tools/15188604861),
while lacking a locking mechanism, is the most simple of these designs
and simply uses the bottom of the carabiner to operate the "gate" in and
out.

![]({{ site.url }}/imgs/TensileTester/image19.png)

Looking at another [design](https://www.thingiverse.com/thing:950426),
the spring has matched shaped cutouts, going part way through the width
of the frame. The matchstick shape of the cutouts is notable, since the
fillets near the open side along with the round head dissipates stress
concentrations. Making the structure less susceptible to forming cracks
when used.

Introduction to FEA
===================

![]({{ site.url }}/imgs/TensileTester/image20.jpg)![]({{ site.url }}/imgs/TensileTester/image21.jpg)

Figure \_, Carabiner A, FEA Figure \_, Stress Concentrations

FEA Stands for Finite Element Analysis, which is an analytical method
for solving complicated aspects in many fields of study from structural
analysis (what we will be doing) to fluid flow, heat transfer, and
simulating pressure. The basic idea of FEA is to break up a model into
small, manageable sections (called a mesh) that can be more easily
solved by a computer. Which is great for us! Since trying to hand
calculate forces on structural parts can take forever and are quite
tedious.

FEA isn't a cake walk since to get a simulation that will pop out useful
information takes proper preparation and setup. While FEA software built
into programs like Fusion 360 is great since it is easy to use, the
problem is the concept of "garbage in, garbage out". The idea that if
you put in flawed data into a logical processor (the FEA program, in our
case) the output will also be flawed.

In fusion, go to the design tab in the upper right and select simulation
near the bottom. For solid works, click on Simulation in the add-on page
if it isn\'t loaded, then select New Study in the simulation tab. When
making a new study, Fusion gives up several options.

![]({{ site.url }}/imgs/TensileTester/image22.jpg)

Feel free to go through and read the description for each item, but the
main study's we will be considering are static stress, Nonlinear Static
stress, and event simulation. Even Simulation studies are meant to find
out how your model responds to different factors like motion, impacts,
and loads. Nonlinear Static Stress studies are meant to determine the
static stresses and deformation throughout a model caused by the
structural loads and boundary conditions while considering nonlinear
material properties and large deformations. And the most basic FEA
study, Static Stress, is meant to analyze the deformation and stress on
a model from structural loads and constraints while only calculating
results assuming linear response from the stress.

One of the main advantages of Nonlinear studies is it give a more
accurate representation of real-world scenarios. Since many materials
are nonlinear (like elasto plastics), nonlinear geometry like large
deformations, and nonlinear kinematic constraints.

While both the Event Simulation, and Nonlinear Static Stress could be
used in our application to find the resulting forces on the carabiner,
we will be using Static Stress because of its simplicity, ease of setup,
and ability to run on lower end systems.

Once we have our study with our applied material, we need to make the
solid representation of our "rope". Witch is a 0.75" steel bar. We need
two of these in our assembly,

Next, we will need to model our "rope" for our simulation. Looking at
our model, you might thing we can apply a force going up on the top
curve, and a fixed relation on the bottom curve. Like the figure below,
but this won't give us an accurate simulation. A good example of why the
most straightforward answer that seems obvious requires careful analysis
to verify if it is correct to what is happening in the real world.

The key is to have a critical look at what is going on between the rope
and the inner surface of the carabiner when it's pulled until failure.
The rope is not just applying a force to the surface, since the rope
pushing against the carabiner has a radius and stretches the material
while pressing against it. The rope also blocks the frame from
distorting into the area it takes up, keeping the top of the carabiner's
frame from becoming pointed past the radius of the rope.

My rope consisted of the 0.75" bar that was 1" long, with two square
tabs on the end. While this exact shape is not necessary beyond the
0.75" bar, it will help us apply constraints more effectively and make
our model match reality a little more.

When applying the rope's material, it should be rigid, but Fusion does
not have that capability. While we can create a custom material that is
"rigid" as I cover in the next section, I will be making mine the
in-build "steel" since it will be effectively rigid for this purpose.

After dragging in two models of our "rope", or carabiner puller as I
have named it, we need to join it into our model. This does not need to
be exact, since we will be adding the exact relationship between the
puller and the carabiner further on. I selected a rigid joint between
the center of the circular portion of the puller, and the center radii
of the lower carabiner. I then used the arrows to move the part down so
it is coincident with the inner surface.

![]({{ site.url }}/imgs/TensileTester/image23.jpg)

Figure \_, Lower Carabiner Puller's Joint

For the upper carabiner puller, we repeat the same joint selection as
the lower one, just turned 180 degrees upwards (just to make it look
good, not mission critical to the study).

Now we need to make the carabiner body, and gate PLA, but we run into a
problem. Both Fusion 360 and Solidworks are missing PLA in their default
materials library. But going beyond that, we want our study to
specifically apply to 3d printed parts. And as we went over earlier in
the Introduction to 3d Printing unit, each print will vary depending on
print settings and orientation. While in the future there will probably
be some way to slice a part and do FEA on the virtually print, for now
we will account for this discrepancy by looking at available research.
This
[study](https://aip.scitation.org/doi/abs/10.1063/1.5085981?class=pdf&journalCode=apc)
seems to have applicable data for making a good estimation of our part.
Specifically, to FDM 3D printed parts with 80% infill along the x/y
axis. For the rest of the mechanical properties, I used
[this](https://dspace.mit.edu/bitstream/handle/1721.1/112940/Anderson_Physical%20and%20mechanical%20properties.pdf?sequence=1&isAllowed=y)
paper from MIT. Don't forget to check your units when adding them in (1
MPa = 1 N/mm\^2 = 1 kg/m\*s\^2).

**Solidworks:**

Right click on "Material" in the feature tree and select "Edit Material"
at the top of the menu. You should see a list of materials on the left
side, scrolling down to the bottom you'll find the "Custom Materials\'\'
folder in blue. Open it and click the "Custom Plastic". You will now see
the properties tab, where you can fill in the mechanical properties and
add anything else you might want. Click save and apply to your part.

![]({{ site.url }}/imgs/TensileTester/image24.jpg)

**Fusion 360:**

In the "SOLID" tab, click on "MODIFY" and open "Manage Materials" near
the bottom of the drop down. In the Material Browser, click on the
circle icon with a + mark on the lower left corner of the window, then
click "Create New Material". A window will pop up, in that window go
into the 'Fusion 360 Material Library', click on plastic and find 'ABS
Plastic'. Close the window, and you will now see the 'Identity"
"Appearance' and "Physical' tabs on the left of the window. Fill in the
required values in the physical tab and press ok. You can also edit the
materials appearance and other properties here. The material should now
show up in your favorite tab, so we can apply it and move on with our
simulation.

![]({{ site.url }}/imgs/TensileTester/image25.jpg)

Now we need to move onto adding constraints to our study. Fusion gives
us several tabs for adding information into our simulation before we can
run it. Opening Load Case1, consisting of loads and Constraints. First,
we need to constrain our model, in the Display tab, click on the middle
icon. This is the DOF or Degree Of Freedom view for our study. You will
see that every part of the study are free.

For our study, the lower puller is fixed, simulating the base of the
tensile tester. Click on 'Constraints' in the tool bar. And click on the
two bottom faces of the carabiner puller.

Next, we need to constrain the upper puller. Since this part is sliding
upwards, we need to use the 'Frictionless' constraint in the constraints
tab. Select only the outer x and y faces of the puller and click ok.
These constraints mean that the puller can now only move up and down, in
a virtual "Channel" crated by the outer faces of the
puller.![]({{ site.url }}/imgs/TensileTester/image26.jpg)

Figure \_, Upper Puller Constraints

With our structural constraints in place, and before we apply our loads,
we need to create a contact. A contact set is basically a way to
identify a relation between two parts and how they reach to each other,
like a pin sliding inside a slot that causes the other part to move.
Right click on 'Contacts' and select 'Manual Contacts'. You can try
'Automatic Contacts' but I have never had that function work quite right
for me.

Our first contact set will be between the carabiner the upper carabiner
puller. For Selection Set 1, select the round surface of the puller. For
Selection Set 2, select the inner face of the carabiner. For the contact
type, since they are in contact our choices are bonded, or sliding.
Bonded means geometry that is basically welded or permanently fixed,
while sliding describes geometry that is touching but does not separate.
Even though it is not traditionally sliding like a block on a ramp.

Now we can apply a force to the upper puller. Go to loads, create a new
structural load, and select force as the type. The target is the two
faces on top of the puller, with the force's direction being upwards. At
this stage, the load is fairly arbitrary as we will be changing it and
running multiple simulations. But try and make your best estimate about
how much it should hold and you can see how close you are.

Your simulation is now fully set up! Now it's time for the fun part,
meshing and running the study. Right click on mesh and select Mesh
Settings, I usually have the slider around the middle for the first run.
Create the mesh, your part should now look something like this.

At this stage, I hide the upper and lower pullers along with the symbols
showing the constraints. Since they are no longer required for the
study, and block us from seeing the whole carabiner. We can now click
the Pre-check icon, on the left side of the solve section. You will
probably see an error right about now\... And it's right. Opening the
DOF window we will see that the carabiner is currently free. From what I
can tell from my experience, this can be safely ignored since it needs
to be free for our application. It won't stop you from running the
study, and if you want to make it go away you can apply a frictionless
joint to the two sides of the carabiner. But I cannot say for certain
what setup is fully correct. My results varied around 5% from one to the
other.

Now, Finally, we can run our study. This should take \>30 seconds
depending on your hardware, but if it's taking far too long you should
make your mesh larger or see if Fusion has some errors ready for you.

Once your simulation has finished, we need to conduct a reality check on
our findings. Fusion creates six plots for a Static Stress simulation.
Safety Factor, Stress, Displacement, Reaction Force, Strain, and contact
pressure. For our study, we are mainly concerned with Stress, Safety
Factor, and Displacement.

Under Load Case1 by the colored graph, select stress in the drop down.
You should now see a max and a min stress in MPa, if not click on the
inspect tab on the top toolbar and select "Show Min/Max". We also need
to toggle the mesh visibility so we can see it, click on the icon above
'Display' on the tool bar. You should now see the stress plotted on your
carabiner along with the mesh.

During this stage in our study, the main goal is to evaluate your study
and make sure there are no obvious discrepancies from your simulation,
and what would happen In the real world. Everything depends on your
specific carabiner's geometry, but I will lay down some basic
guidelines.

Look at your maximum and minimum stress. Do the values make sense? Are
the numbers in the correct order of magnitude? Significantly
lower/higher than you expected? You also need to look at the location of
the maximum and minimum stress, along with any other locations with
stress concentrations. Fusion 360 gives us an amazing tool for
visualizing this. If you click on the colored slider to the right, you
should see two arrows at the top and bottom. These arrows allow you to
only see parts of your model with the corresponding range of stress,
helping narrow down stress concentrations.

![]({{ site.url }}/imgs/TensileTester/image27.jpg)

In my model, we can see that the max stress is 22.95 MPa, or 3330 psi,
Seems reasonable for my load. We can also locate the main stress
concentrations, at the top and bottom where the puller is connected, and
at the sides of the upper loop. This is a good time to use the lower
slider starting at the max stress level and going down, giving you a
good idea of how the stress propagates through your carabiner. Now is
also a good time to un-hide the two pullers and check there's nothing
weird going on with them.

Lets change the results viewer to view the displacement, the default
views are actual displacement and adjusted displacement. Adjusted just
means that the program has made the displacement more dramatic to better
show how your model is deforming. Should be \>1mm ish and look like it
isnt deforming in a crazy way.

Finally, change the viewer to show the safety factor. This view
basically just takes the stress plot and divides the stress at each
point by the failure point. So, if the material fails at 30 MPa, at a
point with 30 MPa of stress the safety factor would be 1. From this
point, we can adjust our guess for the applied force. The goal is to
change the force so that the next resulting safety factor will be \~1.
For my study, the minimum safety factor was 1.478 with an applied force
of 100 N. So, I was 47.8% too low, meaning that for safety factor of \~1
I need to change my applied force to 147.8 N. Since you have (hopefully)
verified that there are no glaring errors in your study, this is a good
time to make your mesh finer for more accurate results while taking
longer to complete.

Go through the same steps outlined before about checking the simulation
for errors and allows for better force averaging. In your previous
studies, you might have noticed that your maximum stress was just along
one mesh connection. With a finer mesh, the increase in cells allows for
that force to average over multiple mesh nodes, leading to more accurate
results.

![]({{ site.url }}/imgs/TensileTester/image28.jpg)![]({{ site.url }}/imgs/TensileTester/image29.jpg)

Now, you should have all the data you need to analyze your design and
make changes if needed. In areas with stress concentrations, try adding
more material or changing the geometry of your part (adding/enlarging
fillets, shortening connections to make the model stiffer, etc). For
areas with very low stress, you might be able to safety remove material
to add weight in other sections.

