'use server'

import React from 'react'
import { z } from 'zod'

const schema = z.object({
  name : z.string().min(1),
  email : z.string().email(),
  
})

const createFormActionFc = async (formData : FormData) => {

  return (
    <></>
  )
}

export default createFormActionFc