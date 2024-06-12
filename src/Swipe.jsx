import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from './components/ui/card'
import { Button } from './components/ui/button'

const Swipe = () => {
  return (
    <>
    <div className='body'>
     
      <div className='slider'>
        <div className="slide-track">
          {/* <div className="slide">
        <div className="slide"><Card className> <CardHeader  className='swipeimg'><img src="img.png" alt="" width={"403px"}  /></CardHeader></Card>  </div>
        <div className="slide">  <Card className> <CardHeader className='swipeimg'> <img src="brooklyn.png" alt="" /></CardHeader>  </Card>  </div>
        <div className="slide"></div><Card className> <CardHeader className='swipeimg'>         <img src="jurassic.png" alt="" /></CardHeader>  </Card>  </div>
        <div className="slide"> <Card className> <CardHeader className='swipeimg'>   <img src="handmaid's.png" alt="" width={"403px"}/></CardHeader>  </Card> 
    
        </div> */}
         
       
                <div className="slide">
            <Card> 
              <CardHeader>
                <img src="img.png" alt="" className='swipeimg' />
               
              <CardContent>
                
                 <h1 className="CardHeading">Brooklyn Nine-Nine</h1>  
                 <p className="CardPara">

                A legal drama about a brilliant college dropout, Mike Ross, who lands a job at a prestigious law firm, working with sharp lawyer Harvey Specter.

              </p></CardContent>
              </CardHeader>
              <div className='CardFooter'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <g clip-path="url(#clip0_648_1312)">
    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218"/>
  </g>
  <defs>
    <clipPath id="clip0_648_1312">
      <rect width="28" height="28" fill="white"/>
    </clipPath>
   
  </defs>
 
</svg>
<Button className="CardButton"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round"/>
</svg></Button>
              </div>
              <CardFooter className="ShadecolorB"></CardFooter>
              </Card>
             
              </div>
          
          <div className="slide">
            
            <Card> <CardHeader><img src="brooklyn.png" alt="" className='swipeimg' />
              <CardContent> <h1 className="CardHeading">Brooklyn Nine-Nine</h1>  <p className="CardPara">

              Brooklyn Nine-Nine" is a comedy series about a quirky NYPD precinct led by Detective Jake Peralta and stern Captain Holt
              </p></CardContent></CardHeader>
              <div className='CardFooter'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <g clip-path="url(#clip0_648_1312)">
    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218"/>
  </g>
  <defs>
    <clipPath id="clip0_648_1312">
      <rect width="28" height="28" fill="white"/>
    </clipPath>
   
  </defs>
 
</svg>

<Button className="CardButton"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round"/>
</svg></Button>
              </div>
              </Card></div>
          <div className="slide">
            
            <Card> <CardHeader><img src="jurassic.png" alt="" className='swipeimg' />
              <CardContent> <h1 className="CardHeading">Jurassic Park</h1>  <p className="CardPara">

              A thrilling adventure where dinosaurs are brought back to life in a theme park, leading to chaos and survival challenges.
              </p></CardContent>
              </CardHeader>
              <div className='CardFooter'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <g clip-path="url(#clip0_648_1312)">
    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218"/>
  </g>
  <defs>
    <clipPath id="clip0_648_1312">
      <rect width="28" height="28" fill="white"/>
    </clipPath>
   
  </defs>
 
</svg>

<Button className="CardButton"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round"/>
</svg></Button>
              </div>
              
              </Card></div>
          <div className="slide">
            <Card> <CardHeader><img src="handmaid's.png" alt="" className='swipeimg' />
              <CardContent> <h1 className="CardHeading">The Handmaid's Tale</h1>  <p className="CardPara">
              In a dystopian society, women are forced into servitude, highlighting themes of oppression, resistance, and the struggle for freedom.
              </p></CardContent></CardHeader>
              <div className='CardFooter'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <g clip-path="url(#clip0_648_1312)">
    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218"/>
  </g>
  <defs>
    <clipPath id="clip0_648_1312">
      <rect width="28" height="28" fill="white"/>
    </clipPath>
   
  </defs>
 
</svg>

<Button className="CardButton"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round"/>
</svg></Button>
              </div>
              
              </Card></div>
                <div className="slide">
            <Card> 
              <CardHeader>
                <img src="img.png" alt="" className='swipeimg' />
              <CardContent>
                 <h1 className="CardHeading">Brooklyn Nine-Nine</h1>  
                 <p className="CardPara">

                A legal drama about a brilliant college dropout, Mike Ross, who lands a job at a prestigious law firm, working with sharp lawyer Harvey Specter.

              </p></CardContent>
              </CardHeader>
              <div className='CardFooter'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <g clip-path="url(#clip0_648_1312)">
    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218"/>
  </g>
  <defs>
    <clipPath id="clip0_648_1312">
      <rect width="28" height="28" fill="white"/>
    </clipPath>
   
  </defs>
 
</svg>
<Button className="CardButton"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round"/>
</svg></Button>
              </div>
              </Card>
              </div>
          
          <div className="slide">
            
            <Card> <CardHeader><img src="brooklyn.png" alt="" className='swipeimg' />
              <CardContent> <h1 className="CardHeading">Brooklyn Nine-Nine</h1>  <p className="CardPara">

              Brooklyn Nine-Nine" is a comedy series about a quirky NYPD precinct led by Detective Jake Peralta and stern Captain Holt
              </p></CardContent></CardHeader>
              <div className='CardFooter'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <g clip-path="url(#clip0_648_1312)">
    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218"/>
  </g>
  <defs>
    <clipPath id="clip0_648_1312">
      <rect width="28" height="28" fill="white"/>
    </clipPath>
   
  </defs>
 
</svg>

<Button className="CardButton"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round"/>
</svg></Button>
              </div>
              </Card></div>
          <div className="slide">
            
            <Card> <CardHeader><img src="jurassic.png" alt="" className='swipeimg' />
              <CardContent> <h1 className="CardHeading">Jurassic Park</h1>  <p className="CardPara">

              A thrilling adventure where dinosaurs are brought back to life in a theme park, leading to chaos and survival challenges.
              </p></CardContent>
              </CardHeader>
              <div className='CardFooter'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <g clip-path="url(#clip0_648_1312)">
    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218"/>
  </g>
  <defs>
    <clipPath id="clip0_648_1312">
      <rect width="28" height="28" fill="white"/>
    </clipPath>
   
  </defs>
 
</svg>

<Button className="CardButton"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round"/>
</svg></Button>
              </div>
              
              </Card></div>
          <div className="slide">
            <Card> <CardHeader><img src="handmaid's.png" alt="" className='swipeimg' />
              <CardContent> <h1 className="CardHeading">The Handmaid's Tale</h1>  <p className="CardPara">
              In a dystopian society, women are forced into servitude, highlighting themes of oppression, resistance, and the struggle for freedom.
              </p></CardContent></CardHeader>
              <div className='CardFooter'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <g clip-path="url(#clip0_648_1312)">
    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218"/>
  </g>
  <defs>
    <clipPath id="clip0_648_1312">
      <rect width="28" height="28" fill="white"/>
    </clipPath>
   
  </defs>
 
</svg>

<Button className="CardButton"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round"/>
</svg></Button>
              </div>
              
              </Card></div>
                <div className="slide">
            <Card> 
              <CardHeader>
                <img src="img.png" alt="" className='swipeimg' />
              <CardContent>
                 <h1 className="CardHeading">Brooklyn Nine-Nine</h1>  
                 <p className="CardPara">

                A legal drama about a brilliant college dropout, Mike Ross, who lands a job at a prestigious law firm, working with sharp lawyer Harvey Specter.

              </p></CardContent>
              </CardHeader>
              <div className='CardFooter'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <g clip-path="url(#clip0_648_1312)">
    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218"/>
  </g>
  <defs>
    <clipPath id="clip0_648_1312">
      <rect width="28" height="28" fill="white"/>
    </clipPath>
   
  </defs>
 
</svg>
<Button className="CardButton"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round"/>
</svg></Button>
              </div>
              </Card>
              </div>
          
          <div className="slide">
            
            <Card> <CardHeader><img src="brooklyn.png" alt="" className='swipeimg' />
              <CardContent> <h1 className="CardHeading">Brooklyn Nine-Nine</h1>  <p className="CardPara">

              Brooklyn Nine-Nine" is a comedy series about a quirky NYPD precinct led by Detective Jake Peralta and stern Captain Holt
              </p></CardContent></CardHeader>
              <div className='CardFooter'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <g clip-path="url(#clip0_648_1312)">
    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218"/>
  </g>
  <defs>
    <clipPath id="clip0_648_1312">
      <rect width="28" height="28" fill="white"/>
    </clipPath>
   
  </defs>
 
</svg>

<Button className="CardButton"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round"/>
</svg></Button>
              </div>
              </Card></div>
          <div className="slide">
            
            <Card> <CardHeader><img src="brooklyn.png" alt="" className='swipeimg' />
              <CardContent> <h1 className="CardHeading">Brooklyn Nine-Nine</h1>  <p className="CardPara">

              Brooklyn Nine-Nine" is a comedy series about a quirky NYPD precinct led by Detective Jake Peralta and stern Captain Holt
              </p></CardContent></CardHeader>
              <div className='CardFooter'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <g clip-path="url(#clip0_648_1312)">
    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218"/>
  </g>
  <defs>
    <clipPath id="clip0_648_1312">
      <rect width="28" height="28" fill="white"/>
    </clipPath>
   
  </defs>
 
</svg>

<Button className="CardButton"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round"/>
</svg></Button>
              </div>
              </Card></div>
          <div className="slide">
            
            <Card> <CardHeader><img src="brooklyn.png" alt="" className='swipeimg' />
              <CardContent> <h1 className="CardHeading">Brooklyn Nine-Nine</h1>  <p className="CardPara">

              Brooklyn Nine-Nine" is a comedy series about a quirky NYPD precinct led by Detective Jake Peralta and stern Captain Holt
              </p></CardContent></CardHeader>
              <div className='CardFooter'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
  <g clip-path="url(#clip0_648_1312)">
    <path d="M16.8241 3.30338L17.1918 1.40405L15.9499 2.88741L5.44987 15.4291L4.76255 16.25H5.83325H12.8105L11.1757 24.6967L10.8081 26.596L12.05 25.1127L22.55 12.571L23.2373 11.75H22.1666H15.1893L16.8241 3.30338Z" fill="#F6E739" stroke="#0F1218"/>
  </g>
  <defs>
    <clipPath id="clip0_648_1312">
      <rect width="28" height="28" fill="white"/>
    </clipPath>
   
  </defs>
</svg>

<Button className="CardButton"> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M20.8333 13.3334L27.2034 19.3265C27.5988 19.6985 27.5988 20.3015 27.2034 20.6735L20.8333 26.6667" stroke="#282120" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.8333 20H13.3333" stroke="#282120" stroke-width="1.5" stroke-linecap="round"/>
</svg></Button>
              </div>
              </Card></div>
        
          {/* <div className="slide">  <Card>
            <img src="brooklyn.png" alt="" className='swipeimg' /></Card>
          </div>
          <div className="slide"> <Card> <img src="jurassic.png" alt="" className='swipeimg' /></Card></div>
          <div className="slide">  <Card><img src="handmaid's.png" alt="" width={"403px"} className='swipeimg' /></Card>
          </div> */}
          {/* <div className="slide">
            <img src="img.png" alt="" width={"403px"} className='swipeimg' /></div>
          <div className="slide">   <img src="brooklyn.png" alt="" className='swipeimg' /></div>
          <div className="slide">  <img src="jurassic.png" alt="" className='swipeimg' /></div>
          <div className="slide">  <img src="handmaid's.png" alt="" width={"403px"} className='swipeimg' />
          </div>
          <div className="slide">
            <img src="img.png" alt="" width={"403px"} className='swipeimg' /></div>
          <div className="slide">   <img src="brooklyn.png" alt="" className='swipeimg' /></div>
          <div className="slide">  <img src="jurassic.png" alt="" className='swipeimg' /></div>
          <div className="slide">  <img src="handmaid's.png" alt="" width={"403px"} className='swipeimg' />
            <div className="slide">  <Card className='swipeimg'> <CardHeader><CardContent> <img src="jurassic.png" alt="" className='swipeimg' /> hello</CardContent></CardHeader>
            </Card> </div>
          </div> */}


        </div>
    
      </div>
    </div>
    
    <div className="Line"></div>
    </>
  )
}
export default Swipe