import React, { createRef, useEffect, useState } from 'react'
import $ from 'jquery';
import './products.css'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';


const ProductUpload = () => {
    const [inputs, setInputs] = useState({
        pname: '',
        psubtitle: '',
        pmanu: '',
        pprice: '',
        pquantity: '',
        pcategory: '',
        pdetails: '',
        pimg1: '',
        pimg2: '',

    });
    const { pname, psubtitle, pmanu, pprice, pcategory, pimg1, pimg2, pquantity } = inputs;
    const editRef = createRef();
    const onEditorTextHandler = () => {
        console.log(editRef.current.getInstance().getMarkdown());
        setInputs({
            pdetails: editRef.current.getInstance().getMarkdown(),
        });
    }

    const onChange = (event) => {
        const { value, name } = event.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }
    const onReset = (event) => {
        setInputs({
            pname: '',
            psubtitle: '',
            pmanu: '',
            pprice: '',
            pquantity: '',
            pcategory: '',
            pdetails: '',
            pimg1: '',
            pimg2: '',
        })
    }

    const onFileHandler = () => {

        let file = pimg1.split('/').pop().split('\\').pop();
        setInputs({
            pimg1: file,
        });
        console.log(pimg1 + file)
    }
    const inputHandler = (e) => {
        e.preventDefault(e);
        const api = 'http://localhost:8080/api/products';
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
        axios.post(api, inputs, config)
        .then(res => console.log(res))
            .catch(err => console.log('Error', err))

    }
    $(document).ready(function () {
        var fileTarget = $('#pimg');

        fileTarget.on('change', function () {
            if (window.FileReader) {
                var filename = $(this)[0].files[0].name;
            } else {
                let filename = $(this).val().split('/').pop().split('\\').pop();
            }

            $(this).siblings('.file_upload').val(filename);
        });
    });





    return (
        <div className="ProductUpload">
            <form onSubmit={inputHandler} encType="multipart/form-data">
                <div className="pcontainer">
                    <h1>상품등록페이지</h1>
                    <div className="col_input">
                        <span className="input_text">
                            상품명
                        </span>

                        <input type="text" name="pname" id="pname" className="pname" onChange={onChange} />

                    </div>
                    <div className="col_input">
                        <span className="input_text">
                            제조사
                        </span>

                        <input type="text" name="pmanu" id="pmanu" className="pmanu" onChange={onChange} />

                    </div>
                    
                <div className="col_input">
                        <span className="input_text">
                            가격
                        </span>

                        <input type="text" name="pprice" id="pprice" className="pprice" onChange={onChange} />

                    </div>
                    <div className="col_input">
                        <span className="input_text">
                            현재수량
                        </span>
                        <input type="text" name="pquantity" id="pquantity" className="pquatity" onChange={onChange} />
                    </div>
                    <div className="col_input">
                        <label htmlFor="pcategory">
                            <span className="input_text">
                                종류
                            </span>
                        </label>

                        <select name="pcategory" id="pcategory" onChange={onChange} >
                            <option disabled >선택해주세요</option>
                            <option>반려견</option>
                            <option>반려묘</option>
                            <option>기타동물</option>
                            <option>기타</option>
                        </select>
                    </div>
                    
                <div className="col_input">
                        <span className="input_text">
                            현재수량
                        </span>
                    <input type="text" name="p_manu" id="p_manu" className="p_manu" />
                </div>

                <div className="col_input">
                        <span className="input_text">
                            서브타이틀
                        </span>

                        <input type="text" name="psubtitle" id="psubtitle" className="psubtitle" onChange={onChange} />
                    </div>
                    <div className="col_input editor">
                        <span className="input_text">
                            상세설명
                        </span>

                        <Editor
                            height="400px"
                            initialEditType="markdown"
                            ref={editRef}
                            onChange={onEditorTextHandler} />
                    </div>

                    <div className="col_input">
                        <span className="input_text">
                            상품이미지
                        </span>
                        <input type="text" name="pimg2" className="file_upload" id="file_upload" disabled="disabled" placeholder="가능하면 png 파일로 해주세요" onChange={onChange} />
                        <input type="file" name="pimg1" id="pimg" className="pimg" onChange={onChange}  />
                        <label htmlFor="pimg" className="fileadd_btn">파일 추가</label>

                    </div>

                    <div className="col_input">
                        <button type="submit" className="submitBtn">전송</button>
                        <button type="button" className="submitBtn" onClick={onReset}>초기화</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default ProductUpload
