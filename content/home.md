---
title: Home
---

# Welcome to our comprehensive docs site!
It is live 😍

```php
$charge = Stripe::charges()->create([
  // Aaaahhhhh... Much cleaner! 😍
  'amount' => $product->finalPrice,
]);
```

```js{3}[nuxt.js]
// this is cool 😎
async asyncData({ $content }) {
  const page = await $content("docs").fetch();

  return {
    page
  };
}
```
