// 配置需要展示在侧边栏的项，目前只支持2级，多级需要修改路由部分、面包屑部分
const menuConfig = [
  {
    title: '首页',
    key: '/',
    icon: 'home'
  },
  {
    title: '用户',
    key: '/user',
    icon: 'user',
    children: [
      {
        title: '用户列表',
        key: '/user/list',
      },
    ]
  }
];

export default menuConfig;
