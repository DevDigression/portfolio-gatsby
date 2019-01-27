import ApplyYourselfHeader from '../../../images/ApplyYourselfHeader.jpg'
import ApplyYourselfStats from '../../../images/ApplyYourselfStats.png'
import BeThereHeader from '../../../images/BeThereHeader.png'
import BeThereMap from '../../../images/BeThereMap.png'
import StudyficientHeader from '../../../images/StudyficientHeader.png'
import StudyficientStudyspace from '../../../images/StudyficientStudypace.png'

export const ProjectData = [
  {
    title: `Apply Yourself`,
    technologies: ['React + Redux', 'Node + Express', 'MongoDB + Mongoose'],
    description1: `Finding a job can be its own job! As coders and job seekers, we know all too well the laborious task of searching job postings, editing resumes and cover letters and trying to remember which company was sent which copy and what interview was scheduled when!`,
    description2: `Apply Yourself takes care of the drudgery of monitoring job prospects from beginning to end by keeping all aspects collected and organized, with a particular emphasis on the elements related to coding jobs!`,
    liveLink: `https://apply-yourself.netlify.com/`,
    codeLink: `https://github.com/DevDigression/apply-yourself-client`,
    headerImage: ApplyYourselfHeader,
    appImage: ApplyYourselfStats,
    mobileImage: `http://devdigression.com/wp-content/uploads/2018/03/Apply-Yourself-Intro.jpg`,
  },
  {
    title: `Studyficient`,
    technologies: ['Node + Express', 'MongoDB + Mongoose', 'Bootstrap'],
    description1: `Distractions are everywhere! Studyficient is an app that helps you to eliminate them and maintain focus by allowing you to keep all of your study materials in one place, and in the form that is most helpful to you!`,
    description2: `Studyficient takes into account different learning styles by allowing you to use written notes combined with videos for lecture material or other content you find helpful. Just as importantly, Studyficient keeps you organized by allowing you to categorize and arrange your notes and videos by subject.`,
    liveLink: `https://studyficient.herokuapp.com/`,
    codeLink: `https://github.com/DevDigression/Studyficient`,
    headerImage: StudyficientHeader,
    appImage: StudyficientStudyspace,
    mobileImage: `http://devdigression.com/wp-content/uploads/2017/12/Studyficient-Header.jpg`,
  },
  {
    title: `Be <em>There</em> - For Your Career`,
    technologies: ['D3.js', 'JavaScript + jQuery', 'HTML5', 'CSS3'],
    description1: `Planning to enter a new career field? Looking to change things up a bit in your current field? This app will help you do either (or both)! Be There allows you to search for a career field and receive data about the best locations for that field based on the number of jobs available – including the states and cities with the most jobs.`,
    description2: `Additionally, you can enter your current job title in order to find related jobs, along with related statistics such as the number of jobs available and median salary. Links are provided for each job title in order to browse the job listings over at Glassdoor.`,
    liveLink: `https://devdigression.github.io/Be-There/`,
    codeLink: `https://github.com/DevDigression/Be-There`,
    headerImage: BeThereHeader,
    appImage: BeThereMap,
    mobileImage: `http://devdigression.com/wp-content/uploads/2017/11/Featured-Image-Be-There.png`,
  },
]
