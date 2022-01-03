Library-Practice
============

#Recoil

recoil 주요개념
- atoms (공유 상태)
- selectors (순수 함수)


###Atoms
- useState와 비슷한 기능을 하지만 여러 컴포넌트에서 공유해서 사용 가능함
```javascript
const fontSizeState = atom({
  key: 'fontSizeState', //key 값은 고유해야함
  default: 14,
});

function FontButton() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    //useRecoilState()를 통해 atom을 읽고 쓸 수 있다.
    return (
        <button onClick={() => setFontSize((size) => size + 1)} style={{fontSize}}>
    Click to Enlarge
    </button>
);
}

```

###Selectors
- Selector는 atoms나 다른 selectors를 입력으로 받아들이는 순수 함수(pure function)다
- 컴포넌트들은 selectors를 atoms처럼 구독할 수 있다.
- get 속성은 계산될 함수로 다른 atom이나 selector에 접근할 수 있고 접근한 atom이나 selector가 업데이트 되면 함수가 다시 실행 된다.
- Selectors는 useRecoilValue()를 사용해 읽을 수 있다. useRecoilValue()는 하나의 atom이나 selector를 인자로 받아 대응하는 값을 반환한다.
```javascript
const fontSizeLabelState = selector({
  key: 'fontSizeLabelState',
  get: ({get}) => {
    const fontSize = get(fontSizeState);
    const unit = 'px';

    return `${fontSize}${unit}`;
  },
});
```
```javascript
function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  //fontSizeState Atom을 불러옴
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);
  //fontSizeLabelState Selector를 불러옴
    //fontSizeLabelState는 내부에서 fontSizeState Atom에 접근하고 있기 때문에
    //fontSizeState가 업데이트 되면 selector/get 에 있는 함수를 다시 실행함
  return (
    <>
      <div>Current font size: ${fontSizeLabel}</div>

      <button onClick={setFontSize(fontSize + 1)} style={{fontSize}}>
        Click to Enlarge
      </button>
    </>
  );
}

```
