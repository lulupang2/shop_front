import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
const Menu = () => {
    const [창열기, 창열기변경] = useState(false);
    const [드롭다운리스트, 드롭다운리스트변경] = useState(null);
    const [아이콘들, 아이콘들변경] = useState(["person", "shopping_bag", "logout"])
    const 드롭다운 = () => 창열기변경(!창열기);
    
    const 드롭다운클릭 = value => () => {
        드롭다운리스트변경(value);
        창열기변경(false);
        console.log(드롭다운리스트)
}

    const 이벤트들 = ["진행중인 이벤트", "종료된 이벤트"];
    //const 상품들 = ["신상품", "할인상품", "전체상품"];
    const 제목들 = ["HOME" , "EVENT" , "SHOP" , "CUSTOMER"]
    
    return (
        <div className="Menu">
            <nav className="menubar" role="navigation" aria-label="main navigation">
                <div className="nav_logo">
                    <div className="logo_icon">
                        <span className="material-icons">pets</span>
                    </div>
                    <div className="logo_name">
                        <span className="logo_name_text">
                        {localStorage.getItem.authenticatedUser}.
                        </span>
                    </div>
                </div>
                <div className="nav_menus">
                    <ul>
                        <li><Link to="/">{제목들[0]}</Link></li>
                        <li><span className="dropheader" onClick={드롭다운}>{제목들[1]}{창열기 && ( 
                            <div className="dropdown_container">
                                <div className="dropdown_list">
                                    {이벤트들.map(option => (
                                        <div className="dropdown_item" onClick={드롭다운클릭(option)} key={Math.random()}>
                                            {option}
                                        </div>
                                    ))}
                                    </div>
                            </div>
                            )}</span>
                            
                        </li>
                        <li><span className="dropheader"><Link to="/products">{제목들[2]}</Link></span></li>
                        <li><span className="dropheader"><Link to="/upload">{제목들[3]}</Link></span></li>
                    </ul>
               </div>
                <div className="nav_icons">
                    {/* {
                    아이콘들.map((a,i)=>{
                        return(
                            <span className="material-icons" key={a}><Link to="/users">{아이콘들[i]}</Link></span>)
                    })
                } */}
                <span className="material-icons" ><Link to="/login">{아이콘들[0]}</Link></span>
                <span className="material-icons" ><Link to="/users">{아이콘들[0]}</Link></span>
                <span className="material-icons" ><Link to="/users">{아이콘들[1]}</Link></span>
                <span className="material-icons" ><Link to="/join">{아이콘들[2]}</Link></span>
                </div>
            </nav>

        </div>
   )
}

export default Menu

