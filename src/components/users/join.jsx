import React, { useState } from 'react'
import DaumPostcode from 'react-daum-postcode';
import { Button, Form, Modal } from 'react-bootstrap';
import '../../style/join.css';

const Join = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [addr1, setAddr1] = useState(''); // 우편번호
    const [addr2, setAddr2] = useState(''); // 도로명주소
    const [addr3, setAddr3] = useState(''); // 상세주소
    const [userid, setUserid] = useState('');
    const [username, setUsername] = useState('');
    const [userpasswd, setUserpasswd] = useState('');
    const [useremail, setUseremail] = useState('');
    //const [isOpenPost, setIsPostOpen] = useState(false);




    const onUserid = (e) => {
        setUserid(e.currentTarget.value);
    };

    const onUsername = (e) => {
        setUsername(e.currentTarget.value);
    };

    const onUserpasswd = (e) => {
        setUserpasswd(e.currentTarget.value);
    };

    const onUseremail = (e) => {
        setUseremail(e.currentTarget.value);
    };

    const onAddr1 = (e) => {
        setAddr1(e.currentTarget.value);
    };
    const onAddr2 = (e) => {
        setAddr2(e.currentTarget.value);
    };
    const onAddr3 = (e) => {
        setAddr3(e.currentTarget.value);
    };

    const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        setAddr1(data.zonecode);
        setAddr2(fullAddress);
        //setIsPostOpen(false);
    };
    var formdata = {
        addr1: addr1,
        addr2: addr2,
        addr3: addr3,
        userid: userid,
        username: username,
        userpasswd: userpasswd,
        useremail: useremail,
    };

    let formElem = async (e) => {
        e.preventDefault();

        let response = await fetch('http://localhost:8080/api/users/new', {
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify(formdata)
        });
        let result = await response.json();
        console.log(result);        
    }   

        return (
            <div className="page-content">
                <section className="modal">
                    <div className="box">
                        <span className="alert_text" id="alert_text"></span>
                    </div>
                    <div className="alert-btn" id="alert-btn">
                        <Button className="btn">확인</Button>
                    </div>
                </section>
                <div className="form-v6-content">
                    <div className="form-left">

                    </div>
                    <Form className="form-detail" onSubmit={formElem} id="formElem">
                        <h2>회원가입</h2>
                        <div className="form-row">
                            <input type="text" onChange={onUserid} value={userid} name="userid" id="userid" className="input-text" placeholder="아이디를 입력해주세요" />
                        </div>

                        <div className="form-row">
                            <input type="text" onChange={onUsername} value={username} name="username" id="username" className="input-text" placeholder="이름을 입력해주세요" />
                        </div>
                        <div className="form-row">
                            <input type="password" onChange={onUserpasswd} value={userpasswd} name="userpasswd" id="userpasswd" className="input-text"
                                placeholder="비밀번호를 입력해주세요" />
                        </div>
                        <div className="form-row">
                            <input type="password" name="userpasswdchk" id="userpasswdchk" className="input-text"
                                placeholder="비밀번호를 한번 더 입력해주세요" />
                        </div>
                        <div className="form-row">
                            <input type="text" onChange={onUseremail} value={useremail} name="useremail" id="useremail" className="input-text" placeholder="이메일을 입력해주세요" />
                        </div>

                        <div className="form-row">
                            <input className="form-control postsearch" placeholder="우편번호"
                                name="addr1" id="addr1" type="text" disabled onChange={onAddr1} value={addr1} />
                            {/* <button type="button" className="btn btn-success postsearch" id="postbtn" >
                                우편번호 찾기</button> */}
                            <Button variant="danger" onClick={handleShow} className="postsearch">우편번호 찾기</Button>
                            <Modal
                                show={show}
                                onComplete={handleComplete}
                                keyboard={false}
                            >
                                <Modal.Title>주소를 입력해주세요</Modal.Title>
                                <Modal.Body>
                                    <DaumPostcode onComplete={handleComplete} />
                                    <input className="form-control postsearch" placeholder="상세주소" name="addr3" id="addr3"
                                        type="text" onChange={onAddr3} value={addr3} />
                                    <Button variant="danger" onClick={handleClose}>
                                        입력완료
                                    </Button>

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        닫기
                                    </Button>

                                </Modal.Footer>
                            </Modal>

                        </div>

                        <div className="form-row">
                            <input className="form-control postsearch" placeholder="도로명 주소" name="addr2" id="addr2"
                                type="text" disabled onChange={onAddr2} value={addr2} />
                        </div>
                        <div className="form-row">
                            <input className="form-control postsearch" placeholder="상세주소" name="addr3" id="addr3"
                                type="text" onChange={onAddr3} value={addr3} />
                        </div>
                        <div className="form-row-last">
                            <Button variant="danger" type="submit" className="input-text" id="submit">가입하기</Button>
                        </div>

                    </Form>
                </div>
            </div>

        )
    }
    export default Join