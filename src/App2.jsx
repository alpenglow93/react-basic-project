import {useState, useEffect,Fragment} from 'react'

/*
    자바 스크립트
        = 반복문
        map
        forEach
 */
function Food(props){
    const html = props.movie.map((m,index)=>
        <tr key={index}>
            <td>{m.rank}</td>
            <td>
                <img src={"https://www.kobis.or.kr/" +m.thumbUrl} alt="영화포스터"
                    style={{width:'30px',height:'30px'}} />
            </td>
            <td>{m.movieNm}</td>
            <td>{m.director}</td>
            <td>{m.genre}</td>
        </tr>
    )
    return (
        <>
            <h1 className="text-center">일일 박스오피스</h1>
            <table className={"table table-striped"}>
                <thead>
                    <tr>
                        <th className={"text-center"}>순위</th>
                        <th className={"text-center"}></th>
                        <th className={"text-center"}>영화명</th>
                        <th className={"text-center"}>감독</th>
                        <th className={"text-center"}>장르</th>
                    </tr>
                </thead>
                <tbody>
                {html}
                </tbody>
            </table>
        </>
    );
}
/*
const App3=()=>{

}

export default App4=()=>{

}
*/
export default Food;