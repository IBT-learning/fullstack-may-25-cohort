# JavaScript DOM

## What is the DOM?

The **Document Object Model (DOM)** is a programming interface for HTML and XML documents. It represents the page as a hierarchical node tree that can be manipulated with JavaScript.

The DOM allows you to:

* Read and change the contents of HTML elements.
* Change styles.
* Add, remove, and manipulate elements.
* Respond to events like clicks or key presses.

---

## Selecting Elements

You can select elements using different methods:

### `getElementById()`

Returns a single element by its ID.

```html
<p id="message">Hello World</p>
<script>
  const msg = document.getElementById('message');
  console.log(msg.innerText); // Output: Hello World
</script>
```

### `getElementsByClassName()`

Returns an HTMLCollection of elements with a specified class.

```html
<p class="greet">Hi</p>
<p class="greet">Hello</p>
<script>
  const greetings = document.getElementsByClassName('greet');
  for (let i = 0; i < greetings.length; i++) {
    console.log(greetings[i].innerText);
  }
</script>
```

### `getElementsByTagName()`

Returns an HTMLCollection of elements with a specified tag.

```html
<p>First</p>
<p>Second</p>
<script>
  const paragraphs = document.getElementsByTagName('p');
  for (let para of paragraphs) {
    console.log(para.innerText);
  }
</script>
```

### `querySelector()` and `querySelectorAll()`

More powerful CSS-style selectors.

```html
<div class="card"><h2>Title</h2></div>
<script>
  const cardTitle = document.querySelector('.card h2');
  const allDivs = document.querySelectorAll('div');
  console.log(cardTitle.innerText);
  allDivs.forEach(d => console.log(d.tagName));
</script>
```

---

## Manipulating Elements

### Changing Text

Use `innerText` or `textContent`:

```html
<p id="status">Loading...</p>
<script>
  const status = document.getElementById('status');
  status.innerText = 'Data loaded successfully';
</script>
```

### Changing HTML

Use `innerHTML`:

```html
<div id="container"></div>
<script>
  const container = document.getElementById('container');
  container.innerHTML = '<strong>New content here</strong>';
</script>
```

### Changing Styles

Modify the `style` property:

```html
<p id="notice">Important message</p>
<script>
  const notice = document.getElementById('notice');
  notice.style.color = 'red';
  notice.style.fontSize = '20px';
</script>
```

---

## Creating and Appending Elements

```html
<ul id="myList"></ul>
<script>
  const list = document.getElementById('myList');
  const newItem = document.createElement('li');
  newItem.innerText = 'New list item';
  list.appendChild(newItem);
</script>
```

---

## Removing Elements

```html
<ul id="myList">
  <li>Item to remove</li>
</ul>
<script>
  const list = document.getElementById('myList');
  list.removeChild(list.firstElementChild);
</script>
```

---

## Adding Event Listeners

```html
<button id="clickMe">Click me</button>
<script>
  const btn = document.getElementById('clickMe');
  btn.addEventListener('click', () => {
    alert('Button clicked!');
  });
</script>
```

---

## Traversing the DOM

```html
<div id="parent">
  <p>First child</p>
  <p>Second child</p>
</div>
<script>
  const parent = document.getElementById('parent');
  console.log(parent.firstElementChild.innerText);
  console.log(parent.lastElementChild.innerText);
</script>
```

---

## Attributes

```html
<img id="image" src="image.png" alt="Example">
<script>
  const img = document.getElementById('image');
  img.setAttribute('alt', 'New alt text');
  console.log(img.getAttribute('src'));
  img.removeAttribute('src');
</script>
```

---

## Summary

* The DOM is a tree-like representation of your webpage.
* You can select elements with `getElementById`, `querySelector`, etc.
* Manipulate elements’ text, style, and attributes.
* Create new elements or remove existing ones.
* Attach event listeners for interactivity.

