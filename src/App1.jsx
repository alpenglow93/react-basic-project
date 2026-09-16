/*
    React : facebook => 검색 => 반복이 많다 (반복을 제거)
            | 인스타그램, 항공사
            | 기본이 되는 front
    1) 장점
        = 서버와 화면이 분리
            React
             | API => axios / fetch
            Spring-Boot => 거의 대부분이 서버로만 사용 / 화면 제어를 하지 않는다
             |      => JSP : ThymeLeaf
            DB

            => 사이트 : SpringBoot + ThymeLeaf
                       SpringBoot + React / Vue
        = React는 화면만 담당한다 (MSA => NodeJS / SpringBoot / FastAPI)
            ** Jquery 4
        = 페이지 전체 새로고침이 작다 (실시간 전송이 가능)
            JSP / ThymeLeaf => 요청 - 서버 - HTML 생성 - 브라우저 갱신
            React => 요청 = JSON = React 상태 변경 = 화면 갱신
                                  -------------- state
        = 컴포넌트 재사용
            <Map> <PageCard>
        = 비동기 처리가 가능하다 (서버 통신 / 화면 UI 분리가 가능)
        = 가상돔을 이용하고 있다
            Vue와 동일
        = Vue보다 Document 확인이 용이
    2) 단점
        = 코드가 복잡하다
        = CORS 문제 => Cross Domain => 3000 포트 다르면 접속 안 된다
            => 서버를 연결시 세션의 문제 , Cookie 문제
            => 자체에서 세션 / Cookie 지원 => 자바스크립트 이용
            => React 자체에 Cookie/Session 라이브러리가 존재
        = API URL 관리
            서버 URL / 자체 화면 이동 (router) URL이 같으면 안된다
            => list_react list
        = 단방향 통신 (***) => 공유데이터 이용 => store => Redux
            Vue3 ==== Vuex ==== Pinia
            React === Redux ==== Next
            JSP ==== MVC ==== Spring
    3) 코딩 방식
        = class형식
            class App1 extends Component {
                state:{},
                componentDidMount() {}
                componentDidUpdate() {} => 자동 호출
            }
            호출 => <App1>
        = function 형식
            호출 => <App>
    4) 면접
        React / Vue 차이점
        대규모 / 소규모
        단방향 / 양방향
        React : View 관련 개발 라이브러리 (화면 UI) => request.setAttribute(출력 관련 데이터)
                                                => JSON
              : 컴포넌트 단위로 화면 구성
              : 클라이언트 사이드 랜더링 => HTML을 다시 수행하는 역할
                서버 사이드 : NodeJS, SpringBoot
              : 재호출 처리하는 방식 => 재랜더링
                => HTML 전체 변경이 아니고 데이터만 변경 = 속도가 빠르다
                => 서버에서 전송하는 속도에 맞게 만든 Front 라이브러리
              : 단방향 통신 = 데이터 관리 / 화면 관리
                            -------------------- Redux (Mobx,saga) => Next
    ------------------------------------------------------------------------
    5) JSX => JavaScript + XML
        => 문법 (XML)
        1. 최상위 태그는 반드시 1개가 필요하다
        2. 여는 태그 / 닫는 태그 일치
            <a><b><c></c></b></a> => 열고 닫는 순서 다르면 오류
            단독태그
            <input/> <br/> <img/>
        3. 속성값 : '' , "" => 변수값 {} => <img src={}/>
        4. 속성 / 태그 => 대소문자 구분
            HTML 태그는 소문자 / 함수명 , 클래스 => 첫글자 대문자
        5. <태그>{변수명}</태그>
        6. 변수의 종류
            지역변수 : let , const
            멤버변수 : => 변경되는 데이터 (state)
                     =>변경이 안 되는 데이터 (props) => 불변
    6) Hooks
        useState => state변수 -> HTML을 변경
        const [name,setName] = useState("홍길동")  <= 초기화
                    -------
                     | 재랜더링 => return 값을 변경
                     | 서버값은 반드시 state
        useState(0) , useState([]) , useState({})
        const [name:string,setName] = useState("홍길동")
        const [data:Array,setData]
        const [data:Object,setData] => jsx 확장자가 변경 : tsx (TypeScript)

        name - setName - name값 변경 => HTML로 전환 => 여러개 설정이 가능

        useEffect() => mounted
        ----------- 데이터가 변경될 때마다 호출
            |
           return () => HTML이 변환
           => 서버 데이터 읽기
           => 이벤트 등록
           => 타이머
           => 외부 API 호출 (Jquery)
           => DOM 작업

           => useEffect(()=>{
                작업 수행
           })   ==> 이렇게 쓰면 한 번만 수행

           => useEffect(()=>{
                작업 수행
           },[curpage]) ==> 현재 페이지가 변경시마다 재호출

           useMemo => 재호출 방지 => 반복 제거
           useCallback() / useDispatcher
           => 17버전에서 활성화
        => 나머지는 자바스크립트 문법
    중요한 문법
        <img src={} style={{"width":"200px"}}>

    React 핵심 문법
        1. import => 외부 라이브러리 읽기
        2. function func명() : React 컴포넌트
        3. useState() 상태 관리 / 데이터 관리
        4. useEffect() 렌더링 후 작업
        5. axios : 서버 연동
        6. {} : 화면에 데이터 출력
        7. style={{}}
        8. css 적용 => class="" (X) , className=""
        9. export default => 컴포넌트를 외부 공개
        10. 형식
            function Home() {}
            const Home=()=>{}
            export default Home=()=>{}

 */
function App1(props){
    // 서버에서 데이터 읽기
    return (
        <div>
            <h1>Hello React</h1>
            <h1>{props.name}</h1>
        </div>

    );
}
export default App1;