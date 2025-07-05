## CSS Flexbox

**CSS Flexbox**: a powerful layout module that enables flexible and responsive design of UI components.

## What is Flexbox?
**Flexbox** (Flexible Box Layout) is a one-dimensional layout method in CSS. It lays out items in a row or a column and handles alignment, spacing, and distribution even when the sizes of items are dynamic or unknown.

## Key Concepts

| Term             | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Flex Container** | The parent element where `display: flex` is applied.                         |
| **Flex Items**     | The direct children of the flex container.                                  |
| **Main Axis**      | The axis in which flex items are laid out. (default: horizontal/row)        |
| **Cross Axis**     | Perpendicular to the main axis. (default: vertical/column)                  |

## Basic Structure

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

```css
.container {
  display: flex; /* Turns container into a flexbox */
}
.item {
  padding: 20px;
  background: lightblue;
  margin: 5px;
}
```

## Flex Container Properties

### 1. `display: flex | inline-flex`
Turns the element into a flex container.

```css
.container {
  display: flex;
}
```

### 2. `flex-direction`
Defines main axis direction.

| Value        | Description                  |
|--------------|------------------------------|
| `row`        | Default, horizontal left to right |
| `row-reverse`| Horizontal right to left     |
| `column`     | Vertical top to bottom       |
| `column-reverse` | Vertical bottom to top     |

```css
.container {
  flex-direction: column;
}
```

### 3. `justify-content`
Aligns items along main axis (horizontal by default).

| Value           | Effect                                 |
|------------------|------------------------------------------|
| `flex-start`      | Align left/top (default)                |
| `flex-end`        | Align right/bottom                     |
| `center`          | Center items                           |
| `space-between`   | Equal space between items              |
| `space-around`    | Equal space around items               |
| `space-evenly`    | Equal space around & between items     |

```css
.container {
  justify-content: space-between;
}
```

### 4. `align-items`
Aligns items along cross axis (vertical by default).

| Value        | Description                          |
|--------------|--------------------------------------|
| `stretch`    | Default. Items stretch to fill cross axis. |
| `flex-start` | Align to top (or left for column)     |
| `flex-end`   | Align to bottom                       |
| `center`     | Center vertically                     |
| `baseline`   | Align text baselines                  |

```css
.container {
  align-items: center;
}
```

### 5. `flex-wrap`
Controls whether items should wrap if they exceed the container.

| Value     | Description                   |
|-----------|-------------------------------|
| `nowrap`  | Default, no wrapping          |
| `wrap`    | Items wrap to next line       |
| `wrap-reverse` | Wrap in reverse direction |

```css
.container {
  flex-wrap: wrap;
}
```

### 6. `align-content`
Aligns multiple lines of items on the cross axis (used when wrapping).

```css
.container {
  flex-wrap: wrap;
  align-content: space-between;
}
```

## Flex Item Properties

### 1. `order`
Controls the order of items regardless of HTML source order.

```css
.item:nth-child(2) {
  order: -1;
}
```

### 2. `flex-grow`
Defines how much an item grows relative to others.

```css
.item {
  flex-grow: 1; /* All grow equally */
}
.item.big {
  flex-grow: 3; /* This item grows 3x more */
}
```

### 3. `flex-shrink`
Defines how much an item shrinks when space is tight.

```css
.item {
  flex-shrink: 1;
}
```

### 4. `flex-basis`
Initial size of the item before free space is distributed.

```css
.item {
  flex-basis: 200px;
}
```

### 5. `flex`
Shorthand for: `flex-grow flex-shrink flex-basis`

```css
.item {
  flex: 1 1 200px;
}
```

### 6. `align-self`
Overrides `align-items` per item.

```css
.item:last-child {
  align-self: flex-end;
}
```

## Practical Examples

### Example 1: Navbar with Spaced Items

```html
<nav class="navbar">
  <div>Logo</div>
  <div>Menu</div>
  <div>Profile</div>
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### Example 2: Card Layout with Wrap

```html
<div class="card-container">
  <div class="card">1</div>
  <div class="card">2</div>
  <div class="card">3</div>
  <div class="card">4</div>
</div>
```

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.card {
  flex: 1 0 200px;
  background: lightgray;
  padding: 20px;
}
```

### Example 3: Center Content Horizontally and Vertically

```html
<div class="center-box">
  <div class="content">Center Me</div>
</div>
```

```css
.center-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  border: 2px dashed #333;
}
```

### Example 4: Sidebar Layout

```html
<div class="layout">
  <aside class="sidebar">Sidebar</aside>
  <main class="main">Main Content</main>
</div>
```

```css
.layout {
  display: flex;
}
.sidebar {
  flex: 0 0 200px;
  background: #f4f4f4;
}
.main {
  flex: 1;
  background: #fff;
}
```

## Visual Guide (Summary Table)

| Property         | Axis        | Applies To      | Description                        |
|------------------|-------------|------------------|------------------------------------|
| `flex-direction` | Main Axis   | Container        | Row or column layout               |
| `justify-content`| Main Axis   | Container        | Main axis alignment                |
| `align-items`    | Cross Axis  | Container        | Cross axis alignment               |
| `flex-wrap`      | N/A         | Container        | Allow wrapping of items            |
| `flex`           | N/A         | Items            | Grow, shrink, basis in one line    |
| `order`          | N/A         | Items            | Reorder items                      |
| `align-self`     | Cross Axis  | Item             | Override alignment per item        |

## Flexbox Best Practices

- Use `flex: 1` to make items share space equally.
- Combine `flex-wrap` with `gap` to build responsive grids.
- Use `align-items: stretch` to make cards or boxes equal height.
- Keep the main axis in mind: row = horizontal, column = vertical.

## Exercises for Practice

1. Create a responsive nav bar with logo on the left and links on the right.
2. Build a card layout where each card has equal width and wraps on smaller screens.
3. Center a login form vertically and horizontally using Flexbox.

## Tools and Playground

- Flexbox Froggy (Game): https://flexboxfroggy.com/
- CSS Tricks Flexbox Guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- Flexbox Defense (Game): http://www.flexboxdefense.com/