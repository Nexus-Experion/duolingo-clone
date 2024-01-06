"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const expandToAnswers = (event) => {
    var _a;
    const target = event.target;
    if (target && !target.classList.contains("answer")) {
        target.classList.toggle("bold");
        const imgElement = target.querySelector("img");
        imgElement === null || imgElement === void 0 ? void 0 : imgElement.classList.toggle("rotate");
        const answerElement = (_a = target.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector(".answer");
        answerElement === null || answerElement === void 0 ? void 0 : answerElement.classList.toggle("hidden");
    }
};
function fetchDataAndShow() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        let faqData;
        try {
            let response = yield fetch("https://duolingo-serverless-endpoint.vercel.app/api/faq");
            faqData = yield response.json();
        }
        catch (error) {
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
            (_a = document.querySelector(".faq-container")) === null || _a === void 0 ? void 0 : _a.append(containerDiv);
        }
    });
}
fetchDataAndShow();
