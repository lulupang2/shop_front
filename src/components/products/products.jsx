import './products.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [목록, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/products`)
            .then(({ data }) => setData(data))
            .catch((err) => { });
    }, []);
    const productList = 목록.map((item) => (
        <div className="card_wrap">
            <div className="card_title">{item.p_name}</div>
            <div className="card_img"><img src="products/img/{item.p_img1}" alt="alt를 넣어줘야 워닝이 안뜸"></img></div>
            <div className="card_price">{item.p_price}\</div>
        </div>
    ));
    return (
        <div className="Products">
            <div className="긴줄">
                베스트 상품 한개나 고양이 사진쓰고 좋은거 맥이라고 쓰면 될듯
            </div>
            <div className="products_list_wrap">
            {productList}
            </div>
            
            카드형식<br />
                제품이미지<br />
                제품명<br />
                대충설명<br />
                가격<br />
                장바구니버튼 바로구매버튼<br />
                최대 4 최소 2 반응형으로<br />

        </div>
    )
}

export default Products