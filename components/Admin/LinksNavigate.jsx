import Link from 'next/link'


const LinksNavigate = ({text, link}) => {
  return (
    <div className="">

        <Link href={link ? link : "#"} className="">
            <a className="hover:underline w-1/3 hover:ease-in-out transition capitalize font-semibold"> { text } </a> 
        </Link>

    </div>
  )
}

export default LinksNavigate