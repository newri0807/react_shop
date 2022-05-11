
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Detail.scss';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';


function Detail(props) {

    let history = useHistory();

    let { id } = useParams();
    let 찾은상품 = props.shoes.find(function (상품) { //find() 라는 ES6 신문법. Array 안에서 원하는 자료를 찾고싶을 때 사용
        return 상품.id == id
    });

    let [alert, alert변경] = useState(true);
    useEffect(() => {
        let 타이머 = setTimeout(() => { alert변경(false) }, 2000);
        return () => { clearTimeout(타이머) }
    }, []);

    let [누른탭, 누른탭변경] = useState(0);
    let [스위치, 스위치변경] = useState(false);  // for animation switch && 누르지 않는이상 작동안해야 되니까 false로 기본값 셋!

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={'https://codingapple1.github.io/shop/shoes' + (찾은상품.id + 1) + '.jpg'} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    {
                        alert === true
                            ? (<div className="my-alert2">
                                <p>재고가 얼마 남지 않았습니다</p>
                            </div>)
                            : null
                    }
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>
                    <button className="btn btn-danger" 
                    onClick={()=>{ 
                        props.dispatch( {type : '항목추가', 데이터 : {id: 찾은상품.id, name : 찾은상품.title, quan : 1} }) 
                        history.push('/cart'); // 라우터 함수를 이용해서 페이지 이동을 강제, 새로고침 안됨
                        }}>
                        주문하기</button>  

                    <span className="pr-1"></span>
                    <button onClick={() => { history.goBack() }} className="btn btn-primary" >뒤로가기</button>
                    <Info 재고={props.재고[0]}></Info>
                </div>
                <div>
                    <Nav variant="tabs" defaultActiveKey="link-0">
                        <Nav.Item>
                            <Nav.Link eventKey="link-0" onClick={() => { 스위치변경(false); 누른탭변경(0) }}>Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" onClick={() => { 스위치변경(false); 누른탭변경(1) }}>Option 2</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <CSSTransition in={스위치} classNames="wow" timeout={500}>
                        <TabContent 누른탭={누른탭} 스위치변경={스위치변경}/>
                    </CSSTransition>
                </div>


            </div>
        </div>
    )
};

function Info(props) {
    return (
        <p className="mt-3">재고 : {props.재고}</p>
    )
}

function TabContent(props) {

    useEffect( ()=>{
        props.스위치변경(true); //탭내용 컴포넌트가 로드될 때 true
      });

    if (props.누른탭 === 0) {
        return <div><br />   내용0</div>
    } else if (props.누른탭 === 1) {
        return <div><br />내용1</div>
    } else if (props.누른탭 === 2) {
        return <div><br />내용2</div>
    }
}


function state를props화(state) {
    return{
       state : state.reducer,
       alert열렸니 : state.reducer2 //리듀서2에 있는거 가져오는법
    }
}


export default connect(state를props화)(Detail);