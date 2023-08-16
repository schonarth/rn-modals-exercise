# rn-modals-exercise, a React Native playground

An exercise handling different modals 
(one [standard React Native](https://reactnative.dev/docs/modal), 
another from [Whitespectre](https://github.com/whitespectre/rn-modal-presenter)), 
and manipulating less-than-trivial content within them.

## Purpose

I was having problems managing modals in my job's React Native app, particularly handling complex behaviors inside the modals. 
Things like views with field wrappers with internal states, event handlers, callbacks, etc.

So I put this together to see it working on a smaller scale, more controlled environment.

The same "form" is repeated once on the app body for reference, as well as in each modal for comparison.

The "form" consists of:
* a field wrapped in some deliberate extra complexity;
* some visual feedback (internal app state & on-the-fly updates from the field as it is typed into)
* a touchable line of text just to explicitly force the field to lose focus. In the real world, there are other elements that cause it.

No effort for good looks was made here, it isn't this repo's purpose.

## Install and run

1. Clone this repository into a local folder
2. `yarn` or `npm install`
3. `[yarn|npm run] [android|ios|web]`
4. Profit!

