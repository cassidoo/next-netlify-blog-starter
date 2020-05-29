---
title: 'WordPress Pro Tip: Getting a per-post Feed in WordPress'
description: ''
date: '2010-05-19T23:54:18.000Z'
categories: []
keywords: []
slug: /@ramcio/wordpress-pro-tip-getting-a-per-post-feed-in-wordpress-1fb9bb82cd94
---

For some reason this information is really hard to find through Google. Often in my work at OLT we are trying to reuse remix and redistribute a bunch static content from WordPress sites around our campus. In order to do so we need to find feeds for those sites that are just for one post or page, instead of the updating stream. Here is how to get them:

Simply append /?feed=rss&p=111 to the end of your URL. The 111 in the example should be the ID of the post that you want the feed for.