# HiCulture Code Template
## Laravel+React

### 主要模块  
- Laravel @ 9
- InertiaJS @ latest
- React @ 17
- AntDesign @ 4.20  


### 辅助模块
- qrcode.react
- rc-banner-anim
- rc-tween-one
- moment
- numeral  
- react-barcode  
- react-to-print
- InertiaJS SSR

### 部署要求
- Node @ 14
- PHP @ 8.0.2
- NPM
- PM2

### 预建部署平台
- AWS Beanstalk

### 安装依赖  
`composer install && npm install && npm run prod`

### NGINX 部署
设置根目录为 public ，添加以下代码到 nginx 配置文件
``` 
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

### SSR 运行  
`pm2 start public/js/ssr.js`
