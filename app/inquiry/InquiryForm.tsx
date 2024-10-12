"use client"
import React, { useState, useRef } from 'react';
import styles from './Inquiry.module.css';
import { useFormState, useFormStatus } from 'react-dom';
import createFormActionFc from './createFormActionFc';


type Classification<T extends string> = {
  type : readonly T[];
}

const inquiryTypes:string[] = [
  '투자 문의',
  '대량 구매 문의',
  '협업 문의'
]

const initialState = <div>dddd</div>

const SbumitButton = () =>{
  const {pending} = useFormStatus();

  return(
    <button
      type='submit'
      aria-disabled={pending}
      style={{
        background : pending ? "gray" : "inital"
      }}
    >
      {pending ? '전달중...' : '문의하기'}
    </button>
  )
}

const InquiryForm = () => {
  const [ message, setMessage ] = useState<string>("");
  const [ selectedClassification, setSelectedClassification ] = useState<string>();
  const formRef = useRef<HTMLFormElement>(null)

  const handleClassification = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSelectedClassification(e.target.value)

  }

  const clientAction = async (formData : FormData) => {
    const result  = await createFormActionFc(formData);
    try{
      console.log("TEST", result);
    } catch (e){
      console.log('문의하기 제줄중 에러 발생',e);

    }
  }


  return (
    <form
      action={clientAction}
      ref={formRef}
      className={styles.form}
    >

      <fieldset
        className={styles.fieldset}
      >
        <legend
          className={styles.legend}
        >
          구분
        </legend>
        <div>
          {
            inquiryTypes.map((item, index)=>(
              <p>
                <input 
                  key={index}
                  type="radio" 
                  name='classification'
                  id={item}
                  value={item}
                  onChange={handleClassification}
                  checked={selectedClassification === item}
                />
                <label htmlFor={item} >
                  {item}
                </label>

              </p>
            ))
          }

        </div>
      </fieldset>
      
      <div>
        <label htmlFor="name">이름</label>
        <input type="text" name="name" id="name"/>
      </div>

      <div>
        <label htmlFor="company">회사정보</label>
        <input type="text" name="company" id="company"/>
      </div>

      <div>
        <label htmlFor="phone">연락처</label>
        <input type="tell" name="phone" id="phone"/>
      </div>

      <div>
        <label htmlFor="email">이메일</label>
        <input type="email" name="email" id="email"/>
      </div>

      <div>
        <label htmlFor="content">문의내용</label>
        <textarea 
          name="" 
          id=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        >

        </textarea>
      </div>

      <SbumitButton />
    </form>
  )
}

export default InquiryForm