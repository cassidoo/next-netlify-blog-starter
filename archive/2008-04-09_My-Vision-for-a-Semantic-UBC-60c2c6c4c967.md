---
title: My Vision for a Semantic UBC
description: ''
date: '2008-04-09T17:02:02.000Z'
categories: []
keywords: []
slug: /@ramcio/my-vision-for-a-semantic-ubc-60c2c6c4c967
---

This is my vision as for what we can do at UBC to create an expandable eduglu solution.

Most content will be stored in a wiki. Our wiki will be extended so that we can lock more sensetive pages for certain users.  
In order to make our content semantic and to allow it to be remixed in ways that make sense we would use the [SemanticMediaWiki](http://wiki.ontoprise.de/ontoprisewiki/index.php/Main_Page) plugin for our MediaWiki. A working example of this kind of wiki can be found [here](http://halowiki.ontoprise.de/halowiki/index.php/Main_Page).This plugin allows users to define relationships between the article and its content. This data is then Collected and can be navigated in a semantic way. Lists are then also generated and dynamically maintained. For instance in Chemistry someone could define the property “has boiling point” for a certain element. The page for “is metal” will then contain all the elements that have a boiling point (like [this](http://halowiki.ontoprise.de/halowiki/index.php/Property:Has_boiling_point) example).

Once we have the Semantic MediaWiki the next step is to republish content from the wiki into other contexts. We are still working on exactly how to do this (what tools to use etc) but the basic concept is simple: Use some kind of feed to publish the content in another context (we will probably use [WordPress](http://wordpress.org) as the new context for most of our services). Then periodically check the feed to see if it has been updated. If it has been updated, then update the republished content. This ensures that not only is content dynamic (like it should be) but it also means that it is searchable and that the server-breaking parsing of hundreds of feeds doesn’t happen all the time. Another step would be to build in a system whereby people who take feeds from the wiki are notified when the content changes (I know the watch page function does that already, but one time users that just wanted to quickly grab and republish some content would need to be informed of major changes to their content). This would create communities of watchdogs around more used content to ensure that vandalism is quickly curbed.

So that is the start. Content is dynamic and open on the wiki. It will be easy to grab content and republish it in other places. It will also have meta data that can used in the immediate term to navigate data and in the long term to drive applications like those created by the [MIT simile](http://simile.mit.edu/) project.