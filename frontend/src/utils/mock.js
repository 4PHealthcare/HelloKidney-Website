// Mock data for HelloKidney.ai

export const mockContactSubmission = (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Mock contact form submission:', formData);
      resolve({
        success: true,
        message: 'Thank you for your interest! We will contact you shortly.'
      });
    }, 1000);
  });
};

export const faqData = [
  {
    id: 1,
    question: "What is HelloKidney.ai?",
    answer: "HelloKidney.ai is a digital platform that supports early detection and management of chronic kidney disease (CKD) using urine Albumin‑to‑Creatinine Ratio (UACR) and estimated GFR (eGFR). It helps healthcare teams run structured kidney screening in clinics, camps, and community programs."
  },
  {
    id: 2,
    question: "Is HelloKidney a diagnostic tool?",
    answer: "No. HelloKidney.ai does not provide a standalone medical diagnosis. It supports screening and clinical decision‑making. All test results and risk classifications must be reviewed and interpreted by qualified healthcare professionals according to local guidelines."
  },
  {
    id: 3,
    question: "Who can use HelloKidney.ai?",
    answer: "HelloKidney.ai is designed for doctors, nurses, screening teams, hospitals, clinics, and public health programs that run CKD or NCD screening. It is not a direct‑to‑consumer app for self‑diagnosis."
  },
  {
    id: 4,
    question: "How does the urine ACR test work with HelloKidney?",
    answer: "HelloKidney.ai guides healthcare teams through a smartphone‑based urine ACR workflow where compatible test kits/devices are available. The app captures the test result, combines it with creatinine and eGFR values, and generates a risk‑stratified kidney health view."
  },
  {
    id: 5,
    question: "How is patient data protected?",
    answer: "Patient data is stored and transmitted using encryption and role‑based access controls. Deployments are designed to align with applicable health data protection laws in each country (for example, India and Kenya), and de‑identified data may be used for analytics where permitted."
  },
  {
    id: 6,
    question: "Can HelloKidney integrate with our existing systems?",
    answer: "HelloKidney.ai is built to be integration‑ready and can connect to existing health information systems or EMRs where technical standards, approvals, and project scope allow. Integration details are defined during implementation."
  },
  {
    id: 7,
    question: "In which countries is HelloKidney available?",
    answer: "HelloKidney.ai is initially focused on deployments in India and Kenya, with the ability to expand to other regions in partnership with local providers and programs."
  },
  {
    id: 8,
    question: "How can we start a pilot?",
    answer: "Use the 'Request a Demo' or 'Contact' form to share your organisation details. The team will discuss your use case, screening workflow, and regulatory requirements, and then propose a pilot plan."
  }
];

export const howItWorksSteps = [
  {
    id: 1,
    title: "Register the patient",
    description: "Capture basic details and risk profile (e.g., diabetes, blood pressure, age)."
  },
  {
    id: 2,
    title: "Perform the tests",
    description: "Conduct a urine ACR test (smartphone‑guided where compatible kits/devices are available) and enter creatinine to calculate eGFR."
  },
  {
    id: 3,
    title: "View kidney risk category",
    description: "See colour‑coded risk classification and guidance for next clinical steps based on UACR and eGFR."
  },
  {
    id: 4,
    title: "Track follow‑up",
    description: "Monitor kidney health over time with visit history, risk changes, and follow‑up reminders."
  }
];
