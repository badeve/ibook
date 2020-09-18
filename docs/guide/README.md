# Hello VuePress!

## Hello BadCode‘s Blog

## 自定义容器 默认主题

::: tip 友情提示
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details 点击查看详情
这是一个详情块，在 IE / Edge 中不生效
:::


你也可以自定义块中的标题：

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::







## 语法高亮

输入：

~~~js
export default {
  name: 'MyComponent',
  // ...
}
~~~

```html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```

```text
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js{1,4,6-7}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VuePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```