'use client'
import Image from "next/image"
import MenuItem from "@/components/menu/MenuItem"
import SectionHeaders from "./SectionHeaders"
import { useEffect, useState } from "react"

export default function HomeMenu() {

    const [bestSellers, setBestSellers] = useState([])

    useEffect(() => {
        fetch('/api/menu-items').then(res => {
            res.json().then(menuItems => {
                setBestSellers(menuItems.slice(-3))
            })
        })
    }, [])

    return (
        <section className="">
            <div className="absolute left-0 right-0 justify-start style={{'overflowX': 'hidden'}}">
                <div className="absolute left-0 -top-[100px] -z-10">
                    <Image src={'/salad-letuce.jpg'} width={192} height={400} alt={'salad'}></Image>
                </div>
                <div className="absolute -top-[30px] right-0 -z-10">
                    <Image src={'/salad-letuce1.jpg'} width={192} height={400} alt={'salad'}></Image>
                </div>
            </div>
            <div className="text-center mb-4">
               <SectionHeaders 
                    subHeader={'check out'}
                    mainHeader={'Our Best Sellers'}
                />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
                {bestSellers?.length > 0 && bestSellers.map(item => (
                    <MenuItem key={item._id} {...item} />
                ))}
            </div>
        </section>
    )
}