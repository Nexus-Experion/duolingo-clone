
const expandToAnswers = (event: Event): void => {
    const target = event.target as HTMLElement | null;

    if (target && !target.classList.contains("answer")) {
        target.classList.toggle("bold");

        const imgElement = target.querySelector("img") as HTMLElement | null;
        imgElement?.classList.toggle("rotate");

        const answerElement = target.parentNode?.querySelector(".answer") as HTMLElement | null;
        answerElement?.classList.toggle("hidden");
    }
};


interface Question {
    question: string;
    answer: string;
}

interface FaqData {
    [category: string]: {
        questions: Question[];
    };
}

async function fetchDataAndShow(): Promise<void> {
    let faqData: FaqData;

    try {
        let response = await fetch("https://duolingo-serverless-endpoint.vercel.app/api/faq");
        faqData = await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return;
    }

    for (const category in faqData) {
        let containerDiv = document.createElement("div");
        containerDiv.classList.add("faq-group");
        containerDiv.innerHTML = `
            <div class="item heading">
                <div class="flex">${category}</div>
            </div>`;

        const questions = faqData[category].questions;

        for (const question of questions) {
            let qaDiv = `
                <div class="item" onclick="expandToAnswers(event)">
                    <div class="flex">
                        ${question.question}
                        <img src="../assets/svg/down-arrow-faq.svg" alt="down arrow" />
                    </div>
                    <div class="answer hidden">
                        ${question.answer}
                    </div>
                </div>`;
            containerDiv.insertAdjacentHTML("beforeend", qaDiv);
        }

        document.querySelector(".faq-container")?.append(containerDiv);
    }
}

fetchDataAndShow();

