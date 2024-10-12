"use client"
import React, { useState } from 'react'

const InquiryForm = () => {
  const [ message, setMessage ] = useState<string>()
  return (
    <form>

      <div>
        <label htmlFor="inqury-type">구분</label>
        <input type="radio" name="invest" id="inqury-type" />
        <input type="radio" name="purchase" id="inqury-type" />
        <input type="radio" name="collabo" id="inqury-type" />
      </div>
      
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
    </form>
  )
}

export default InquiryForm