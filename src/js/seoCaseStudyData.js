import googleResultsImage from '../assets/images/seo img.webp'
import chatGptResultsImage from '../assets/images/seo img1.webp'
import googleResultsImages from '../assets/images/seo img2.webp'
import chatGptResultsImages from '../assets/images/seo img3.webp'
import   googleResultsImages1 from '../assets/images/seo img4.webp'
import   claudeResultsImages from '../assets/images/seo img5.webp'
import   googleResultsImages3 from '../assets/images/seo img6.webp'
import   claudeResultsImages4 from '../assets/images/seo img7.webp'
import   googleResultsImages5 from '../assets/images/seo img6.webp'
import   claudeResultsImages6 from '../assets/images/seo img7.webp'

import { portfolioProjects } from './portfolioData.js'

const featuredSeoStudy = portfolioProjects.find(
  ({ site }) => site === 'statenislandoralsurgery.us',
)

export const seoCaseStudy = {
  ...featuredSeoStudy,
  googleResultsImage,
  chatGptResultsImage,
    googleResultsImages,
  chatGptResultsImages,
  claudeResultsImages,
      googleResultsImages1,
       claudeResultsImages4,
      googleResultsImages3,
       googleResultsImages5,
       claudeResultsImages6,
}
