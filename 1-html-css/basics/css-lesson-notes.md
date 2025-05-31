# 📘 CSS Lesson Note

## 📌 1. What is CSS?

**CSS** (Cascading Style Sheets) is used to style and layout HTML elements.

```html
<!-- HTML Example -->
<p>This is a paragraph.</p>

<!-- CSS Example -->
<style>
  p {
    color: blue;
    font-size: 16px;
  }
</style>
```

---

## 📌 2. CSS Syntax

```css
selector {
  property: value;
}
```

**Example:**

```css
h1 {
  color: red;
  text-align: center;
}
```

---

## 📌 3. Types of CSS

- **Inline CSS**
  ```html
  <h1 style="color: green;">Hello</h1>
  ```
- **Internal CSS**
  ```html
  <style>
    h1 { color: green; }
  </style>
  ```
- **External CSS**
  ```html
  <!-- link in HTML -->
  <link rel="stylesheet" href="styles.css">
  ```

---

## 📌 4. CSS Selectors

### Basic Selectors:
- `*` → Universal
- `p` → Type
- `.class` → Class
- `#id` → ID

### Combinators:
- `div p` → descendant
- `div > p` → direct child
- `div + p` → adjacent sibling
- `div ~ p` → general sibling

### Attribute Selectors:
```css
input[type="text"] {
  border: 1px solid gray;
}
```

### Pseudo-classes:
```css
a:hover { color: red; }
input:focus { border-color: blue; }
```

### Pseudo-elements:
```css
p::first-letter { font-size: 2em; }
p::before { content: "Note: "; }
```

---

## 📌 5. Colors

```css
color: red;
color: #ff0000;
color: rgb(255, 0, 0);
```

---

## 📌 6. Text & Fonts

```css
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: justify;
  text-decoration: underline;
  line-height: 1.6;
}
```

---

## 📌 7. Box Model

All elements are boxes. The **box model** includes:
- Content
- Padding
- Border
- Margin

```css
div {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}
```

---

## 📌 8. Display & Position

### `display`
- `block`, `inline`, `inline-block`, `none`, `flex`, `grid`

### `position`
- `static`, `relative`, `absolute`, `fixed`, `sticky`

```css
.relative-box {
  position: relative;
  top: 10px;
  left: 20px;
}
```

---

## 📌 9. Flexbox

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
```

Flexbox properties:
- `flex-direction`
- `justify-content`
- `align-items`
- `flex-wrap`
- `gap`

---

## 📌 10. CSS Grid

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
```

Grid properties:
- `grid-template-columns/rows`
- `grid-gap`
- `grid-column/row-start/end`
- `place-items`

---

## 📌 11. Responsive Design

### Media Queries:

```css
@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}
```

---

## 📌 12. Transitions and Animations

```css
.button {
  transition: background 0.3s ease;
}
.button:hover {
  background-color: blue;
}
```

```css
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.box {
  animation: slideIn 1s ease-in-out;
}
```

---

## 📌 13. CSS Variables

```css
:root {
  --main-color: #3498db;
}
h1 {
  color: var(--main-color);
}
```

---

## 📌 14. Best Practices

- Use external CSS
- Use semantic class names
- Avoid `!important`
- Organize code (e.g., using BEM naming)
- Use shorthand properties

---

## 📌 15. Tools & Resources

- **DevTools** – Inspect elements and test CSS in-browser
- **CSS frameworks** – Tailwind, Bootstrap
- **Preprocessors** – SASS, LESS
- **Sites** – [CSS Tricks](https://css-tricks.com), [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

## ✅ Example: Simple Styled Card

```html
<div class="card">
  <h2>Title</h2>
  <p>This is a paragraph inside the card.</p>
</div>

<style>
  .card {
    width: 300px;
    padding: 20px;
    border-radius: 8px;
    background: white;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    font-family: sans-serif;
  }
</style>
```