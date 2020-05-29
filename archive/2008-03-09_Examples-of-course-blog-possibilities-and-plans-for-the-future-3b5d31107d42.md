---
title: Examples of course blog possibilities and plans for the future
description: ''
date: '2008-03-09T05:32:02.000Z'
categories: []
keywords: []
slug: >-
  /@ramcio/examples-of-course-blog-possibilities-and-plans-for-the-future-3b5d31107d42
---

So here they are, examples of the three kinds of blogs that I outlined in [this post](http://weblogs.elearning.ubc.ca/andre/2008/02/three_flavors_of_course_blogs.html), as well as explanations for how to create them within [WordPress MU](http://mu.wordpress.org/). [Jon](http://posthegemony.blogspot.com/) has kindly let me use his Spanish 312 class as and example, so some of my examples are actually fully populated and active courses. (click on the headings to see the actual blogs)

#### [Ghost Course Blog](http://eduglu.test.olt.ubc.ca/ghostblog/)

This blog uses [BDPRSS](http://www.ozpolitics.info/blog/2005/03/28/aggregated-blog-feeds/) to output the content of an aggregated feed of the class. I [created a widget](http://weblogs.elearning.ubc.ca/andre/2008/03/add_to_bdp_rss_wordpress_plugi.html) to add to the list in BDPRSS so students can auto-populate themselves into the course. The other feature that I developed for this blog is an auto-populating class list (with the heading our class). The class list is the reason that I took so long to get these examples up and running. I spent a good chunk of this week working on an “add to blogroll” widget so that students could add links to their blogs in the sidebar. I tried many methods, but just couldn’t get the plugin to work. [Gardner Campbell](http://www.gardnercampbell.net/blog1/) was paying a visit to UBC and while he was showing me some of the successes and issues that he has been having with his course blog [Rock soul Progressive](http://rocksoulprog.umwblogs.org/) I saw that he was using the BDP RSS widget to display comments. A light bulb went on and I realized that I could simply tweak the widget to show a list of blogs in the course. Here is what you have to do:

1.  Create and output format in BDP RSS that contains the same blogs as the one that is being used to display entries in the course.
2.  In the “output format types” section select the radio button that says “list by sites alphabetically”
3.  In “about the items” set “maximum items per site” to 1, check “print site names” and “only display item’s title”. Uncheck “print the item’s age”

![](img/0__bAXcmAd7CWwbZ9Yl.jpg)

If you add the BDP RSS widget for the output to the sidebar then you create a class list.

#### [Spam Course Blog](http://eduglu.test.olt.ubc.ca/spamblog/)

This blog uses a spamblogger (I’m using [feedWordPress](http://projects.radgeek.com/feedwordpress/) because it actually updates posts if they are changed in the original feed) combined with BDP RSS to quickly create the course. Basically what happens is a feed aggregated by BDP RSS is fed into the spamblogger and feedWordPress republishes it. I have three reasons why I run the feeds through BDP RSS before I feed them to the feedWordPress:

1.  I’ve already created my Add to BDPRSS widget to add feeds to BDPRSS. If I wanted students to add their own feeds to the spamblogger I would have to create another widget (and the widget would have to be specific to the spamblogger).
2.  BDP works really well with a large range of feeds as well as with a large number of feeds. It acts as a kind of normalizing process, ensuring that each entry is parsed in the same way.
3.  It allows for the auto-generation of a class list as described for the ghost course blog.

#### [Communal Course Blog](http://eduglu.test.olt.ubc.ca/communalblog/)

This Blog is the simplest to set up and is probably closer to what most faculty members will imagine when they think of a course blog. I simply use the [sidebar add user widget](http://wpmudev.org/project/Sidebar-Add-Users) to add authors and the [Wp-Authors](http://www.tsaiberspace.net/blog/2007/07/28/wp-authors/) widget to display the class list. Quick and simple. My example isn’t as good as the others simply because all of the content had to be written from scratch (or copy pasted from [Wikipedia](http://www.wikipedia.com)). K1, one of the work study students at [OLT](http://olt.ubc.ca) was kind enough to post a few items under different authors to show how this kind of course blog would look.

A fourth option is of course mashing the Spam Course Blog and the Communal Course blog together, thus giving students the option over whether or not they want to have their own course.

If there is anything that I am missing in my thinking here, please let me know.

Some notes on policy and where I’m going from here: As I have been making these ways for students to self-populate a course, the question keeps on coming up “what if people who don’t belong to the course add themselves”? At the moment the sidebar add to BDP widget gives three levels of permission, global (anyone), system (on the same MU system) and blog (subscribers to the blog). I will be working on changing the “add user” plugin to accept a list of people (I’m thinking student numbers or emails?) and check those against people who are trying to add themselves to a blog. This would mean that a professor could just paste a list in the control of the widget and not have to worry about people who are not in the class adding themselves. Then to close off the spam and ghost course blogs one would set the [sidebar add to bdp widget](http://weblogs.elearning.ubc.ca/andre/2008/03/add_to_bdp_rss_wordpress_plugi.html) permissions to “blog” and display the add user widget forcing students to add themselves as subscribers to the blog first so that they can be checked off against the class list before adding their feed.