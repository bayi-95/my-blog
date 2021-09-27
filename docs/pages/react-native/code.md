## react-navigation 篇

参考项目 https://github.com/react-navigation/react-navigation.git

∆ react-navigation / exapmle / App.tsx

```jsx
1.最外层"<View style={{ flex: 1 }}>"包裹
2.<NativeViewGestureHandler> 源自 react-native-gesture-handler（在UI线程中识别和跟踪手势，防止手势操作被一些Native组件劫持）
3.<Animated.ScrollView> 包裹滚动区域
4.原生动画驱动 改变translateY的值 参考：https://reactnative.cn/docs/0.51/animations.html#使用原生动画驱动
5.translateY改变 绑定的对象值改变，例：

const translateY = this.state.scrollY.interpolate({
    extrapolate: 'clamp',
    inputRange: [-450, 0, 100],
    outputRange: [-150, 0, 40]
});

6.interpolate 值变动范围；extrapolate: 'clamp',阻断值的输入；
7.绑定的对象值改变 因绑定在transform上 改变UI视图；

<Animated.View
  style={[
    styles.backgroundUnderlay,
    {
      transform: [
        { scale: backgroundScale },
        { translateY: backgroundTranslateY },
      ],
    },
  ]}
/>

8.<SafeAreaView>安全区域 内容不会被机型的刘海遮挡；forceInset可以选择是否显示边距 forceInset={{ top: 'never', bottom: 'always' }}
9.图片资源的加载

<Image
    source={require('./src/assets/NavLogo.png')}
    style={styles.bannerImage}
/>

// 10. 文字需包裹在Text组件里

<Text style={styles.bannerTitle}>
    React Navigation Examples
</Text>
```
