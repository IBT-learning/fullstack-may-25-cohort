## CSS Grid Layout

##  What is CSS Grid Layout?

CSS Grid Layout is a two-dimensional layout system for the web. Unlike Flexbox (which is one-dimensional), Grid allows you to design web pages in rows and columns simultaneously.

Think of it as a powerful tool to build layouts similar to tables, but with more flexibility and without the limitations of table markup.

---

##  Why Use CSS Grid?

- Ideal for **complex layouts**
- Offers **row and column control**
- Makes **alignment and spacing** easier
- **Responsive by nature**
- Works well with **media queries** for adaptability

---

##  CSS Grid Basics

### 1. **Creating a Grid Container**

To use CSS Grid, define a container and apply `display: grid`:

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
}
```

---

### 2. **Defining Columns and Rows**

Use `grid-template-columns` and `grid-template-rows` to define structure.

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 50px 50px;
}
```

 You just created a **3-column, 2-row grid**.

---

### 3. **Using `fr` Unit**

The `fr` unit represents a fraction of the available space.

```css
grid-template-columns: 1fr 2fr 1fr;
```

 This creates 3 columns: 25%, 50%, and 25% of space respectively.

---

##  Grid Properties Overview

###  `grid-template-columns` / `grid-template-rows`

Defines number and size of columns/rows.

```css
grid-template-columns: repeat(3, 1fr);
```

 Shorthand: `repeat(n, value)`.

---

###  `grid-gap` / `gap`

Adds space between rows and columns.

```css
gap: 10px;
/* or */
row-gap: 10px;
column-gap: 20px;
```

---

###  `grid-column` and `grid-row`

Specify how a grid item spans columns or rows.

```css
.item {
  grid-column: 1 / 3; /* spans from column 1 to 3 */
  grid-row: 1 / 2;     /* occupies row 1 only */
}
```

---

###  `grid-area`

Allows naming and positioning areas:

```css
grid-template-areas:
  "header header"
  "sidebar main"
  "footer footer";
```

And apply with:

```css
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

---

##  Example: Simple 3-Column Layout

```html
<div class="grid">
  <div>Header</div>
  <div>Menu</div>
  <div>Content</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 10px;
}
```

---

##  Responsive Grid with Media Queries

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

 Switches to 1 column on small screens.

---

##  Real-World Example: Card Layout

```html
<div class="card-grid">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>
```

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}
```

 `auto-fill` and `minmax` make it **responsive and fluid**.

---

##  Advanced Grid Techniques

### 1. **Nested Grids**

```css
.parent {
  display: grid;
}
.child {
  display: grid;
}
```

Allows modular, layered designs.

---

### 2. **Grid Auto Placement**

Let the browser auto-place items in rows/columns.

```css
grid-auto-rows: 100px;
grid-auto-columns: 1fr;
```

---

### 3. **Aligning Items**

```css
/* Container level */
justify-items: start | end | center | stretch;
align-items: start | end | center | stretch;

/* Individual item level */
justify-self: center;
align-self: end;
```

---

##  CSS Grid vs Flexbox

| Feature        | Grid Layout               | Flexbox                     |
|----------------|---------------------------|-----------------------------|
| Axis           | Two-dimensional (rows + columns) | One-dimensional (row OR column) |
| Use Case       | Page layouts               | UI components (nav, cards)  |
| Item Control   | Precise row/column control | Distributes content evenly |

---

##  Practice Challenge

Create a 2x2 grid with the following layout:

```
+----------+----------+
| Header   | Header   |
+----------+----------+
| Sidebar  | Content  |
+----------+----------+
```

### Solution:

```html
<div class="grid">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Content</div>
</div>
```

```css
.grid {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content";
  grid-template-columns: 1fr 3fr;
  gap: 10px;
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
```

---

##  Summary

| Concept                | Usage                            |
|------------------------|----------------------------------|
| `display: grid`        | Enables grid on a container      |
| `grid-template-columns`| Defines column layout            |
| `grid-template-rows`   | Defines row layout               |
| `gap`                  | Adds space between items         |
| `grid-area`            | Names and places sections        |
| `fr`                   | Fractional unit of space         |
