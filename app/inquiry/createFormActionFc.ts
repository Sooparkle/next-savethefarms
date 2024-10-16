'use server'

import { z } from 'zod'

// Zod schema for validation
const schema = z.object({
  classification: z.enum(['투자 문의', '대량 구매 문의', '협업 문의']),
  name: z.string().min(1, { message: "Name is required" }),
  company: z.string().min(1, { message : "회사 이름을 입력해 주세요."}),
  phone: z.string().regex(/^(\+?\d{1,4}[\s-]?)?\d{3,4}[\s-]?\d{4}$/, { message: "Invalid phone number format" }),
  email: z.string().email({ message: "Invalid email format" }),
  message: z.string().min(1, { message: "Message is required" })
});

// Function to handle form submission and validation
const createFormActionFc = async (formData: FormData) => {
  try {
    // Convert FormData entries to an object
    const formObject = Object.fromEntries(formData.entries());

    // Validate the formObject with the Zod schema
    const validatedData = schema.parse(formObject);

    // If validation passes, handle success
    return { message: "Form submitted successfully", data: validatedData };

  } catch (e) {
    if (e instanceof z.ZodError) {
      // Log and return validation errors
      console.error("Validation errors:", e.errors);
      return { message: "Validation failed", errors: e.errors };
    }

    // Return generic error if something else goes wrong
    return { message: "Form submission failed", error: e };
  }
}

export default createFormActionFc;
