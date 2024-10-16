import InqueryForm from "./InquiryForm"
import styles from './Inquiry.module.css';

const TextGuide = () => {

  return(
    
    <div
      className={styles.leftContainer}
    >
      <h2>문의 사항 정보</h2>
      <p>
        저희가 연락할 수 있게 정보를 기입해 주세요.
      </p>
    </div>
    
  )
}


const InquiyPage = () =>{

  return(
    <main
      className={styles.inquiryMain}
    >
    <h1>Context</h1>

    <article
      className={styles.article}
    >
      <TextGuide />
      <InqueryForm />
    </article>
    </main>
  )
}

export default InquiyPage