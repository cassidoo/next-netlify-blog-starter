---
title: Hacking together a VCR for JavaScript
description: ''
date: '2014-10-07T19:16:23.000Z'
categories: []
keywords: []
slug: /@ramcio/hacking-together-a-vcr-for-javascript-3c23bd71e186
---

At [SimpleReach](http://simplereach.com "SimpleReach") we have a very large number of internal API endpoints and each one can bring back dozens of fields of data into our [Ember.js](http://emberjs.com "Ember JS") application. In order to make integration tests we started with static fixtures, but very soon the sheer number of fields and endpoints become overwhelming.

I really wanted something like [VCR for Rails](https://relishapp.com/vcr/vcr/docs "VCR"), but alas, there is nothing in the front-end world that does that yet.

Chrome provided a great hack to use though. In the network developer tools you can right click and select “save as HAR with content”. This will save a recording of all network requests that have happened since you opened the tool. Voila, instant tape of all the network requests that have happened on a site.

![](img/0__wDpDfC7tBtU43Yqd.png)

Once you have the HAR saved, you need a way to serve the information up programatically. [Sinon.js](http://sinonjs.org/) has a mock server that will respond with saved JS based on incoming requests. Setting it up looks something like this:

Now, as long as an object has been passed to “server.respondWith” the server will respond to that.

In order to make the HAR file play nice with Sinon, I forked an application called “[Mockbuilder](https://github.com/andremalan/mockbuilder "Mockbuilder")”. Mockbuilder allows you to add a HAR file to a folder and it will automatically convert it into something that plays nicely with Sinon. The fork allows you to specify a url for internal request overwrites and a location where the new mock file should go. That way you can have it send them immediately to the mock folder in your application.

Not only does this make writing JavaScript integration tests much easier, it is also a great way to make completely offline demos of your application. Simple click around, save the HAR file, and then with the new mocks in place, you can click around the same way and it will use the recordings instead of the actual requests. Perfect for sales teams who want to have a gurantee that things will work the way they expected.

Presentation below.