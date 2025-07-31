## CSS Grid

## Objective

By the end of this lesson, you'll be able to:
- Understand **CSS Grid Layout** concepts
- Build **2D layouts** using Grid (rows and columns)
- Use **Grid areas**, **spanning**, **alignment**, and **auto-placement**
- Create **responsive designs** without media queries

## What is CSS Grid?

CSS Grid is a **two-dimensional layout system** for the web. Unlike Flexbox (which is one-dimensional), Grid allows you to control both **rows and columns**.

## Basic Terminology

| Term             | Description |
|------------------|-------------|
| Grid Container   | An element with `display: grid` or `inline-grid` |
| Grid Items       | The **direct children** of the grid container |
| Grid Lines       | The dividing lines between rows and columns |
| Grid Tracks      | The **rows and columns** themselves |
| Grid Cells       | The **intersection** of a row and a column |
| Grid Area        | A rectangular space surrounded by four grid lines |

## Basic Syntax

```html
<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px;
  gap: 10px;
}
```

## Core Grid Properties

### display: grid | inline-grid

```css
.container {
  display: grid;
}
```

### grid-template-columns & grid-template-rows

```css
.container {
  grid-template-columns: 200px 1fr 2fr;
  grid-template-rows: 100px auto;
}
```

### gap

```css
.container {
  gap: 20px;
}
```

## Repeat Notation

```css
.container {
  grid-template-columns: repeat(3, 1fr);
}
```

## Positioning Grid Items

```css
.item {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
}
```

### grid-column-start & grid-column-end

```css
.item {
  grid-column-start: 1;
  grid-column-end: 3;
}
```

### Spanning

```css
.item {
  grid-column: span 2;
  grid-row: span 2;
}
```

## Grid Template Areas

### HTML

```html
<div class="layout">
  <header>Header</header>
  <nav>Nav</nav>
  <main>Main</main>
  <aside>Sidebar</aside>
  <footer>Footer</footer>
</div>
```

### CSS

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header"
    "nav main"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  gap: 10px;
}

header { grid-area: header; }
nav    { grid-area: nav; }
main   { grid-area: main; }
footer { grid-area: footer; }
```

## Auto-placement

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

## Alignment in Grid

```css
.container {
  justify-items: center;
  align-items: center;
}
```

## Grid Auto-Flow

```css
.container {
  grid-auto-flow: row;
}
```

## Practical Examples

### Example 1: 3-column Layout

```html
<div class="container">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.box {
  background: lightblue;
  padding: 20px;
}
```

### Example 2: Responsive Card Grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
```

### Example 3: Full Page Layout

```css
.page {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: 60px 1fr 40px;
  height: 100vh;
}
```

## Grid vs Flexbox

| Feature          | Grid                    | Flexbox                |
|------------------|--------------------------|-------------------------|
| Layout           | 2D (rows + columns)     | 1D (row or column)     |
| Use Case         | Page Layouts            | Component Alignment    |
| Placement        | Precise (lines/areas)   | Order-based            |
| Overlap Allowed? | Yes (`grid-area`)       | No                     |

## Best Practices

- Use `grid-template-areas` for semantic layouts.
- Use `minmax()` with `auto-fit` or `auto-fill` for responsiveness.
- Combine with media queries for complex layouts.
- Avoid setting fixed heights/widths unless necessary.

## Exercises

1. Build a 2-column layout with a fixed sidebar and fluid content area.
2. Create a dashboard layout with header, sidebar, main, and footer using grid areas.
3. Build a card grid that adapts to screen size using `auto-fit` and `minmax`.

## Tools & Resources

- https://css-tricks.com/snippets/css/complete-guide-grid/
- https://gridbyexample.com/
- https://cssgridgarden.com/