module.exports={
    devServer:{
        // /api로 시작되는 요청 주소 정의
        proxy:{
            '/api':{
                target:'http://localhost:3000/api',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                },
            }
        }
    },

    // 배포 위치
    // npm run build를 입력해 배포한다
    outputDir: '../backend/public',

    transpileDependencies: [
      'vuetify'
    ]
}
