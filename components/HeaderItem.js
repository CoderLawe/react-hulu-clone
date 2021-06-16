
function HeaderItem({ Icon, title}) {
    return (
        <div className="flex flex-col items-center cursor-pointer group  w-12 sm:w-20 hover:text-white  transform  hover:scale-125 hover:ease-in-out transition">
            <Icon  className="h-8 mb-1 ml-1 hover:animate-bounce"/>
            <p className="opacity-0 tracking-widest group-hover:opacity-100  ">{ title }</p>
        </div>
    )
}

export default HeaderItem
