import Image from "next/image";
import HeaderItem from "./HeaderItem";
import{
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline"

function Header() {
    return (
        <header className='flex flex-col sm:flex-row justify-between items-center m-5 h-auto'>
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="Home" Icon={HomeIcon}/>    
                <HeaderItem title ="TRENDING" Icon={LightningBoltIcon}/>
                <HeaderItem title ="VERIFIED" Icon={BadgeCheckIcon}/>
                <HeaderItem title ="COLLECTIONS" Icon={CollectionIcon}/>
                <HeaderItem title ="SEARCH" Icon={SearchIcon} />
                <HeaderItem title ="ACCOUNT" Icon={UserIcon}/>



            </div>            
            <Image src="https://links.papareact.com/ua6" className="object-contain" width={200} height={100}/>
        </header>
    )
}

export default Header
