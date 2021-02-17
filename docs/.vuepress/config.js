module.exports = {
    title: '数据库系统概述',
    description: '数据库系统 概述 - 知识点',
    themeConfig: {
        // displayAllHeaders: true,
        sidebar: [
            {
                title: '数据库系统概论',   // 必要的
                path: '/overview/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            },
            {
                title: '关系数据库',   // 必要的
                path: '/relational-db/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            },
            {
                title: '数据库设计',   // 必要的
                path: '/db-design/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            }, 
            {
                title: 'SQL与关系数据库基本操作',   // 必要的
                path: '/sql-db-basic-operate/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            },
            {
                title: '数据库编程',   // 必要的
                path: '/db-programming/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            },
            {
                title: '数据库安全与保护',   // 必要的
                path: '/db-security-protection/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            },
            {
                title: '数据库应用设计与开发实例',   // 必要的
                path: '/db-dev-examples/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            },
            {
                title: '数据库管理技术的发展',   // 必要的
                path: '/db-dev/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
            }
        ]
    }
}