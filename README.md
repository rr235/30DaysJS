> Go to https://rr235.github.io/30js/ for all pages.

# 1. [Drum Kit](https://rr235.github.io/30js/drumKit/index.html)

* `<kbd>` - The HTML Keyboard Input element (`<kbd>`) represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a` <kbd>` element using its default monospace font, although this is not mandated by the HTML standard.
* `transitionend` event - The `transitionend` event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the transition-property is removed or display is set to "none", then the event will not be generated.

# 2. [Clock](https://rr235.github.io/30js/clock/index.html)

* `transform-origin` css - The transformation origin is the point around which a transformation is applied. For example, the transformation origin of the `rotate()` function is the center of rotation. (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.)
* `transition-timing-function` css - The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
* `cubic-bezier` css - The cubic-bezier() functional notation defines a cubic Bézier curve. As these curves are continuous, they are often used to smooth down the start and end of the animation and are therefore sometimes called easing functions.

A cubic Bézier curve is defined by four points P0, P1, P2, and P3. P0 and P3 are the start and the end of the curve and, in CSS these points are fixed as the coordinates are ratios (the abscissa the ratio of time, the ordinate the ratio of the output range). P0 is (0, 0) and represents the initial time and the initial state, P3 is (1, 1) and represents the final time and the final state.

Not all cubic Bézier curves are suitable as timing functions as not all are mathematical functions; i.e., curves that for a given abscissa have zero or one value. With P0 and P3 fixed as defined by CSS, a cubic Bézier curve is a function, and is therefore valid, if and only if the abscissas of P1 and P2 are both in the [0, 1] range.

Cubic Bézier curves with the P1 or P2 ordinate outside the [0, 1] range may generate bouncing effects.

![cubic bezier](clock/cubic-bezier.png)

# 3. [CSS Variables](https://rr235.github.io/30js/css-variables/index.html)

* `--<variable-name>` - CSS variables are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using custom property notation (e.g., `--main-color: black;`) and are accessed using the `var()` function (e.g., color: `var(--main-color);)`.
    * Custom properties do inherit. This means that if no value is set for a custom property on a given element, the value of its parent is used.
    * Fallback values - Example: `color: var(--my-var, red);`, `background-color: var(--my-var, var(--my-background, pink));`
* `NodeList` - NodeList objects are collections of nodes, usually returned by properties such as `Node.childNodes` and methods such as `document.querySelectorAll()`.
* `documentElement` - Document.documentElement returns the `Element` that is the root element of the `document` (for example, the `<html>` element for HTML documents).
* combine `change` and `mousemove` to work on changing input values.

# 4. [Array Manipulation](array-manipulation/index.js)

* [`Array.prototype.sort()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) - The `sort()` method sorts the elements of an array in place and returns the array. Javascript sort algorithm on `V8` is now stable. The default sort order is according to string Unicode code points.

    > Array.prototype.sort was among the last builtins implemented in self-hosted JavaScript in V8. Porting it offered us the opportunity to experiment with different algorithms and implementation strategies and finally make it stable in V8 v7.0 / Chrome 70. (https://v8.dev/blog/array-sort)

    The time and space complexity of the sort cannot be guaranteed as it is implementation dependent.

    > In computer science, an `in-place` algorithm is an algorithm which transforms input using no auxiliary data structure. However a small amount of extra storage space is allowed for auxiliary variables. The input is usually overwritten by the output as the algorithm executes. In-place algorithm updates input sequence only through replacement or swapping of elements. An algorithm which is not in-place is sometimes called `not-in-place` or `out-of-place`.

* [`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - `filter()` calls a provided `callback` function once for each element in an array, and constructs a new array of all the values for which `callback` returns a value that coerces to true. `callback` is invoked only for indexes of the array which have assigned values; it is not invoked for indexes which have been deleted or which have never been assigned values. Array elements which do not pass the `callback` test are simply skipped, and are not included in the new array.

* [`Array.prototype.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - `map()` calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values, including undefined. It is not called for missing elements of the array (that is, indexes that have never been set, which have been deleted or which have never been assigned a value).

    Since map builds a new array, using it when you aren't using the returned array is an anti-pattern; use `forEach` or `for-of` instead. Signs you shouldn't be using map: 
        A) You're not using the array it returns, and/or 
        B) You're not returning a value from the callback.

* [`Array.prototype.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) - `reduce()` executes the callback function once for each element present in the array, excluding holes in the array, receiving four arguments:
    * `accumulator`
    * `currentValue`
    * `currentIndex`
    * `array`
    The first time the callback is called, `accumulator` and `currentValue` can be one of two values. If `initialValue` is provided in the call to `reduce()`, then accumulator will be equal to `initialValue`, and `currentValue` will be equal to the first value in the array. If no `initialValue` is provided, then `accumulator` will be equal to the first value in the array, and `currentValue` will be equal to the second.

# 4. [flex-gallery](https://rr235.github.io/30js/flex-gallery/index.html)

* `display: flex` css -
* `flex`
* `justify-items`
* `align-content`
* `flex-direction: column;`
* e.propertyName flex and flex-grow
