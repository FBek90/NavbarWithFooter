import { Icon} from '../components/Footer/style'
import Home from '../views/Home'
import Apartments from '../views/Apartments'
import Chicago from '../views/Chicago'
import LosAngkes from '../views/LosAngkes'
import Miami from '../views/Miami'
import NewYork from '../views/NewYork'
import Office from '../views/Office'
import Condos from '../views/Condos'
import House from '../views/House'
import Retails from '../views/Retails'
import Villa from '../views/Villa'
import AboutUs from '../views/AboutUs'
import TermsCond from '../views/TermsCond'
import UsersGuide from '../views/UsersGuide'
import SupportCenter from '../views/SupportCenter'
import PresInfo from '../views/PresInfo'
import Privacy from '../views/Privacy'
import Contact from '../views/Contact'
import SiteMap from '../views/SiteMap'
import Cookie from '../views/Cookie'

export const contact = [
    
    {
        id:1,
        icon:<Icon.Map/>,
        info:'329 Queensberry Street, North Melbourne VIC 3051, Australia.'
    },
    {
        id:2,
        icon:<Icon.Phone/>,
        info:'707 747 7707'
    },
    { 
        id:3,  
        icon:<Icon.Email/>,
        info:'support@houzing.com'
    },
    
]
export const sns = [
    
    {
        id:1,
        path: 'https://facebook.com/',
        icon:<Icon.Facebook/>,
    },
    {
        id:2,
        path: 'https://twitter.com/',
        icon:<Icon.Twitter/>,
    },
    { 
        id:3,  
        path: 'https://instagram.com/',
        icon:<Icon.Instagram/>,
    },
     { 
        id:4, 
        path: 'https://linkedin.com/',
        icon:<Icon.Linkedin/>,
    },
]

//* Cities *//

export const discover = [
    {
        id:1,
        link:'Chicago',
        path: '/chicago',
    },
    {
        id:2,
        path: '/losAngles',
        link:'Los Angeles'
    },
    {
        id:3,
    path: '/miami',

        link:'Miami'
    },
    {
        id:4,
    path: '/newYork',

        link:'New York'
    },
]


//* Home categories *//

export const categoryList = [
    {
        id:1,
    path: '/apartments',

        link:'Apartments'
    },
    {
        id:2,
    path: '/condos',

        link:'Condos'
    },
    {
        id:3,
    path: '/house',

        link:'Houses'
    },
    {
        id:4,
    path: '/office',

        link:'Offices'
    },
    {
        id:5,
    path: '/retails',

        link:'Retail'
    },
    {
        id:6,
    path: '/villa',

        link:'Villas'
    }
]

// * Sitemap links * //

export const links = [
    {
        id:1,
    path: '/aboutUs',

        link:'About Us',
    },
    {
        id:2,
    path: '/termsCond',

        link:'Terms & Conditions',
    },
    {
        id:3,
    path: '/usersGuide',

        link:"User's Guide",
    },
    {
        id:4,
    path: '/supportCenter',

        link:'Support Center',
    },
    {
        id:5,
    path: '/presInfo',

        link:'Press Info',
    },
    {
        id:6,
    path: '/contact',

        link:'Contact Us',
    }
]

export const policy = [
    {
        id:1,
    path: '/main',

        link:'Home',
    },
    {
        id:2,
    path: '/siteMap',

        link:'Site Map',
    },
    {
        id:3,
    path: '/privacy',

        link:"Privacy Policy",
    },
    {
        id:4,
    path: '/cookie',

        link:'Cookie Policy',
    },
 
]

export const footerItems = [
  {
    id: 1,
    path: '/main',
    title: 'HOME',
    component: Home,
   
  },

  {
    id: 2,
    path: '/apartments',
    title: 'Apartments',
    component: Apartments,
   
  },
  {
    id: 3,

    path: '/chicago',
    title: 'Chicago',
    component: Chicago,
    
  },
  {
    id: 4,

    path: '/losAngles',
    title: 'LosAngles',
    component: LosAngkes,
    
  },
  {
    id: 5,

    path: '/contact',
    title: 'CONTACT',
    component: Contact,
    
  },
 
  {
    id: 7,

    path: '/miami',
    title: 'Miami',
    component: Miami,
    
  },
  {
    id: 8,

    path: '/newYork',
    title: 'NewYork',
    component: NewYork,
    
  },
  {
    id: 9,

    path: '/office',
    title: 'Office',
    component: Office,
    
  },
  {
    id: 10,

    path: '/condos',
    title: 'Condos',
    component: Condos,
    
  },
  {
    id: 11,

    path: '/house',
    title: 'House',
    component: House,
    
  },
   {
    id: 12,

    path: '/retails',
    title: 'Retails',
    component: Retails,
    
  },
  {
    id: 13,

    path: '/villa',
    title: 'Villa',
    component: Villa,
    
  },
  {
    id: 14,

    path: '/aboutUs',
    title: 'AboutUs',
    component: AboutUs,
    
  },
  {
    id: 15,

    path: '/termsCond',
    title: 'TermsCond',
    component: TermsCond,
    
  },
  {
    id: 16,

    path: '/usersGuide',
    title: 'UsersGuide',
    component: UsersGuide,
    
  },
  {
    id: 17,

    path: '/supportCenter',
    title: 'SupportCenter',
    component: SupportCenter,
    
  },
  {
    id: 18,

    path: '/presInfo',
    title: 'PresInfo',
    component: PresInfo,
    
  },
   {
    id: 19,

    path: '/privacy',
    title: 'Privacy',
    component: Privacy,
    
  },
  {
    id: 20,

    path: '/siteMap',
    title: 'SiteMap',
    component: SiteMap,
    
  },
  {
    id: 21,

    path: '/cookie',
    title: 'Cookie',
    component: Cookie,
    
  },
 {
        id:22,
        path: '/facebook.com/',
        icon:<Icon.Facebook/>,
    },
    {
        id:23,
        path: '/twitter.com/',
        icon:<Icon.Twitter/>,
    },
    { 
        id:24,  
        path: '/instagram.com/',
        icon:<Icon.Instagram/>,
    },
     { 
        id:25, 
        path: '/linkedin.com/',
        icon:<Icon.Linkedin/>,
    },
]
