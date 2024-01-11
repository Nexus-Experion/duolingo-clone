# Duolingo Clone
[![pages-build-deployment](https://github.com/Nexus-Experion/duolingo-clone/actions/workflows/pages/pages-build-deployment/badge.svg?branch=duolingo-dev)](https://github.com/Nexus-Experion/duolingo-clone/actions/workflows/pages/pages-build-deployment)

A website clone of [Duolingo](https://duolingo.com), A language learning app, done as part of ILP phase 1 in experion-technologies.
### Technologies used
- HTML5
- CSS3
- Javascript
- Typescript
- Firebase
- SCSS

### Concepts learned
- Event Propogation
- Debouncing
- Serverless Functions

### Our Serverless function  endpoints
 The base URL for our Serverless function is [https://duolingo-serverless-endpoint.vercel.app](https://duolingo-serverless-endpoint.vercel.app)
The endpoints are 
- [/api/faq](https://duolingo-serverless-endpoint.vercel.app/api/faq) 
- [/api/question](https://duolingo-serverless-endpoint.vercel.app/api/question?lang=de)
- [/api/section-details](https://duolingo-serverless-endpoint.vercel.app/api/section-details?lang=de) 
- [/api/individual-lang-page-translation](https://duolingo-serverless-endpoint.vercel.app/api/individual-lang-page-translation?lang=de) 

`last 3 endpoints need parameter 'lang' with allowed values 'ja','de','fr','es' `

### License
This project is licensed under the MIT License - see the [license.md](./license.md) file for details.

### Disclaimer
All the assets like lottie animations and question and answer JSON file data used here are taken from hours of network monitoring and manual inspection, from the original website. All the copyright for those assets goes to the respective website.