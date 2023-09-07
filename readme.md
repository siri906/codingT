## 1. Node.js 설치
gulp를 사용하기 위해서 node.js 를 다운로드 받기

* https://nodejs.org      ```
<-   v10.16.3 버전 설치 ```


node와 npm이 제대로 설치되었는지 확인

 ```
* [ 노드 버전 확인 ]   node -v 
* [ npm 버전 확인 ]   npm -v
 ```



## 2. gulp 설치

``` 
npm install gulp -g 
```
gulp를 사용하기 위해서는 npm을 통해 gulp-cli를 전역으로 설치
 ```
* [gulp 전역설치 버전확인]  gulp -v 
 ```


## 3. npm 의존 설치

```
npm install
```

## 4.package 실행

```
gulp
```

 
 ## Project 구조
 ```
 +-- project
 | +-- build ( 결과물 ) 
 | +-- node_modules
 | +-- dev ( 작업폴더)
 | | +-- _include
 | | +-- _scss
 | | +-- font
 | | +-- html
 | | | +-- list.html
 | | +-- images
 | | +-- js
 
 
