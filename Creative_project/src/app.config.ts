export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/quiz/index',
    'pages/record/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#6366F1',
    navigationBarTitleText: '学习助手',
    navigationBarTextStyle: 'white'
  },
  tabBar: {
    color: '#64748B',
    selectedColor: '#6366F1',
    backgroundColor: '#FFFFFF',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页'
      },
      {
        pagePath: 'pages/quiz/index',
        text: '答题'
      },
      {
        pagePath: 'pages/record/index',
        text: '记录'
      }
    ]
  }
})
