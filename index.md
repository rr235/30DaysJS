
# 1. [Drum Kit](drumKit/index.html)

* `<kbd>` - The HTML Keyboard Input element (`<kbd>`) represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a` <kbd>` element using its default monospace font, although this is not mandated by the HTML standard.

* `transitionend` event - The `transitionend` event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the transition-property is removed or display is set to "none", then the event will not be generated.

# 2. [Clock](clock/index.html)

* `transform-origin` css - The transformation origin is the point around which a transformation is applied. For example, the transformation origin of the `rotate()` function is the center of rotation. (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.)

* `transition-timing-function` css - The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.

* `cubic-bezier` css - The cubic-bezier() functional notation defines a cubic Bézier curve. As these curves are continuous, they are often used to smooth down the start and end of the animation and are therefore sometimes called easing functions.

  A cubic Bézier curve is defined by four points P0, P1, P2, and P3. P0 and P3 are the start and the end of the curve and, in CSS these points are fixed as the coordinates are ratios (the abscissa the ratio of time, the ordinate the ratio of the output range). P0 is (0, 0) and represents the initial time and the initial state, P3 is (1, 1) and represents the final time and the final state.

  Not all cubic Bézier curves are suitable as timing functions as not all are mathematical functions; i.e., curves that for a given abscissa have zero or one value. With P0 and P3 fixed as defined by CSS, a cubic Bézier curve is a function, and is therefore valid, if and only if the abscissas of P1 and P2 are both in the [0, 1] range.

Cubic Bézier curves with the P1 or P2 ordinate outside the [0, 1] range may generate bouncing effects.

![cubic bezier](clock/cubic-bezier.png)

# 3. [CSS Variables](css-variables/index.html)

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

# 4. [flex-gallery](flex-gallery/index.html)

* [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) - The display CSS property defines the display type of an element, which consists of the two basic qualities of how an element generates boxes — `the outer display type` defining how the box participates in `flow layout`, and the `inner display type` defining how the children of the box are laid out.
    ```css
    /* <display-outside> values */
    display: block;
    display: inline;
    display: run-in;

    /* <display-inside> values */
    display: flow;
    display: flow-root;
    display: table;
    display: flex;
    display: grid;
    display: ruby;

    /* <display-outside> plus <display-inside> values */
    display: block flow;
    display: inline table;
    display: flex run-in;

    /* <display-listitem> values */
    display: list-item;
    display: list-item block;
    display: list-item inline;
    display: list-item flow;
    display: list-item flow-root;
    display: list-item block flow;
    display: list-item block flow-root;
    display: flow list-item block;

    /* <display-internal> values */
    display: table-row-group;
    display: table-header-group;
    display: table-footer-group;
    display: table-row;
    display: table-cell;
    display: table-column-group;
    display: table-column;
    display: table-caption;
    display: ruby-base;
    display: ruby-text;
    display: ruby-base-container;
    display: ruby-text-container;

    /* <display-box> values */
    display: contents;
    display: none;

    /* <display-legacy> values */
    display: inline-block;
    display: inline-table;
    display: inline-flex;
    display: inline-grid;

    /* Global values */
    display: inherit;
    display: initial;
    display: unset;
    ```

* [`flex`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) - The flex CSS property specifies how a flex item will grow or shrink so as to fit the space available in its flex container. This is a shorthand property that sets `flex-grow`, `flex-shrink`, and `flex-basis`.
    ```css
    /* Basic values */
    flex: auto;
    flex: initial;
    flex: none;
    flex: 2;

    /* One value, unitless number: flex-grow */
    flex: 2;

    /* One value, width/height: flex-basis */
    flex: 10em;
    flex: 30px;

    /* Two values: flex-grow | flex-basis */
    flex: 1 30px;

    /* Two values: flex-grow | flex-shrink */
    flex: 2 2;

    /* Three values: flex-grow | flex-shrink | flex-basis */
    flex: 2 2 10%;

    /* Global values */
    flex: inherit;
    flex: initial;
    flex: unset;
    ```

* [`justify-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items) - The CSS `justify-items` property defines the default `justify-self` for all items of the box, giving them all a default way of justifying each box along the appropriate axis.

* [`align-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) - The CSS align-content property sets how the browser distributes space between and around content items along the `cross-axis` of a `flexbox` container. 

* [cross-axis](https://developer.mozilla.org/en-US/docs/Glossary/Cross_Axis) - The cross axis in flexbox runs perpendicular to the main axis, therefore if your flex-direction is either row or row-reverse then the cross axis runs down the columns. If your main axis is column or column-reverse then the cross axis runs along the rows. Alignment of items on the cross axis is achieved with the `align-items` property on the flex container or `align-self` property on individual items.

* [`flex-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) - The flex-direction CSS property specifies how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
    > Note that the values `row` and `row-reverse` are affected by the directionality of the flex container. iI the `dir` attribute is `rtl`, `row` represents the axis oriented from the right to the left, and `row-reverse` from the left to the right.

* e.propertyName flex and flex-grow - Safari transitionend `event.propertyName === flex`. Chrome + FF transitionend `event.propertyName === flex-grow`