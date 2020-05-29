---
title: Coding Reflections — Part 2
description: ''
date: '2012-02-20T11:32:47.000Z'
categories: []
keywords: []
slug: /@ramcio/coding-reflections-part-2-c5198ad7ed85
---

Continuing with my attempt to increase the speed at which [I master the craft of programming](http://andremalan.net/blog/2012/02/11/coding-reflections-part-1/ "Coding Reflections – Part 1"), here is my second week of reflection.

One part of the reflection process that I noted was that reminding yourself of the previous reflections is crucial. Toward the end of the week I found that rereading me reflections from earlier really helped me to not repeat those previous mistakes.

Week 2:

_Always make the minimal amount of changes to go from working to not working_. Yes, I know i started with this one last week, but it bears repeating. This week I did a lot of building new things and again found myself being slowed down by making too many changes and then having to figure out which one of those changes didn’t work as they were supposed to. Starting with the simplest thing takes discipline. I’m not sure why that is, but our brains seem to want to see big effects and use those to trip us up. In order to practice the simplest thing we need to be continually vigilant.

_Pay careful attention to any error trac_e. Often the answer is buried deeply and even though after making changes it may look like the trace is the same as before, there could be changes in where the error came from a few lines down from the top of the trace.

_Write bad code._ One problem that I’ve been having (probably magnified by the fact that I’m working in Ruby on Rails) is that everything I read really concentrates on writing and architecting really good code. The problem with that is that it is really hard to know what the best code is as you go along. As you code you get paralyzed by the different design choices. You then spend hours trying to make what you think may be good design work, only to throw it away because the direction of the code means that another design pattern actually makes more sense. Instead, if you write crappy code that just gets the feature complete as quickly as possible, you end up with a complete feature and time left over to refactor (of course this only works if you’ve written tests to ensure that everything stays working after the refactoring is finished). I think it’s a lot easier to see where to fix bad code than it is to ponder over what the best code is to write. Of course, a big part of this strategy is the commitment to go back and actually do the refactoring. Code review helps a lot as sheer embarrassment can be a great motivator for going back and making sure your code looks good!

![Danbo conoce a Domo - Danbo meets Domo](https://cdn-images-1.medium.com/max/800/0*drqnBsUBhNtys8sa.jpg)

_Follow the_ [_Law of Demeter_](http://c2.com/cgi/wiki?LawOfDemeter "Law of demeter"). There are many complex aspects to this law, but the heuristic that I’ve been using is thinking about it as “don’t take your toys apart”. If your context has a class, then you can call any of it’s methods or attributes, but you cannot “break the toy apart” and call methods of that toy’s attributes. [This article](http://www.ccs.neu.edu/research/demeter/demeter-method/LawOfDemeter/paper-boy/demeter.pdf "Example of the law of demeter") does a good job of explaining why breaking the Law would seem silly in a real world context. When you buy something, when the cashier asks you to pay, they don’t “break you apart” by grabbing your wallet (your attribute) and taking the money straight out. Instead, they ask you for the money and you give it to them. They don’t even have to know about your wallet, maybe you don’t have one and just shove your money into your pockets, that would make a waiter trained to take money from wallets very confused and would be a very awkward end to the evening. Throughout the week I found that code following the law was super easy to debug and refactor, code that didn’t wasn’t, with fun little errors popping up like “you called x on nil”.