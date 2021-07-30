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