---
title: Coding Reflection — Reading and Testing
description: ''
date: '2012-05-14T13:12:58.000Z'
categories: []
keywords: []
slug: /@ramcio/coding-reflection-reading-and-testing-92f7e68faa88
---

**Reading**

![Technology books](https://cdn-images-1.medium.com/max/800/0*ohH7S-9y4O1KWIjZ.)

Reading books about the technologies that you are using is really important. It gives you something that just looking at existing code doesn’t. Over time a code base tends to train developers into doing things “it’s way” and it takes an external influence to help pull the team into better ways of doing things. My Kindle has been an amazing resource, as I can have all of my technical books with me whenever I am on the train or find myself waiting in line. Then, when I’m working at my computer, I can use the Kindle app to pull up relevant sections that I remember. Searching for something that you know exists in a good technical book can be 50 times faster than looking for it on Google.

One important optimization to this is to spend time reading books about the things that you are doing. And not just “oh, I’m writing rails code, so I should read a Ruby on Rails book”. That’s a great place to start, but if you have a specific thing you will be working on the next day, read that book. So if I was going to spend my next day writing and fixing tests, I read an RSpec book. If the stuff that I’m working on is mainly plain Ruby code, I read a Ruby book. Playing with Routes tomorrow? read the Routes section of a Rails book.

**Testing**

Unit testing is unit testing, not integration testing. Don’t confuse them. Tightly coupled unit tests where you create factories for 6 objects and rely on pulling in RSS or JSON from an external service make life hell for everyone. Yes, it’s more work and it seems silly to mock everything out when you’re doing it, but being militant is the only way to keep things clean. It also makes the specs a lot faster, something that makes up for the extra time you spend building a mock object instead of just using FactoryGirl.

The other benefit is that if your proper unit tests are hard to write then that’s a pretty clear code smell. Rewriting the code to make the testing easier can lead to much cleaner, less coupled code. When you have to pay attention to everything that your code interacts with (by mocking out each interaction), you become a lot more sensitive to how much it relies on that other stuff that it really shouldn’t be relying on.