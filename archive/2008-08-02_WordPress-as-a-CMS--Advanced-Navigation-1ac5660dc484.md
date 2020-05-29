---
title: WordPress as a CMS… Advanced Navigation
description: ''
date: '2008-08-02T23:16:30.000Z'
categories: []
keywords: []
slug: /@ramcio/wordpress-as-a-cms-advanced-navigation-1ac5660dc484
---

![Wordpress](https://cdn-images-1.medium.com/max/800/0*Mp7dH9g6bsBUU6V3.jpg)

[photo](http://www.photodropper.com/photos/) credit: [drustar](http://www.flickr.com/photos/68513587@N00/2701236301/ "drustar")

One of the things that is starting to happen at [OLT](http://olt.ubc.ca "OLT") is that we are creating an increasing number of [WordPress](http://wordpress.org/ "WordPress") based websites. Using WordPress as a content management system is not a new idea at all, there are a ton of examples out there of WordPress blogs out there that have been turned into sites. There is however, a dearth of information out there on how to do it (there are some out there… including [some](http://cogdogblog.com/2008/02/14/wordpressing-dissected/ "Alan's info on wordpress as cms") in amazing detail from [Alan Levine](http://cogdogblog.com/ "cogdogblog")).

One of the things that I couldn’t find was a stable way to create a second level navigation that stays constant for every top level section. The problem with most of the solutions on the forums and sites around is that as soon as you drill down to the third level of navigation the second level disappears. As you can see at [aboriginal.ubc.ca](http://aboriginal.ubc.ca "The site where I implemented the navigation") I was able to come up with a way to keep the navigation constant. Here is the loop that I had to create:  
  
<?php  
$secondAncestor = count($post->ancestors) -1; //figure out what level of navigation we are on, subtract one because we don’t want to consider the top-level  
if($post->post\_parent!=0) //if the page is not a top-level category  
{  
echo ‘<h2 class=”widgettitle”>In this section:</h2><li class=”sidebarlist”>’;  
//the following lists children of second level ancestor of the current page.  
wp\_list\_pages(“title\_li=&child\_of=”.$post->ancestors\[$secondAncestor\].”& sort\_column=menu\_order&echo=1");  
echo ‘</li>’;  
}  
else //if the page is a top-level category  
{  
//listing only the child pages of the current section  
$children= wp\_list\_pages(“title\_li=&child\_of=”.$post->ID.”& sort\_column=menu\_order&echo=0");  
if($children) //this will stop it from displaying a section heading if there are no elements in the section (for example on the home page)  
{  
echo ‘<h2 class=”widgettitle”>In this section:</h2><li>’;  
echo $children;

echo ‘</li>’;

}  
}  
?>  
  
This is the first time I’ve blogged code, I’m not even sure if it is readable… but here’s hoping. Basically I figure out what level of navigation the user is on and then list the pages of the current page’s ancestor… that many levels up (subtracting one for the top level navigation.

I am currently doing a lot of work on using WordPress as a content management system including coming up with plugins and modifications for using [WordPress MU](http://mu.wordpress.org/ "WordPress Multi-user") as a multi-site manager used purely for websites and not for blogs. Will blog it all once everything is stable and working.

![Zemanta Pixie](https://cdn-images-1.medium.com/max/800/0*DS3UpQ_PpY3p8GzP.)