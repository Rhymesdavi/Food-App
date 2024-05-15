'use client'
import { useState } from "react"
import EditableImage from "../EditableImage"
import {useProfile} from "@/components/UseProfile"

export default function UserForm({user,onSave}) {
    const [userName, setUserName] = useState(user?.name || '');
    const [image, setImage] = useState(user?.image || '');
    const [phone, setPhone] = useState(user?.phone || '');
    const [streetAddress, setStreetAddress] = useState(user?.streetAddress || '');
    const [postalCode, setPostalCode] = useState(user?.postalCode || '');
    const [city, setCity] = useState(user?.city || '');
    const [country, setCountry] = useState(user?.country || '');
    const [admin, setAdmin] = useState(user?.admin || false);
    const {data:loggedInUserData} = useProfile();

    return (
        <div className="md:flex gap-4">
                    <div>
                        <div className="relative">
                            <div className="p-2 rounded-lg realtivenmax-w-[120px]">
                                <EditableImage link={image} setLink={setImage} />
                            </div>
                        </div>
                    </div>
                    <form 
                        className="grow" 
                        onSubmit={ev => onSave(ev, {name:userName, image, phone, streetAddress, city, country, postalCode, admin})}>
                        <label>First and last name</label>
                        <input 
                            type="text" 
                            placeholder="First and last name" 
                            value={userName} 
                            onChange={ev => setUserName(ev.target.value)}
                        />

                        <label>Email</label>
                        <input 
                            type="email" 
                            disabled={true} 
                            value={user.email}
                        />

                        <label>Phone</label>
                        <input 
                            type="tel" placeholder="Phone number"
                            value={phone} onChange={ev => setPhone(ev.target.value)}
                        />

                        <label>Street address</label>
                        <input 
                            type="tex" placeholder="Street address"
                            value={streetAddress} onChange={ev => setStreetAddress(ev.target.value)}
                        />

                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <label>Postal code</label>
                                <input
                                    style={{'margin': '0'}} 
                                    type="tex" placeholder="Postal code"
                                    value={postalCode} onChange={ev => setPostalCode(ev.target.value)}
                                />
                            </div>
                            <div>
                                <label>City</label>
                                <input
                                    style={{'margin': '0'}} 
                                    type="tex" placeholder="City"
                                    value={city} onChange={ev => setCity(ev.target.value)}
                                />
                            </div>
                        </div>

                        <label>Country</label>
                        <input 
                            type="tex" placeholder="Country"
                            value={country} onChange={ev => setCountry(ev.target.value)}
                        />
                        {loggedInUserData.admin && (
                            <div>
                            <label className="p-2 inline-flex items-center gap-2 mb-2" htmlFor="adminCb">
                                <input id="adminCb" type="checkbox" className="" value={'1'}
                                    checked={admin}
                                    onChange={ev => setAdmin(ev.target.checked)} 
                                />
                                <span>Admin</span>
                            </label>
                        </div>
                        )}
                        <button type="submit">Save</button>
                    </form>
                </div>
    )
}