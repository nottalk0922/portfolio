import { useEffect, useState } from 'react'
import { firestore } from "../firebase"
import {
    ReactJs,
    Redux,
    Reduxsaga,
    Sass,
    Javascript,
    Html5,
    CssThree,
    Python
  } from "@icons-pack/react-simple-icons";


export default function Body(){
    
    const [data, setData] = useState("d")
    const test = firestore.collection("test");

    useEffect(() => {
      test.doc("friend").get().then(result => {
        console.log(result.data())
        setData(result.data().friendCnt)
      })
    }, [])

    return(
        <div className="body">
            <div className="top">
                <div>
                    <h1>로봇을 좋아하는 초보</h1>
                    <hr />
                    <h1>박무언</h1>
                    <h2>웹 포트폴리오</h2>
                    <h4>안녕하세요. 박무언 입니다.</h4>
                    <h4>언제나 새로운 것을 개발하는 것을 즐기는 사람입니다.</h4>
                </div>
            </div>
            <div className="top1">
                <h1>ABOUT ME</h1>
                <div>
                    <div>
                        <h2>퀄리티는 디테일이 중요하다.</h2>
                        <p>안녕하세요. 성장을 추구하는 열정있는 개발자가 되고싶은 박무언입니다.</p>
                        <p> 새로운 기능을 배우고 재밌는 프로젝트를 하는 것을 좋아합니다.</p>
                        <p>임베디드소프트웨어과에 재학 중이며 임베디드개발자를 지망하고 있습니다.</p>
                    </div>
                    <div id="lilili">         
                        <li>이름 : 박무언</li>
                        <li>사는 곳: 부산광역시 서구</li>
                        <li>생년월일 : 2005.09.22</li>
                    </div>
                </div>
            </div>
            <div className="skills-infos">
              <div className="skill-group">
                <div className="skill">
                  <Html5 color="#E34F26" size={50} />
                </div>
                <p className="skill-info">HTML</p>
              </div>
              <div className="skill-group">
                <div className="skill">
                  <CssThree color="#1572B6" size={50} />
                </div>
                <p className="skill-info">CSS</p>
              </div>
              <div className="skill-group">
                <div className="skill">
                  <Javascript color="#F7DF1E" size={50} />
                </div>
                <p className="skill-info">JS</p>
              </div>
              <div className="skill-group">
                <div className="skill">
                  <ReactJs color="#61DAFB" size={50} />
                </div>
                <p className="skill-info">React.js</p>
              </div>
              <div className="skill-group">
                <div className="skill">
                  <Redux color="#764ABC" size={50} />
                </div>
                <p className="skill-info">Redux</p>
              </div>
              <div className="skill-group">
                <div className="skill">
                  <Reduxsaga color="#999999" size={50} />
                </div>
                <p className="skill-info">Redux-Saga</p>
              </div>
              <div className="skill-group">
                <div className="skill">
                  <Sass color="#CC6699" size={50} />
                </div>
                <p className="skill-info">SASS</p>
              </div>
              <div className="skill-group">
                <div className="skill">
                  <Python color="#3766AB" size={50} />
                </div>
                <p className="skill-info">Python</p>
              </div>
            </div>

            <div className="portfolio">
                <h1>포트폴리오 git주소</h1>
                <h2>{data}</h2>
            </div>
        </div>   
    )
}