import { useState, useContext } from "react"
import { NavBarctx } from "../../store/NavBarCtx"
import { useNavigate } from "react-router-dom"
const Home = ()=>{
  return(
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.6833 5.78537C18.2927 6.14508 18.6666 6.80005 18.6666 7.5077V17.6667C18.6666 18.7713 17.7712 19.6667 16.6666 19.6667H14.1666C13.0621 19.6667 12.1666 18.7713 12.1666 17.6667V13C12.1666 11.8954 11.2712 11 10.1666 11H9.83331C8.72874 11 7.83331 11.8954 7.83331 13V17.6667C7.83331 18.7713 6.93788 19.6667 5.83331 19.6667H3.33331C2.22874 19.6667 1.33331 18.7713 1.33331 17.6667V7.5077C1.33331 6.80005 1.70726 6.14508 2.31666 5.78537L8.98333 1.85018C9.61054 1.47996 10.3894 1.47996 11.0166 1.85018L17.6833 5.78537Z" fill="#0C160E" stroke="#0C160E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
const Verifi = ()=>{
  return(
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.65167 26.8921C1.80219 26.963 1.96642 26.9999 2.13272 27C2.39679 26.9991 2.65216 26.9052 2.85431 26.7347L7.64948 22.7095C8.00241 22.4137 8.44761 22.2516 8.90744 22.2514H24.2551C24.9827 22.2506 25.6803 21.9603 26.1949 21.444C26.7094 20.9278 26.999 20.2279 27 19.4977V3.75447C26.9992 3.0242 26.7097 2.32403 26.1951 1.80765C25.6805 1.29126 24.9828 1.00082 24.2551 1H3.74495C3.01719 1.00082 2.31949 1.29126 1.80489 1.80765C1.29029 2.32403 1.00083 3.0242 1.00002 3.75447V25.8642C0.998824 26.0802 1.05964 26.292 1.17519 26.4743C1.29075 26.6566 1.45617 26.8016 1.65167 26.8921Z" stroke="#0C160E" strokeWidth="2"/>
    <path d="M12.6936 12.8054C12.6955 12.4056 12.8275 12.0173 13.0694 11.6996C13.3955 11.2784 13.7674 10.8951 14.1783 10.5568C14.549 10.2369 14.8889 9.88266 15.1934 9.49881C15.3849 9.22918 15.4842 8.90448 15.4762 8.57346C15.4808 8.37078 15.4446 8.16927 15.3698 7.98094C15.295 7.79262 15.1831 7.62135 15.0409 7.47739C14.8986 7.33343 14.7289 7.21974 14.5419 7.14308C14.3549 7.06642 14.1544 7.02836 13.9524 7.03121C13.5492 7.02727 13.1595 7.17693 12.8619 7.44995C12.5153 7.78511 12.2625 8.20578 12.1288 8.66985L10.4751 7.94579C10.6854 7.13775 11.1501 6.41942 11.7999 5.89767C12.4411 5.4139 13.2265 5.16197 14.0284 5.18284C14.6385 5.17647 15.2411 5.31688 15.7859 5.59231C16.3052 5.85399 16.7438 6.25249 17.0546 6.74514C17.3698 7.24677 17.5332 7.82938 17.5249 8.42233C17.5316 8.95635 17.3884 9.4815 17.1115 9.93761C16.7615 10.4743 16.3374 10.9585 15.852 11.3757C15.4814 11.6913 15.1327 12.0318 14.8084 12.3951C14.6224 12.6089 14.5191 12.8825 14.5172 13.1663C14.5224 13.3402 14.5482 13.5128 14.594 13.6806H12.9034C12.7716 13.4074 12.7 13.1089 12.6936 12.8054ZM13.821 18.1786C13.6279 18.1835 13.4359 18.1489 13.2566 18.0769C13.0773 18.0049 12.9146 17.8971 12.7782 17.7599C12.6394 17.6239 12.5302 17.4606 12.4573 17.2803C12.3845 17.0999 12.3495 16.9064 12.3547 16.7119C12.3502 16.516 12.3854 16.3211 12.4581 16.1393C12.5309 15.9574 12.6398 15.7923 12.7782 15.6539C12.9133 15.5144 13.0756 15.4043 13.255 15.3305C13.4344 15.2567 13.6271 15.2209 13.821 15.2252C14.016 15.221 14.2098 15.2567 14.3907 15.3302C14.5715 15.4036 14.7355 15.5132 14.8728 15.6523C15.01 15.7914 15.1176 15.957 15.189 16.1392C15.2604 16.3214 15.294 16.5163 15.2879 16.7119C15.2931 16.9064 15.2582 17.0998 15.1855 17.2801C15.1128 17.4605 15.0038 17.6238 14.8653 17.7599C14.7286 17.897 14.5655 18.0048 14.386 18.0768C14.2064 18.1488 14.0142 18.1834 13.821 18.1786Z" fill="#0C160E" stroke="#0C160E" strokeWidth="0.5"/>
    </svg>

  )
}
const Book = ()=>{
  return(
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 7.93254C11.3115 5.68318 6.28743 5.57412 2.16669 6.66016V21.4619C5.08537 20.0957 10.3438 19.6565 13 21.9365M13 7.93254V21.9365M13 7.93254C14.6885 5.68318 19.7126 5.57412 23.8334 6.66016V21.4619C20.9147 20.0957 15.6562 19.6565 13 21.9365" stroke="#0C160E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="16" y1="10.5" x2="21" y2="10.5" stroke="#0C160E"/>
      <line x1="16" y1="13.5" x2="21" y2="13.5" stroke="#0C160E"/>
      <line x1="16" y1="16.5" x2="21" y2="16.5" stroke="#0C160E"/>
      <line x1="5" y1="10.5" x2="10" y2="10.5" stroke="#0C160E"/>
      <line x1="5" y1="13.5" x2="10" y2="13.5" stroke="#0C160E"/>
      <line x1="5" y1="16.5" x2="10" y2="16.5" stroke="#0C160E"/>
    </svg>
  )
}
const Star = ()=>{
  return(
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_835_85)">
      <path d="M1 24.3155V15.9894H6.68966V24.3155H1Z" stroke="#0C160E" strokeWidth="2"/>
      <path d="M19.3104 24.3155V13.3361H25V24.3155H19.3104Z" stroke="#0C160E" strokeWidth="2"/>
      <path d="M10.1546 24.3155V9.48575H15.8465V24.3155H10.1546Z" stroke="#0C160E" strokeWidth="2"/>
      <path d="M22.2134 6.77248L22.4063 7.16388L22.6388 7.63562L23.1593 7.71133L23.5943 7.7746L23.2812 8.08001L22.9052 8.44667L22.9937 8.96432L23.0676 9.39685L22.6799 9.19289L22.2143 8.94793L21.7487 9.19289L21.361 9.39685L21.4349 8.96432L21.5234 8.44667L21.1474 8.08001L20.834 7.77433L21.2672 7.71125L21.7871 7.63556L22.0197 7.16456L22.2134 6.77248Z" stroke="#0C160E" strokeWidth="2"/>
      <path d="M13.0418 2.94532L13.2351 3.33713L13.4676 3.80869L13.9879 3.88439L14.4238 3.9478L14.1096 4.25443L13.7336 4.62135L13.8224 5.13913L13.8963 5.56962L13.508 5.36566L13.043 5.12137L12.5779 5.36566L12.1886 5.57016L12.2624 5.13868L12.3509 4.62115L11.9752 4.25443L11.6609 3.94768L12.0958 3.88438L12.616 3.80866L12.8486 3.33713L13.0418 2.94532Z" stroke="#0C160E" strokeWidth="2"/>
      <path d="M3.71067 9.35107L3.90281 9.74107L4.13518 10.2127L4.65546 10.2886L5.09172 10.3523L4.77892 10.6574L4.40293 11.0241L4.49143 11.5418L4.56542 11.9746L4.17595 11.77L3.71067 11.5256L3.24549 11.7702L2.85758 11.9741L2.93143 11.5434L3.02024 11.0252L2.64381 10.6583L2.33075 10.3532L2.76532 10.2897L3.28542 10.2138L3.51781 9.74233L3.71067 9.35107Z" stroke="#0C160E" strokeWidth="2"/>
      </g>
      <defs>
      <clipPath id="clip0_835_85">
      <rect width="26" height="26" fill="white"/>
      </clipPath>
      </defs>
    </svg>

  )
}
const Clock = ()=>{
  return(
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3333 15.1667L13 13V7.58333M13 22.75C18.3848 22.75 22.75 18.3848 22.75 13C22.75 7.61522 18.3848 3.25 13 3.25C7.61522 3.25 3.25 7.61522 3.25 13C3.25 18.3848 7.61522 22.75 13 22.75Z" stroke="#0C160E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
const Notes = ()=>{
  return(
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.75002 18.4167H13M9.75002 9.75001H16.25M9.75002 14.0833H16.25M10.8334 2.16667H15.1667M7.41669 22.75H18.5834C19.6879 22.75 20.5834 21.8546 20.5834 20.75V7.41667C20.5834 6.3121 19.6879 5.41667 18.5834 5.41667H7.41669C6.31212 5.41667 5.41669 6.3121 5.41669 7.41667V20.75C5.41669 21.8546 6.31212 22.75 7.41669 22.75Z" stroke="#0C160E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}
const Hand = ()=>{
  return (
    <svg width="44" height="26" viewBox="0 0 44 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.1818 3.79167V11.9167V4.875C14.1818 3.97754 14.8381 3.25001 15.6477 3.25001C16.4573 3.25001 17.1137 3.97754 17.1137 4.875V11.9167V8.125C17.1137 7.22754 17.77 6.5 18.5796 6.5C19.3892 6.5 20.0455 7.22754 20.0455 8.125V17.3333C20.0455 20.9232 17.4202 23.8333 14.1818 23.8333H13.0801C11.5904 23.8333 10.1566 23.2048 9.06976 22.0753L4.22386 17.0393C3.52335 16.3113 3.50551 15.085 4.18449 14.3323C4.84827 13.5965 5.92449 13.5965 6.58827 14.3323L8.3182 16.25V7.04167C8.3182 6.14421 8.97451 5.41667 9.78411 5.41667C10.5937 5.41667 11.25 6.14421 11.25 7.04167V11.9167V3.79167C11.25 2.89421 11.9063 2.16667 12.7159 2.16667C13.5255 2.16667 14.1818 2.89421 14.1818 3.79167Z" stroke="#0C160E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M29.8182 3.79167V11.9167V4.875C29.8182 3.97754 29.1619 3.25001 28.3523 3.25001C27.5427 3.25001 26.8863 3.97754 26.8863 4.875V11.9167V8.125C26.8863 7.22754 26.23 6.5 25.4204 6.5C24.6108 6.5 23.9545 7.22754 23.9545 8.125V17.3333C23.9545 20.9232 26.5798 23.8333 29.8182 23.8333H30.9199C32.4096 23.8333 33.8434 23.2048 34.9302 22.0753L39.7761 17.0393C40.4766 16.3113 40.4945 15.085 39.8155 14.3323C39.1517 13.5965 38.0755 13.5965 37.4117 14.3323L35.6818 16.25V7.04167C35.6818 6.14421 35.0255 5.41667 34.2159 5.41667C33.4063 5.41667 32.75 6.14421 32.75 7.04167V11.9167V3.79167C32.75 2.89421 32.0937 2.16667 31.2841 2.16667C30.4745 2.16667 29.8182 2.89421 29.8182 3.79167Z" stroke="#0C160E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
  
}

export default function RightNavBar() {
  const [Turn,setTurn] = useState(()=>{
    const url = window.location.hash.substring(1);
    if(url==='')
      return 1;
    if(url==='challenge')
      return 2;
    if(url==='quran')
      return 3;
    if(url==='leaderboard')
      return 4;
    if(url==='duas')
      return 7;
    return 1;
  });
  console.log(Turn);
  const {setUrl} = useContext(NavBarctx)
  const navigate = useNavigate()

  const handleTurnChange =  (num) => {
    switch(num){
      case 1:
        navigate('/')
        setUrl('')
        break;
      case 2:
        navigate('#challenge')
        setUrl('challenge')
        break;
      case 3:
        navigate('#quran')
        setUrl('quran')
        break;
      case 4:
        navigate('#leaderboard')
        setUrl('leaderboard')
        break;
      case 7:
        navigate('#duas')
        setUrl('duas')
        break;
      default:
        break;
    }
    setTurn(num)
  }
  return (
    <aside className="
      hidden sm:flex flex-col items-center 
      fixed w-fit top-1/2 -translate-y-[40%] lg:right-[2.5rem] right-[2rem]
      gap-12 px-5 py-10
     bg-[#858975] z-50 rounded-full ">
      <div onClick={()=>{handleTurnChange(1)}} className="cursor-pointer flex flex-col items-center"> <Home /> <div className="h-0 w-12 text-center">{Turn===1 && 'الرئيسية'}</div> </div>
      <div onClick={()=>{handleTurnChange(7)}} className="cursor-pointer flex flex-col items-center"> <Hand /> <div className="h-0 w-12 text-center">{Turn===7 && 'أدعية'}</div></div>
      <div onClick={()=>{handleTurnChange(2)}} className="cursor-pointer flex flex-col items-center"> <Verifi /> <div className="h-0 w-12 text-center">{Turn===2 && 'التحدي'}</div></div>
      <div onClick={()=>{handleTurnChange(3)}} className="cursor-pointer flex flex-col items-center"> <Book /> <div className="h-0 w-12 text-center">{Turn===3 && 'القرآن'}</div></div>
      <div onClick={()=>{handleTurnChange(4)}} className="cursor-pointer flex flex-col items-center"> <Star /> <div className="h-0 w-12 text-center">{Turn===4 && 'الترتيب'}</div></div>
    </aside>
  )
}
