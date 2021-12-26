Recoil
=============

-Recoil 연습해서 작은 프로젝트를 만들어보자


Atoms
-고유한 key를 주고 defualt 값을 설정
```javascript
import { atom } from "recoil";

const todoListState = atom({
  key: 'todoListState',
  default: [],
});
```



Recoil hooks
```javascript
import {useRecoilValue} from "recoil";

const todoList = useRecoilValue(todoListState);
//atom의 항목을 읽기 위해 사용하는 훅
```
