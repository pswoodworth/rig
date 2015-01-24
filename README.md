RIG.js 
======

A simple library for responsive columned layouts.

setup
-----

setup is very simple. import `rig.css` and `rig.js` and you're off and running.
rig's only dependency is jQuery, or Zepto if that's what you're into.

Setting up rig in your markup requires the use of a parent `.rig` div and `.rig-sidebar` and `.rig-body` column sections. The classes `.rig-forward` and `.rig-back` will trigger events to move between panels when on a mobile sceen.

A basic setup might look like this:

```html
<div class="rig">
	<div class="rig-sidebar">
		<a class="rig-forward"> a sidebar option </a>
		<a class="rig-forward"> another sidebar option </a>
	</div>
	<div class="rig-body">
		<a class="rig-back"> a back button </a>
		...body content...
	</div>
</div>
```

you can see a sample implemenation along these lines in `example.html` included in this repo. Feel free to use that as a base for a new project.


customization
-------------

rig can be customized with some simple changes to the source. In particular, changing the sidebar size can easily be accomplished by editing the variables in the first few lines of `rig.scss` and `rig.js`.

Current options:
- set a custom breakpoint (this must be set in both `rig.scss` and `rig.js` to work properly)
- set a custom sidebar width (in `rig.scss`)


heads up
--------

rig does not provide any handling for managing content - that's left for you to do yourself with whichever front-end data management library or technique you prefer.
