

import im from '../assets/images/wp-content/uploads/2023/08/thumbnail.png'
import im1 from '../assets/images/wp-content/uploads/2023/08/laptop.png'
import im2 from '../assets/images/wp-content/uploads/2023/08/imagesservice/AI.jpg'
import im3 from '../assets/images/wp-content/uploads/2023/08/imagesservice/BLOCKCHAIN.jpg'
import im4 from '../assets/images/wp-content/uploads/2023/08/imagesservice/IOT.jpg'
import im5 from '../assets/images/wp-content/uploads/2023/08/imagesservice/OUTSOURCING .jpg'
import im7 from '../assets/images/wp-content/uploads/2023/08/imagesservice/consulting.jpg'
import im8 from '../assets/images/wp-content/uploads/2023/08/imagesservice/dataanayltics.jpg'
import im10 from '../assets/images/wp-content/uploads/2023/08/imagesservice/itsolutioning.jpg'
import im11 from '../assets/images/wp-content/uploads/2023/08/imagesservice/1) websites.jpg'
import im12 from '../assets/images/wp-content/uploads/2023/08/imagesservice/2) application new.jpg'
import projmgmt from '../assets/images/wp-content/uploads/2023/08/imagesservice/management.jpg'
import resaug from '../assets/images/wp-content/uploads/2023/08/imagesservice/augmentation.jpg'

import im13 from '../assets/images/wp-content/uploads/2023/08/imagesservice/3 )digital marketing.jpg'
const services = [
    { title: 'Web Development' },
    { title: 'Mobile Application' },
    { title: 'Digital Marketing' },
    { title: 'IT Consulting' },
    { title: 'IT Solutions' },
    { title: 'Project Management' },
    { title: 'Data Analytics' },
    { title: 'Resource Augmentation' },
    { title: 'Blockchain' },
    { title: 'Artificial Intelligence (AI)' },
    { title: 'Outsourcing Engagement' },
    { title: 'IoT (Internet of Things)' },
];
const data = [
    { inmg: im11, title: 'Web Development',path: 'WebDevelopment', info: "Website and web application development, upkeep, and enhancement are all included in web development services. This includes developing the front-end and back-end components, creating the user interface and graphic components, and publishing the website to the internet. In order to guarantee that websites run successfully, these services also include hosting, security, and performance optimization. We create simple websites as well as intricate e-commerce platforms and web-based applications in collaboration with clients to satisfy their demands." },
    { inmg: im12, title: 'Mobile Application',path: 'MobileApplication', info: "The process of developing software applications for mobile devices, such as smartphones and tablets, is known as mobile application development. It includes testing, deployment, coding, and user interface design. Programming languages like Java, Swift, or Kotlin are used by developers, based on the platform they are targeting (iOS or Android). Testing and quality control are crucial to ensuring the software runs smoothly. To safeguard user data and privacy, security methods including data encryption and authentication are essential. Apps are usually released through app stores like Google Play or Apple's App Store after they have been developed" },
    { inmg: im13, title: 'Digital Marketing',path: 'DigitalMarketing', info: "Social media marketing uses platforms like Facebook, Instagram, and Twitter to buildbrand awareness and interact with customers. Email marketing involves sending targeted messages to subscribers to nurture leads and drive conversions. Pay-per-click (PPC)       advertising allows businesses to pay for their ads to appear at the top of search engine results or on social media.Digital marketing services provide businesses with the tools to reach a broaderaudience, build brand recognition, and measure the effectiveness of their onlinemarketing efforts" },
    { inmg: im7, title: 'IT Consulting',path: 'ITConsulting',  info: "Information technology consulting, or IT consulting for short, is the practice of offering businesses and individuals professional consulting and direction on a range of topics related to technology and information systems. IT consultants provide their knowledge in fields such as software development, cybersecurity, infrastructure planning, technology strategy, and IT project management.Assessing an organization's current IT infrastructure, identifying areas for improvement, suggesting solutions, and assisting with their implementation are important components of IT consulting." },
    { inmg: im10, title: 'IT Solutions',path: 'ITSolutions',  info: "IT solutions include the thoughtful planning, development, and use of technological solutions to match the unique requirements of an enterprise. It includes system integration to optimize operations, cybersecurity measures to safeguard digital assets, cloud services for scalable and affordable solutions, custom software development for customized applications, system integration to evaluate current infrastructure and plan future strategies, and continuous support for seamless IT management." },
    { inmg: projmgmt, title: 'Project Management',path: 'ProjectManagement', info: "Project management is the discipline of planning, executing, and controlling projects efficiently. It often involves agile methodologies for adaptability, quality assurance to ensure deliverables meet predefined standards, and risk management to identify and mitigate potential project challenges, all aimed at ensuring project succes" },
    { inmg: im8, title: 'Data Analytics',path: 'DataAnalytics',  info: "Data analytics is the process of analyzing and investigating data to draw insightful conclusions. This comprises data warehousing for effective data storage, data governance to uphold data quality and compliance, predictive analytics to anticipate future outcomes, big data solutions to handle massive and complex datasets, and data analytics for identifying patterns and trends." },
    { inmg: resaug, title: 'Resource Augmentation',path: 'ResourceAugmentation',  info: "Prioritizing the needs and satisfaction of our customers, with prompt attention to their needs, providing practical and helpful responses, and going the extra mile to exceed their expectations." },
    { inmg: im3, title: 'Blockchain',path: 'Blockchain',  info: "Blockchain technology enables safe and transparent transactions by acting as a decentralized, unchangeable ledger. Services in this area include the creation and management of unique tokens and cryptocurrencies, the development of blockchain-based applications for a range of uses, and professional advice on implementing blockchain to improve trust and transparency in sectors such as finance, supply chains, and healthcare" },
    { inmg: im2, title: 'Artificial Intelligence (AI)',path: 'ArtificialIntelligence(AI)',  info: "The creation of AI-powered applications with task automation and prediction capabilities is included in AI services. This includes computer vision for image analysis, natural language processing (NLP) for language understanding and processing, machine learning to train models for particular tasks, and AI consultancy to assist businesses in utilizing AI for productivity and data-driven decision-making." },
    { inmg: im5, title: 'Outsourcing Engagement',path: 'OutsourcingEngagement',  info: "There are several ways that organizations can get specialized IT resources through outsourcing engagement. While offshore development uses expertise from abroad to create software, IT outsourcing entails assigning certain IT services to outside vendors. End-to-end IT infrastructure management is offered via managed services, while staff augmentation ensures flexible and affordable solutions by providing competent temporary workers in response to project requirements" },
    { inmg: im4, title: 'IoT (Internet of Things)',path: 'IoT(InternetofThings)',  info: "IoT denotes the internet-based networking of physical objects and sensors that allows data to be collected and shared for a range of uses. This includes creating Internet of Things (IoT) solutions that link and interact with smart devices, fusing hardware and sensors, deriving insights from IoT-generated data analysis, putting security measures in place to safeguard IoT ecosystems, and providing advice on how to define IoT strategies and use IoT technology across sectors for improved productivity and data-driven decision-making." },
];
export {data,services}