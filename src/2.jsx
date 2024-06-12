import { BellRing, Check } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
]
import { Carousel,CarouselContent,CarouselItem } from "./components/ui/carousel"


const CardDemo = () => {
  return (
    <div className="MainBg">
   <div className="wavebox">
  
   <div className="wave">
   </div>
  
   </div>

   
    </div>
  )
}
export default CardDemo