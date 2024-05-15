'use client'
import UserTabs from "@/components/layout/UserTabs"
import {useProfile} from "@/components/UseProfile"
import UserProfileForm from "../../../../components/layout/UserProfileForm"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import toast from "react-hot-toast"

export default function EditUserPage() {

    const [loading, data] = useProfile()
    const [user, setUser] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        fetch('/api/profile?_id='+id).then(re => {
            res.json().then(user => {
                setUser(user)
            })
        })
    }, [])

    async function handleSaveButtonClick(ev, data) {
        ev.preventDefault()
        const promise = new Promise(async (resolve, reject) => {
            const res = await fetch('/api/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({...data, _id:id}),
            })
            if (res.ok) 
                resolve()
            else 
                reject()
        })

        await toast.promise(promise, {
            loading: 'Saving user...',
            success: 'User saved',
            error: 'Error',
        })
    }

    if (loading) {
        return 'Loading user profile...'
    }

    if (!data.admin) {
        return 'Not an admin'
    }

    return (
        <section className="mt-8 max-w-2xl mx-auto">
            <UserTabs isAdmin={true} />
            <div>
                <UserProfileForm user={user} onsave={handleSaveButtonClick}  />
            </div>
        </section>
    )
}