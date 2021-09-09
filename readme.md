## 타입스크립트

### 타입스크립트 공식 사이트

공식사이트 : https://www.typescriptlang.org

#### 사이트 설명

Docs : 문서들을 모아놓은 탭  
Handbook : 타입스크립트를 익힐 수 있는 핸드북  
Playground : 타입스크립트를 실습해볼 수 있는 에디터

### 설치

#### 프로젝트 버전 정보

| program    | version |
| ---------- | ------- |
| node js    | 4.42    |
| typescript | 4.42    |
| javascript | ES6     |

#### 사용 에디터

- VSCode
  - 설치 경로 : https://code.visualstudio.com/
  - 설정
    - 유튜브 참고

#### 설치 항목

- node.js (LTS 버전 다운로드) -> https://nodejs.org/ko/

  ```
  // 설치 완료 후 버전 확인, 설치가 완료되면 버전이 출력
  $ node -v
  v14.17.6
  ```

- typescript

  ```
  // 설치 명령어
  $ sudo npm install -g typescript

  // 설치 완료 후 버전 확인, 설치가 완료되면 버전이 출력
  $ tsc -v
  Version 4.4.2
  ```

- ts-node

  ```
  // 설치 명령어
  $ sudo npm install -g ts-node
  ```

### 컴파일

- 컴파일 명령어

  ```
  $ ts-node 파일명.ts
  ```

- tsconfig.json 생성 명령어
  ```
  $ tsc --init
  ```
