"use client"
import { faqs, type IFaq } from "@/data/faq";

function Faq(a_faq: IFaq, question_id: number) {
  const id = `answer_${question_id}`;
  const toggleAnswerDisplay = () => {
    const answer = document.getElementById(id) as HTMLButtonElement;
    if (answer.className.includes("hidden"))
      answer.className = "text-[#4f4f4f]";
    else
      answer.className = "text-[#4f4f4f] hidden";
  }

  return (
    <div className="p-6 bg-[#faf7f2]">
      <div className="flex flex-col gap-24">
        {/* Question */}
        {/* <div className="flex w-full max-w-[37.5rem] justify-between"> */}
        <p className="font-bold text-[18px] leading-[26px] text-[#333333]">{a_faq.question}</p>
        {/* <button onClick={toggleAnswerDisplay}>+</button> */}
        {/* </div> */}
        {/* Answer */}
        {/* <p className="text-[#4f4f4f] hidden" id={`answer_${question_id}`}>{a_faq.answer}</p> */}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <div className="px-[18.75rem] py-[7.5rem]">
        <div className="flex flex-col items-center gap-14 w-full">
          {/* Heading */}
          <div className="flex flex-col items-center gap-2">
            <h2 className="font-bold text-5xl leading-56px text-[#333333]">For Questions Look Here</h2>
            <p className="text-[#4f4f4f]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {faqs.map((a_faq: IFaq, index: number) => (
              <div key={index} className="p-6 bg-[#faf7f2] w-full max-w-[37.5rem]">
                <div className="flex flex-col gap-6">
                  {/* Question */}
                  <div className="flex justify-between">
                    <p className="font-bold text-[18px] leading-[26px] text-[#333333]">{a_faq.question}</p>
                    <button className="w-6 h-6 text-[24px] leading-none" id={`button_${index}`} onClick={() => {
                      const button = document.getElementById(`button_${index}`) as HTMLButtonElement;
                      const answer = document.getElementById(`answer_${index}`) as HTMLParagraphElement;
                      if (answer.className.includes("hidden")) {
                        answer.className = "text-[#4f4f4f]";
                        button.innerText = "-";
                      }
                      else {
                        answer.className = "text-[#4f4f4f] hidden";
                        button.innerText = "+";
                      }

                    }}>+</button>
                  </div>
                  {/* Answer */}
                  <p className="text-[#4f4f4f] hidden w-full" id={`answer_${index}`}>{a_faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}
