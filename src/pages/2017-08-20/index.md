---
path: '/2017-08-20'
title: 'You Can Take the Teacher Out of the Classroom...'
author: 'Chris Rodgers'
date: 'August 20, 2017'
---

Well… you might not be my student, per se, but be forewarned: you may find yourself unintentionally learning things if you read further (in case you are my student: tutorial inc!)

Sometimes, learning web development feels like being subjected to a constant barrage of new terms, and you can only hope to filter them down to the most important ones. So far, I have created a filter which (I hope) allows the most useful technologies to seep through. Despite being relatively focused on three specific components of web development – HTML, CSS and Javascript – there has not yet been a shortage of frameworks, libraries and other tools to thoroughly confuse a novice in the field. It’s not like I wasn’t warned – web technologies are being created regularly and are evolving continuously. Nevertheless, it can be disheartening when you feel as if you are getting a handle on one technology, only to hear about a litany of other things that go along with it. Talk about digressions!

However, I have learned – as in many other areas – that once you have a decent understanding of what these tools entail, they magically become much less intimidating. For myself, I find that learning the general concept regarding what a new tool is supposed to do from the beginning is the best way to approach it. I think that sometimes, it can be enticing to jump into what the finished product looks like and to learn backwards from there. Some learning tools follow this approach, and it seemed more confusing than it needed to be. I’ll choose one anecdote to explain what I mean by looking at how I learned Bootstrap.

As I mentioned in my previous entry, when I first decided to revisit web development, I was somewhat confident in my knowledge of how websites worked – at least so far as HTML was concerned. I had no problem completing tasks like centering text, adding images, or linking from page to page. Then I learned of this new styling feature called Cascading Style Sheets (CSS) that had become immensely popular since then. I found the syntax of CSS to be rather simple, and it seemed like a logical extension of how to separate the styling elements from the scaffolding of a website. Pretty nifty!

Naturally, I decided to look around on various web resources for learning to code in order to tie all of this knowledge together. The difference here, it seemed to me, was that instead of teaching basic HTML and moving up from the bottom, the trend seemed to be the reverse – starting with the finished product and working backwards. It turned out something like:
“Here are all the great things you can create knowing just a few HTML/CSS keywords and a little help from our pre-installed frameworks and libraries!”
This meant that you could type a few tags and elements into a pre-packaged Integrated Development Environment (IDE) as instructed and out would come a polished product.

I remember building a website quite easily through these courses, which seemed pretty awesome – a mark of how the evolution of web technology had made the process that much more efficient. The downside to this, however, was that when I decided to put my skills to the test in order to create my own website from scratch, I was at a huge loss.
“Hey..why is my organization so off? I gave these elements a class of col-md-3 …”
As any resourceful person would these days, I quickly took to searching the internet for answers!

The response I got was perhaps more confusing than clarifying. “col-md-3 is a Bootstrap class.”
Hmm..I’ve heard of Bootstrap before.. do I need to download and install it?
“Well, you can just use CodePen and click a quick link to include it!”
But this merely cured the symptom rather than the illness, as it were. I still wanted to know exactly what clicking this link entailed.
Of course visiting the Bootstrap website might have brought the best clarification; but to a beginner, it can be intimidating looking through all of the different links for various forms of this framework (what’s that?) to download. Clicking ‘Get Started’ and following along sure seemed simple enough – just add this CDN link (what’s that?) to your HTML file. Not that I mind looking up these new terms as they arise and figuring out how to make it work, but through these efforts I was still learning what Bootstrap DOES – I did not have a better understanding of what Bootstrap actually IS.

When it came to web development, I could understand why these sites wanted to make it easy for the novice programmer to see what the finished product looked like rather than focusing on mundane coding exercises and algorithms. I could especially understand how to many beginners, it can be more fulfilling to see your efforts come to life almost immediately, as opposed to the task of learning a programming language and writing exercises comprised of 20 lines of code in order to get an output of things like:
Chris has worked 8 hours.
Gross pay for Chris is \$100.00
on a black screen (as I had in my first CS classes).

As great as it was to get the instant gratification from tools like CodePen and other sites that handled all of the ‘behind the scenes’ processes for you, I couldn’t help but feel that this was tantamount to going to mathematics class, learning addition and subtraction, and then being given a calculator to solve problems involving multiplication, division and square roots without first learning how these principles worked (ie., “To solve a problem with this symbol, enter this number and push this button”). Don’t get me wrong, I am a big fan of using tools for efficiency’s sake, and technological tools certainly have their place in enhancing the way we learn. Nevertheless, I wanted to know what the purpose of the symbol on the calculator was in the first place, and what the calculator was actually doing to solve the problem.

Sometimes (most times, I would argue), it ends up being more worthwhile in the long run to actually learn what is going on behind the scenes. It took me a while, but I finally learned what a ‘framework’ was all about, and had I been told that it was just a bunch of pre-written code that devs can access and use in order not to have to re-invent the wheel (or website), it all would have made so much more sense from the beginning.

So here’s my quick explanation, for anyone struggling with this same notion, of what I wish someone had explained to me (in other words, the part where this post turns into a tutorial):

Bootstrap is not another coding language, nor is it a content management system like WordPress (that can lead into a whole separate discussion). Bootstrap is a framework. In coding, a framework is a bunch of code, most often written in CSS and JS files, just like any website would be composed of. Who wrote the code? People who learned a particular language quite well – well enough to know what things are popularly used and often repeated. Out of the goodness of their hearts, they decided to create a file (or multiple files) with some of these common and/or useful blocks of code saved so that others can use them (such nice folks!)

Perhaps, then, another way to describe this would be to use the term template. The code present in the framework file contains templates for many things – in Bootstrap, this includes things like navigation bars, buttons and dropdown menus. Not that you can’t create these yourself; but how much quicker it is to have pre-written code with a design already in place to handle it! Especially when it comes to making your website responsive (yet another discussion for another time), they have already done the work of determining just what characteristics to give these components to make them fit accordingly, regardless of the screen size (see below for a more discrete example).

So, then, how does one actually ‘Get Started’ with Bootstrap?
Head on over to the website getbootstrap.com and download the files you wish to use. I would recommend clicking ‘Download’ on the front page rather than ‘Get Started’, if you are following my own trail of learning. Once there, download the compiled files:

Once downloaded, open the zip file and look for the css and js folders. There are several files in each; they comprise different components of the framework (I’ll be honest here, I still haven’t learned exactly what they all are). But the important files are those which have the entire framework written in them – these are bootstrap.css and bootstrap.js files.

Once you have these files downloaded, you can link to them using the link tag for CSS and script tag for JS in your text editor of choice.
This is just like linking to any CSS or JS file that you have created – except someone else did the due diligence of creating these easy-to-use classes and functions so that you don’t have to. And just like linking your own CSS or JS file, it must be located in the proper directory with your HTML in order to direct the links accordingly.

An alternative way of linking to these files is by using the CDN link. CDN stands for Content Delivery Network, and it is used to host those very same Bootstrap files on the internet, which means that no download is needed. You can locate the CDN URL on the Bootstrap site.

Note: One other thing to consider is that Bootstrap, like pretty much everything these days, gets updated. Take note of the version number when downloading or copying the CDN link to ensure that it matches what you use in your HTML file.

Now, if you want to ‘look under the hood,’ so to speak, you can open the file and see what code is actually being used. Once again, I – and I’m sure many Bootstrap users – don’t understand every bit of this code. But to return to my example of the class col-md-3 above, I was able to verify that indeed, it was simply a pre-defined class written in the Bootstrap file.

As intimidating as this may look, a quick use of ‘Find’ can help you locate what properties are given to each class, as shown above with the example of .col-md-3. Notice that this class has max-width set to 25%. This is because the Bootstrap grid system is based on dividing the width of a webpage into a total of 12 columns. A column of size 3 means that it takes up 3 out of those 12 columns, or 25% of the column widths. Looking further, you would notice that “col-md-4” is set to 33.3%, and col-md-6 is set to 50% – this makes more sense when we understand that 4 out of 12 columns means 1/3, or 33.3% of the width, and 6 out of 12 columns is equivalent to 1/2, or 50% of the width. Just a guess here, but col-md-12 should be set to 100%. I’ll let you look into that in order to test my hypothesis.

Another note: the sizing system also plays a role – the md in this example along with xs, sm, and lg all represent different ranges of pixels for different sized screens. Rather than go into further explanation on that (and in the interest of brevity), I will stay focused on the concept that all of this is predefined in the Bootstrap code. As another exercise, you could peruse the file yourself to see what definitions were written into these elements.

Now, to close the hood.
With the Bootstrap CSS and JS files linked to your own HTML file, all you have to do is use the names they gave to the elements as class identifiers. Not sure what they do or what they look like, exactly? That’s where the documentation comes in. You can browse the Bootstrap site and see examples, along with what code you need to write to make it work.

To get to any particular component, click the ‘Components’ heading on the left sidebar and click the desired component. As in the above example, click ‘Dropdowns’. Notice the example, followed by the code to use in your HTML file to generate the Dropdown menu on your page.

From there, you can certainly customize it to your liking – change the background color, change the font style, etc. – and yes, you change these exactly as you would in any other website you create – through your own HTML, CSS and JS files also linked to the main HTML file.

So, to summarize my example:
class=”col-md-3″ is just Bootstrap’s pre-defined class for columns using CSS syntax. Instead of me (or anyone else) having to figure out what pixel-width or height it would require to make a column take up one fourth of the screen, col-md-3 is defined to do just that. As long as you play by Bootstrap’s rules, you can create things way faster. But again, it helps to know what it is that you’re actually doing when you type in that class – and thus know that you need to have access to the Bootstrap file (either by downloading or linking to the CDN).

Furthermore, it helps to keep the concept of a framework in mind – they reappear – and multiply – regularly. Think you’re going to learn Javascript these days without picking up at least some jQuery, Angular, Express, React, or Node? And in the interest of seeming less intimidating, remember the other term – documentation. This is your go-to resource, and it’s one of the greatest things about being a developer (students, listen up: it’s like the historical record for programming technologies)!

My intent with this post was not to write a tutorial; nevertheless, it naturally evolved into one by the end. As in many scenarios, teaching a concept is the best way to fully understand it yourself. In this case, I feel that I have a better understanding not only of Bootstrap, but of how to research and learn web technologies in the way that works best for me.

Plus, I’m getting plenty of practice with WordPress and Gyazo as I go – but I digress!
