---
title: Coding Reflections — Week 3
description: ''
date: '2012-02-27T11:00:07.000Z'
categories: []
keywords: []
slug: /@ramcio/coding-reflections-week-3-a0cb16b49480
---

Week 3 of attempting to speed up my learning process through reflection.

**On the reflection process:**

After 15 days of practice, this is really starting to feel like a habit. I’m starting to see the [circles get smaller](http://theartoflearningproject.org/educate/resources/make-smaller-circles/ "Making circles smaller") ([the Art of Learning](http://www.amazon.com/Art-Learning-Journey-Optimal-Performance/dp/0743277465/ref=sr_1_1?ie=UTF8&qid=1330312466&sr=8-1 "the Art of Learning") is a great book) in my work and when previously I could only think about things in their macro forms, I am discovering even more subtleties.

One way that I am starting to make the circles smaller in the reflection process is by forming the habit of reflecting immediately when something happens. I think it has to do with what [this article](http://www.wired.com/wiredscience/2011/10/why-do-some-people-learn-faster-2 "Why do some people learn faster") suggests, that the habit of reflecting on mistakes _as they happen_ can greatly increase the speed at which one learns. So instead of spending a long time at the end of the day thinking back on what I did, I am instead reflecting at the point of the mistake (which for me usually means taking too long to find a bug) and trying to find ways to avoid it in the future.

**Programming:**

_Sometimes doing the smallest thing doesn’t mean starting small_. Instead of building up to something big piece by piece, it can often be more effective to take a large block of code that currently works (from somewhere else in the code base or the internet) and whittling that down to only the essentials. There is skill required in making sure you got rid of all the non-essentials, but if you’re diligent, it can be really successful.

_concentrate on difference_s. When faced with a complex system that works and a simpler one that doesn’t, you can either increase the complexity of the broken system until it works, or decrease the complexity of the working one in order to see what parts are truly necessary for what you need done. An example is that this week I had a component that when given a hash with 10 entries would work, but that wouldn’t work when I fed it my own hash with 3 entries. I then methodically added things to my hash until it was exactly the same as the complex one and the function still didn’t accept it. Finally I went the other way and stripped the 10 item hash down to 3.. and the function still accepted that hash. Now with much less complexity I could look deeper and see that the difference wasn’t in the entries, but in the hash type (the one that worked was a “HashWithIndifferentAccess” instead of a normal Hash)

_Look for more than one example_. When you are working with a large code base and have to do something that is done somewhere else in the application, look hard for other places where things are used. Remember to check more than one place instead of assuming that the code is DRY and it’s all done the same way throughout the application. If you do find that there is more than one way to do something, be sure to use the best way possible and then go back and update the bad example.

_Write things down_. The tactic of writing out all the possible causes has been proving really effective. Like super effective! I’m constantly amazed at how well it helps me spot the areas where I should be focusing on. Tracing out the actual flow of a piece of code across functions and source files is way better out in the open than in your head, your mind makes false leaps and assumptions that the cold hard light of a whiteboard marker uncovers easily.

_Code in flow state more often_. I’ve spent a lot of time [building my trigge](http://theartoflearningproject.org/educate/resources/build-your-trigger/ "Build your trigger")r… now I just need use it more often.