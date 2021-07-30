# mkdir

create folders and files by you options, Especially when you are doing repetitive work

# 说明

如果你正在做重复的拷贝文件夹或文件，此包正是你需要，只要你安装了node，不限项目，都可以按照你的需要，生成对应文件夹文件

# 安装

npm i @buquan/mkdir -g 全局安装 (建议)

npm i @buquan/mkdir -S 项目安装

# 配置

需要在根目录创建mk文件夹，建立data.js, template.js，支持写入任何文件，可查看下面🌰的data和template对应匹配规则，从此再无复制粘贴烦恼，也可集成到自己项目

Eg: 

```javascript
//  data.js
exports.data = [
    {
        folder: 'home',
        file: [
            {
                name: 'api.js'
            },
            {
                name: 'index.js',
                component: {
                    name: 'Home'
                }
            }
        ],
        next: {
            folder: 'child1',
            file: [
                {
                    name: 'api.js'
                },
                {
                    name: 'index.js',
                    component: {
                        name: 'Child1'
                    }
                }
            ]
        }
    },
    {
        folder: 'home2',
        file: [
            {
                name: 'api2.js'
            },
            {
                name: 'index.js',
                component: {
                    name: 'Home2'
                }
            }
        ],
        next: {
            folder: 'child2',
            file: [
                {
                    name: 'api2.js'
                },
                {
                    name: 'index.js',
                    component: {
                        name: 'Child2'
                    }
                }
            ]
        }
    }
]
```

```javascript
//  template.js
exports.page = function ({ component, data }) {
    if (component) {
        return `
            import * as React from 'react';

            export class ${component.name} extends React.Component{
                constructor(props){
                    super(props);

                    this.state = {}
                }

                componentDidMount(){

                }

                render() {
                    return (
                        <div></div>
                    )
                }
            }
        `
    }
    return data || ``;
}
```

# 使用

 全局安装下：(ps：a/b为指定的根目录路径)

```js
mk root=a/b
```



 项目下使用：package.json scripts配置 

```js
"mks": "node ./node_modules/.bin/mk root=\"a/b\"" 
```



