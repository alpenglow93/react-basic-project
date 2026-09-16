import {useState, useEffect} from "react";
import axios from "axios";

function Food() {
    // 변경 => state
    const [list,setList] = useState([]);
    const [curpage, setCurpage] = useState(1);
    const [totalpage, setTotalpage] = useState(0);
    const [startPage, setStartPage] = useState(0);
    const [endPage, setEndPage] = useState(0);

    // mounted() => useEffect()
    useEffect(()=>{
        // curpage가 변경될 때마다 서버 연결 => 데이터 변경 => HTML에 적용
        axios.get(`http://localhost:8080/food/list/${curpage}`)
            .then(res=>{
                console.log(res.data);
                setList(res.data.list);
                setCurpage(res.data.curpage);
                setTotalpage(res.data.totalpage);
                setStartPage(res.data.startPage);
                setEndPage(res.data.endPage);
            })
    },[curpage]);

    // 화면 출력
    let html = list.map((f, index) =>
        <div className="col-md-3" key={index}>
            <div className="thumbnail">
                <a href="#">
                    <img src={f.poster} alt={f.address} style={{"width":"250px","height":"130px","objectFit":"cover"}}/>
                    <div className="caption">
                        <p>{f.name}</p>
                    </div>
                </a>
            </div>
        </div>
    )

    // 이벤트 처리
    const prev=()=>setCurpage(startPage-1);
    const next=()=>setCurpage(endPage+1);
    const pageChange=(page)=>setCurpage(page);

    const pageArr = []
    if(startPage > 1) {
        pageArr.push(
            <li><a className={"a-link"} onClick={prev}>&laquo;</a> </li>
        )
    }
    for(let i=startPage;i<=endPage;i++){
        pageArr.push(
            <li className={i===curpage?"active":""}><a className={"a-link"} onClick={()=>pageChange(i)}>{i}</a> </li>
        )
    }
    if(endPage < totalpage){
        pageArr.push(
            <li><a className={"a-link"} onClick={next}>&raquo;</a> </li>
        )
    }
    return (
        <div className="container">
            <div className="row">
                {html}
            </div>
            <div className="row text-center" style={{"margin-top":"10px"}} >
                <ul className="pagination">
                    {pageArr}
                </ul>
            </div>
        </div>
    )
}

export default Food;