---
title: Making WordPress work for UBC
description: ''
date: '2008-02-24T14:11:23.000Z'
categories: []
keywords: []
slug: /@ramcio/making-wordpress-work-for-ubc-42aec705e2fa
---

![](img/0__nRJaJ__8TIQVP1wsy.jpg)

I’ve just come back from [Northern Voice 2008](http://2008.northernvoice.ca/), an absolutely phenomenal experience that I learned a ton of great things from (and will blog about it as soon as I have got the important stuff off of my chest…).

Probably the most important thing that I learned is that the work that [Vince](https://www.directory.ubc.ca/index.cfm?page=personDetail&row=1000015068) and I are doing for UBC Blogs matters to others outside of UBC. From reading posts on [Brian Lamb](http://weblogs.elearning.ubc.ca/brian/archives/044813.php) [Jim Groom](http://bavatuesdays.com/proud-spammer-of-open-university-courses/) and [D’Arcy Norman’s](http://www.darcynorman.net/2008/02/13/eduglu-and-the-aggregate-social-tag-cloud/) blogs I knew that a lot of people were struggling with the implementation of a free, easy to use “course management system” based on blogs, but for some reason it just didn’t click that I could (and should) be helping everyone out by describing what we are doing. It was only when [Jim Groom](http://bavatuesdays.com/) and [Lloyd Budd](http://foolswisdom.com/) both on seperate occasions excitedly asked the question “where are you blogging this stuff” that I realized that I have been neglecting my duty to the community by not outlining our solutions to the problems of implementing a university-wide blogging platform.

So here it is, my plan for using WordPress as a University wide blogging platform:

To start off, I’ve been mentally breaking the problem down into two parts. We are in a sense providing two completely different services. One part is that we are providing a platform and community for student bloggers. The other part is that we are providing a course management system for professors. Although both services are interlinked, they each have their own fundamental challenges.

*   Challenges in providing blogs for students:

1.  We want to provide students with a way to **easily** tell their story and with a way to find other students who are interested in their story. The second part is a little easier to do (seeing as [umwblogs](http://umwblogs.org) has already successfully done it), using plugins like [muTags](http://wpmudev.org/project/MuTags), [List All widget](http://wpmudev.org/project/List-All-%5Bwidgets%5D) and [BDP RSS](http://www.ozpolitics.info/blog/?p=87) we are hopefully going to be able to provide enough ways for students to connect with each other when blogging and help them to easily form that community that so many bloggers crave. for a sneak peek here is the [link](http://wp.test.olt.ubc.ca) to one of our many dev sites (warning., it is a dev site, so don’t expect it to look the same every time you stop by).
2.  the “easy” storytelling part is the true challenge. Despite what many professors might think, many students are scared of technology and the thought of having to learn an HTML tag or two sends many students running away screaming. Students are also scared of registering for too many services online, I know that we all have that fear… but many students find it crippling. Solving the “no HTML” problem was easy… we used WordPress. Solving the “signup” problem was a bit more difficult. We (and when I say “we” I mean Enej and John and Vince, with me shouting out ideas and debugging from the sidelines) created a plugin that integrates UBC’s Campus Wide Login (CWL) with the WordPress login. The process is a bit intricate so I will dedicate a full entry to it tomorrow.

![Start a blog](https://cdn-images-1.medium.com/max/800/0*Qep4Y94CLDm96ODQ.jpg)

*   Challenges in providing course blogs:

1.  .
2.  How to use WordPress to create a versatile, easy to use eduGlue blog? At Northern Voice, Vince, Jim, Brian and I met to try and figure it out. Here is what we came up with:
3.  The first step is to create a widget plugin that can be embedded in the sidebar of the course blog. That widget would have fields for students to paste their name, RSS feed and blog URL. The name and blog URL would be added to the course blogroll and the RSS feed would be added to the [BDP RSS aggregator](http://www.ozpolitics.info/blog/?p=87). BDP allows one to aggregate blog posts and display them in a fully customizable way (and touch wood… we haven’t been able to break it yet). A professor who wants a ghost blog (one that doesn’t keep the student’s entries when they leave) would simply output the BDP feed into the course blog and everything would work well. If the professor wants to keep a repository of all the posts written for the class by students, the BDP aggregated feed could just be fed into [wp-o-matic](http://devthought.com/wp-o-matic-the-wordpress-rss-agreggator/) the spamblogger that Jim has been [experimenting](http://bavatuesdays.com/proud-spammer-of-open-university-courses/) with. Professors want this kind of flexibility and this solution provides it quite elegantly, only requiring a few simple plugins.
4.  This solution allows students to post in whatever medium they feel comfortable with, it allows students to keep their content and it stops professors from having to do anything technical when setting up a blog, aside from applying the course theme that we create that lets professors choose whether or not they want to keep their student’s content.

Whew… so that is what we are doing… in a very general nutshell.I will be elaborating in weeks to come, but for now if there are any questions, comments, suggestions, pieces that I can elaborate on etc let me have them and I will be sure to act on it.