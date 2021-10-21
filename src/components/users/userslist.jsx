import axios from 'axios';
import React, { useEffect, useState } from 'react'
const Users = () => {
    const [회원목록, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8090/list`)
            .then(({ data }) => setData(data))
            .catch((err) => { });
    }, []);

    const userList = 회원목록.map((user) => (
        <tr key={user.id}>
            <td >{user.id}</td>
            <td >{user.username}</td>
            <td >{user.useremail}</td>
            <td >{user.password}</td>
            <td >{user.addr1}</td>
            <td >{user.addr2}</td>
            <td >{user.addr3}</td>
            <td >{user.createdate}</td>
        </tr>
    ));

    return (
        <div>
            <h1>회원목록</h1>

            <div>
                <table className="table table-dark table-striped table-hover">

                    <thead>
                        <tr>
                            <th scope="col">유저번호</th>
                            <th scope="col">아이디</th>
                            <th scope="col">이메일</th>
                            <th scope="col">비밀번호</th>
                            <th scope="col">우편번호</th>
                            <th scope="col">주소</th>
                            <th scope="col">상세주소</th>
                            <th scope="col">가입날짜</th>

                        </tr>
                    </thead>
                    <tbody>
                        {userList}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
export default Users