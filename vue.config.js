module.exports={
    configureWebpack:{
        resolve:{
            // 设置别名路径
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}