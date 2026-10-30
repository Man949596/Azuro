const asText = (text) => ({ text, highlight: false })
const asHighlight = (text) => ({ text, highlight: true })

export const seoFaqColumns = [
  [
    {
      question: 'What is the difference between SEO, AEO and GEO?',
      answer: [
        asText('SEO stands for Search Engine Optimization and refers to traditional rankings on Google. AEO stands for Answer Engine Optimization and refers to getting your brand mentioned in AI platforms - also known as LLMs (Large Language Models). GEO stands for Generative Engine Optimization and is the same thing as AEO. People also call it AI SEO or AI Search. However, SEO is still a good all-encompassing term for both traditional search rankings and AI visibility.'),
      ],
    },
    {
      question: 'Do your SEO experts in Canada also work for brands in the US and globally?',
      answer: [
        asText('Yep! Our Canadian SEO experts are based in '),
        asHighlight('Ottawa, Toronto and Calgary'),
        asText(', but we work with many clients in the USA and across the globe.'),
      ],
    },
    {
      question: 'Do your SEO services also include website design and development?',
      answer: [
        asText('Absolutely. Our clients usually get a better return on investment when we’re handling both the SEO work and the web design/development work. It’s a more cohesive process and allows us to ensure that your website visitors are actually converting into leads and sales. We also offer '),
        asHighlight('full-service digital marketing'),
        asText(' (including paid search and social).'),
      ],
    },
    {
      question: 'Would you be allowed to do SEO for our competitors too?',
      answer: [
        asText('No, we see that as a conflict of interest. Our policy is to only have one SEO client per market. We won’t work with any of your direct competitors.'),
      ],
    },
  ],
  [
    {
      question: 'What are the main factors that improve SEO and AI Search?',
      answer: [
        asText('It all starts with keyword research to identify the best keywords based on search volume, competition and user intent. Then there’s on-page SEO: putting keywords and similar variations/related topics in the right places and having a strong website architecture, word count and technical infrastructure. Then there’s off-page SEO: getting backlinks and brand mentions on other sites. The process for AI search is largely the same as traditional SEO, but there are some differences.'),
      ],
    },
    {
      question: 'What industries do you have the most SEO experience in?',
      answer: [
        asText('We have broad industry experience, but we have a particularly deep skillset doing SEO for physicians and '),
        asHighlight('contractors'),
        asText('. We consistently get top-tier results on Google and AI platforms for medical practices and the trades.'),
      ],
    },
    {
      question: 'Is your main specialty local SEO or national / international SEO?',
      answer: [
        asText('Local SEO is our top specialty - enabling local businesses to get discovered everywhere: the map pack, traditional search results and AI platforms like Google’s AI Overviews, AI Mode, ChatGPT and more. But we also have plenty of experience in national / international SEO.'),
      ],
    },
  ],
]