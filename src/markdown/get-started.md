# 开始使用

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```js
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "v3-wheel"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```vue
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "v3-wheel"
export default {
  components: {Button}
}
</script>
```
