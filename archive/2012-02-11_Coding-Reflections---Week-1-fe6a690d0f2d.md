---
title: Coding Reflections — Week 1
description: ''
date: '2012-02-11T21:24:37.000Z'
categories: []
keywords: []
slug: /@ramcio/coding-reflections-week-1-fe6a690d0f2d
---

Working full time as a developer again, I’m trying to apply my years of thinking about learning to my programming. Learning in school is one thing, it’s supposed to be the point of school after all. Learning at school became even easier for me once I reached the all important “learning matters far more than grades” conclusion. Learning while working full time is very different though. You have to explicitly decide to learn, to take extra steps to learn, otherwise learning stagnates and you find yourself stuck at the same skill level for years. I’m determined to not let that happen, so will be making every effort to keep up the pace of my learning.

Of course, there are many ways to practice “continuous learning”, but the one that I’m going to be attempting is just reflection. Sure, learning “the hard way” and other techniques may be more effective in the short run, but using them while at the same time producing as much good work as possible is hard. Using reflection as a tool for learning has the benefit of not taking time away from other important tasks and is arguably a more sustainable learning habit to create.

**So the learning plan is as follows:**

Every day after work, I reflect on what happened. Where did I make mistakes, where was I brilliant? what did I learn?

At the end of every week I can review the learning and summarize it. I will try and post these summaries here every week. Some of it will be new learning, some of it will be things I’ve forgotten some will be things I didn’t do because of lack of sleep and some will be pure guesses as to what will help make things better. I will break things into sections, general programming and language specific learning.

**Week 1**

#### General Programming:

Much of this week was spent refactoring old code, in order to make a new set of features easier to implement. The process took me much longer than it should have. Here are some ways that I think can make the process of refactoring less painful.

_Always make the minimal amount of changes to go from working to not working_. My method was to first change the main attributes to be named correctly, then to watch for where things broke when they called for those attributes. Terrible idea.

_The last thing that one should do is rename badly named variables and attributes_. The first thing to do should be to [DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself "DRY") up the code as much as possible, only after everything is working and the code is as elegant as possible, should you worry about renaming old bad names. a “rename\_column” migration is a hell of a lot cheaper than hunting through bad code for all references to a badly named variable/attribute.

On the subject of renaming attributes _never use “find and replace all”._ Check each instance of something that gets replaced. If there are too many of them, then it means that you haven’t done the DRY work that you should have first. If you do use “find and replace all” then every bug that you encounter for the next hour should have you thinking… “could this have been because of that find and replace all that I shouldn’t have done?”

**Basic debugging:**

_Resist the temptation to just mindlessly trace variables when there is a problem_. After the first or second tweak to try and make things work, stop and take a breath. Start enumerating the things that could be wrong. Don’t trust your brain to hold all of these elements, write the various causes for the error down (yesterday I stuck a large strip of [dry-erase roll](http://www.amazon.com/gp/product/B0027HJ52I/ref=s9_simh_gw_p229_d0_g229_i2?pf_rd_m=ATVPDKIKX0DER&pf_rd_s=center-2&pf_rd_r=1VG4DHZZCYNRDKCPT1J2&pf_rd_t=101&pf_rd_p=470938631&pf_rd_i=507846 "Dry Erase Roll") on my des to help with this). Doing it without looking at the code too much helps as well, it gets you thinking more abstractly and actually allows you to put those years of listening to Computer Science lectures to use. Think of all the different ways that you can actually test to see which one of these causes it is. Once you have a list, rank them by probability and work from there. As [Steve Wolfman](https://www.cs.ubc.ca/people/steve-wolfman "Steve Wolfman") told me on my very first CS lecture at UBC, “Computer Science is the science of clear thought”. Writing things down is the easiest way to make your thoughts clear.

#### Ruby on Rails:

_use validates\_presence\_of to ensure that variables that you need are there_. Make sure you actually need those variables.

The before\_validation callback can be really useful to consolidate and double-check that everything your model needs is there.

_Spend every effort as a team to make the specs fast_. Every extra second that a test takes, gets multiplied by the number of developers running tests by the number of times it’s run over it’s lifetime. Those extra seconds can easily add up to hours on a big complex project. Slow specs lead to less testing which leads to broken code.

[_Single table inheritance_](http://therailworld.com/posts/18-Single-Table-Inheritance-with-Rails "Single Table Inheritance") _in Rails is easy_. It can be done simply by making a class a subclass or another ActiveRecord::Base class. The caveat is that that superclass’s table needs to have the “type” attribute, in which Rails will automatically store the type of the subclasses.

When converting a non-ActiveRecord model to an ActiveRecord model pay careful attention to methods that may be overriding ActiveRecord methods. Deal with those first.

[_Rails AntiPatterns_](http://www.amazon.com/Rails-AntiPatterns-Addison-Wesley-Professional-ebook/dp/B004C04QE0/ref=tmm_kin_title_0?ie=UTF8&m=AG56TWVU5XWC2&qid=1328990897&sr=8-1 "Rails Antipatterns") _is a really good book_. I’ve been trying to force myself to read and watch as much as possible on programming in Rails and this book has been by far the most engaging!