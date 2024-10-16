"use client"
import React, { useState, useRef } from 'react';
import styles from './Inquiry.module.css';
import { useFormState, useFormStatus } from 'react-dom';
import createFormActionFc from './createFormActionFc';
import InputDesignPattern from '@/app/components/InputDesignPattern';


type Classification<T extends string> = {
  type : readonly T[];
}

const inquiryTypes = [
  {
    ko : '투자 문의',
    en : "invest"
  },
  {
    ko :'대량 구매 문의',
    en : 'purchase'
  },
  {
    ko : '협업 문의',
    en : 'collbo'
  }
]

const initialState = <div>dddd</div>

const SbumitButton = () =>{
  const {pending} = useFormStatus();

  return(
    <button
      type='submit'
      aria-disabled={pending}
      disabled={pending}
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
              <p
                key={index}
              >
                <input 
                  type="radio" 
                  name='classification'
                  id={item.en}
                  value={item.ko}
                  onChange={handleClassification}
                  checked={selectedClassification === item.ko}
                />
                <label htmlFor={item.en} >
                  {item.ko}
                </label>

              </p>
            ))
          }

        </div>
      </fieldset>

      <InputDesignPattern 
        text="이름"
        inputType="text"
        inputId="name"
        placeholder="이름을 입력해주세요."
      />
      <InputDesignPattern 
        text="회사정보"
        inputType="text"
        inputId="company"
        placeholder="회사를 입력해주세요."
      />
      <InputDesignPattern 
        text="연락처"
        inputType="phone"
        inputId="phone"
        placeholder="연락처을 입력해주세요."
      />
      <InputDesignPattern 
        text="이메일"
        inputType="email"
        inputId="email"
        placeholder="이메일을 입력해주세요."
      />
      

      <div>
        <label className='message-label' htmlFor="message">문의내용</label>
        <textarea 
          name="message" 
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={600}
          wrap='soft'
        >
        </textarea>

        <span></span>
      </div>

      <SbumitButton />
    </form>
  )
}

export default InquiryForm