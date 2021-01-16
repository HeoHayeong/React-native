# react-native 방식
- 안드로이드 ,iOS 둘다 자바스크립트를 실행할 수 있다.
    - 자바스크립트 엔진을 가지고 있기 때문에 
- 자바스크릅트를 이용해서 iOS, 안드로이의 네이티브 엔진에게 메세지를 보낸다.
    - 연결해주는 브릿지 같은것, 리엑트 컴포넌트(App.js) 

# 컴포넌트
### 01. react-native의 다른 규칙
- 모든게 다 &lt;View&gt;안에  써야함 , &lt;div&gt; 랑 같은것이라고 생각하자 
- &lt;span&gt;태그 안씀 -> <Text>태그에 씀 
```JS
    <View style={styles.container}>
        <Text>안녕</Text>
    </View>
```

### 02. style               
```JS
            // StyleSheet API
const styles = StyleSheet.create({
  container: {
    flex: 1, // 전체 스크린을 가지는 flex 박스
    backgroundColor: '#da77f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```
- px 안됨
- 모든 flex box의 디폴트는 flexDirection이 cloumn이다.

## 03. flex 레이아웃 핸들링 방법 
___


 > app.json : expo가 읽게 될 파일



 