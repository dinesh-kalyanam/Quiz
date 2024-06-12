import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { NavLink } from "react-router-dom";
import FormScreen from "./Screen2";
import CardContainer from "./Screen1";



const Navbar = () => {
    return (
        <div className="NavBar">
           <div  className="flex items-center px-1 Wizzy">
          <a href="/"><svg  xmlns="http://www.w3.org/2000/svg" width="124" height="20" viewBox="0 0 124 20" fill="none">
                    <path d="M124 0L123.467 0.798897C121.464 3.84757 119.742 6.54729 118.301 8.89807C116.879 11.2305 115.691 13.3792 114.736 15.3444V20H107.41V14.876C106.717 13.4986 105.903 12.0845 104.967 10.6336C104.032 9.16437 102.703 7.15335 100.981 4.60055C99.6338 2.65381 98.6045 1.12029 97.8934 0H105.753C106.315 1.12029 107.232 2.78237 108.504 4.98623C109.777 7.22681 110.647 8.80624 111.115 9.72452C111.77 8.38384 112.65 6.74013 113.754 4.79339C115.045 2.51607 115.915 0.918273 116.365 0H124Z" fill="#282120" />
                    <path d="M84.61 14.573C85.6767 14.5546 88.4277 14.4812 92.8631 14.3526C93.4245 14.3343 94.0795 14.3067 94.8281 14.27C95.5766 14.2332 96.4094 14.2057 97.3264 14.1873C97.1954 15.0505 97.1112 15.9137 97.0738 16.7769C97.0551 17.64 97.0457 18.7144 97.0457 20H75.5148V13.8568C76.5441 13.2874 77.6669 12.5895 78.8834 11.7631C80.0998 10.9183 81.6718 9.81635 83.5994 8.4573C85.396 7.17172 86.6966 6.25344 87.5014 5.70248C86.0229 5.72084 83.0567 5.82185 78.6026 6.00551C77.0681 6.07897 76.0388 6.12489 75.5148 6.14325C75.5148 4.78421 75.496 3.64555 75.4586 2.72727C75.4399 1.809 75.3838 0.899908 75.2902 0H97.0457V6.1708C96.0539 6.81359 94.2198 8.06244 91.5437 9.91735C88.5494 12.011 86.2381 13.5629 84.61 14.573Z" fill="#282120" />
                    <path d="M59.76 14.573C60.8267 14.5546 63.5777 14.4812 68.013 14.3526C68.5745 14.3343 69.2295 14.3067 69.9781 14.27C70.7266 14.2332 71.5594 14.2057 72.4764 14.1873C72.3454 15.0505 72.2612 15.9137 72.2238 16.7769C72.2051 17.64 72.1957 18.7144 72.1957 20H50.6648V13.8568C51.694 13.2874 52.8169 12.5895 54.0334 11.7631C55.2498 10.9183 56.8218 9.81635 58.7494 8.4573C60.546 7.17172 61.8466 6.25344 62.6514 5.70248C61.1729 5.72084 58.2067 5.82185 53.7526 6.00551C52.2181 6.07897 51.1888 6.12489 50.6648 6.14325C50.6648 4.78421 50.646 3.64555 50.6086 2.72727C50.5899 1.809 50.5338 0.899908 50.4402 0H72.1957V6.1708C71.2039 6.81359 69.3698 8.06244 66.6937 9.91735C63.6994 12.011 61.3881 13.5629 59.76 14.573Z" fill="#282120" />
                    <path d="M47.6293 5.48209C45.4023 5.3719 43.7554 5.30762 42.6887 5.28926V14.7107C43.7741 14.6924 45.421 14.6281 47.6293 14.5179V20H31.3196V14.5179C33.4718 14.6281 35.1093 14.6924 36.2322 14.7107V5.28926C35.1093 5.30762 33.4718 5.3719 31.3196 5.48209V0H47.6293V5.48209Z" fill="#282120" />
                    <path d="M20.2116 12.4793L21.6713 0H28.5208L24.7592 20H16.1412L14.2323 8.84298L12.0147 20H3.7616L0 0H6.84949L8.28114 12.314L10.5269 0H18.022L20.2116 12.4793Z" fill="#282120" />
                </svg></a> 
            </div> 
            <ul className="Menu">
            <a href="/form">   <li className="li" >Quiz</li></a> 

              <a href="/form">     <li  className="li">Tic-Tac-Toe</li></a>
              <a href="/form">  <li  className="li">
                    Sudoku
                </li></a>
                <a href="/form">  <li  className="li">
                    Wordify
                </li></a>
            </ul>

            <div className="Button">
                <Button className="ButtonStyles" style={{border:"1px solid red;"}}>
                    Join a Quiz
                </Button>
                <Avatar >
                    <AvatarImage className="Avatar" src="https://github.com/shadcn.png" />
                </Avatar></div>

   
  <div className="NavWave">  <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="88" viewBox="0 0 1440 88" fill="none">
  <g filter="url(#filter0_b_400_8985)">
    <path d="M206.605 63.404C53.5359 63.5919 -184 86.6471 -184 86.6471V25.3699C-184 25.3699 53.4356 0.218712 206.605 0.0138396C362.997 -0.195344 449.109 26.3506 605.496 25.3699C747.846 24.4773 825.934 -0.673652 968.285 0.0138396C1101.44 0.656911 1174.51 31.3656 1307.4 25.3699C1390.45 21.6231 1517.5 0.0138396 1517.5 0.0138396V63.404C1517.5 63.404 1390.29 83.2095 1307.4 86.6471C1174.58 92.1554 1101.32 63.994 968.285 63.404C826.041 62.7733 747.739 85.8283 605.496 86.6471C449.207 87.5467 362.899 63.2122 206.605 63.404Z" fill="#0F1218"/>
  </g>
  <defs>
    <filter id="filter0_b_400_8985" x="-248" y="-64" width="1829.5" height="215.361" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="32"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_400_8985"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_400_8985" result="shape"/>
    </filter>
  </defs>
</svg> </div>

        </div>
    )
}
export default Navbar