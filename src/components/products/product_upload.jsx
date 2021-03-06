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
                    <h1>?????????????????????</h1>
                    <div className="col_input">
                        <span className="input_text">
                            ?????????
                        </span>

                        <input type="text" name="pname" id="pname" className="pname" onChange={onChange} />

                    </div>
                    <div className="col_input">
                        <span className="input_text">
                            ?????????
                        </span>

                        <input type="text" name="pmanu" id="pmanu" className="pmanu" onChange={onChange} />

                    </div>
                    
                <div className="col_input">
                        <span className="input_text">
                            ??????
                        </span>

                        <input type="text" name="pprice" id="pprice" className="pprice" onChange={onChange} />

                    </div>
                    <div className="col_input">
                        <span className="input_text">
                            ????????????
                        </span>
                        <input type="text" name="pquantity" id="pquantity" className="pquatity" onChange={onChange} />
                    </div>
                    <div className="col_input">
                        <label htmlFor="pcategory">
                            <span className="input_text">
                                ??????
                            </span>
                        </label>

                        <select name="pcategory" id="pcategory" onChange={onChange} >
                            <option disabled >??????????????????</option>
                            <option>?????????</option>
                            <option>?????????</option>
                            <option>????????????</option>
                            <option>??????</option>
                        </select>
                    </div>
                    
                <div className="col_input">
                        <span className="input_text">
                            ????????????
                        </span>
                    <input type="text" name="p_manu" id="p_manu" className="p_manu" />
                </div>

                <div className="col_input">
                        <span className="input_text">
                            ???????????????
                        </span>

                        <input type="text" name="psubtitle" id="psubtitle" className="psubtitle" onChange={onChange} />
                    </div>
                    <div className="col_input editor">
                        <span className="input_text">
                            ????????????
                        </span>

                        <Editor
                            height="400px"
                            initialEditType="markdown"
                            ref={editRef}
                            onChange={onEditorTextHandler} />
                    </div>

                    <div className="col_input">
                        <span className="input_text">
                            ???????????????
                        </span>
                        <input type="text" name="pimg2" className="file_upload" id="file_upload" disabled="disabled" placeholder="???????????? png ????????? ????????????" onChange={onChange} />
                        <input type="file" name="pimg1" id="pimg" className="pimg" onChange={onChange}  />
                        <label htmlFor="pimg" className="fileadd_btn">?????? ??????</label>

                    </div>

                    <div className="col_input">
                        <button type="submit" className="submitBtn">??????</button>
                        <button type="button" className="submitBtn" onClick={onReset}>?????????</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default ProductUpload
