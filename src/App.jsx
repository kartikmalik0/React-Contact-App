import React, { useEffect, useState } from 'react'
import Nav from './Components/Nav'
import { FaSearch } from "react-icons/fa"
import { db } from './config/Firebase'
import NotFoundContact from './Components/NotFoundContact'
import { AiFillPlusCircle } from "react-icons/ai"
import { IoMdContact } from 'react-icons/io'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import {FaEdit} from "react-icons/fa"
import{FaTrash} from "react-icons/fa"
import ContactCard from './Components/ContactCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Components/Modal'
import AddAndUpdateContact from './Components/AddAndUpdateContact'
const App = () => {

  const [contacts, setContacts] = useState([]);
  const[isOpen,setOpen ]  = useState(false)

  const onOpen =()=>{
    setOpen(true)
  }
  const onClose =()=>{
    setOpen(false)
  }

  useEffect(() => {

    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        

        onSnapshot(contactsRef,(snapshot)=>{
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            }
          })
          setContacts(contactList)
        return contactList;
        })

       
        
      } catch (error) {

      }
    }
    getContacts()
  }, [])

const filterContacts =(e)=>{
  const value = e.target.value

  const contactsRef = collection(db, "contacts");
        

        onSnapshot(contactsRef,(snapshot)=>{
          const contactList = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            }
          })


          const filteredContacts = contactList.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()))

          setContacts(filteredContacts)



        return filteredContacts;
        })


}
  return (
    <div>
    <div className="  mx-auto max-w-[400px]">
      <Nav />
      <div className='  flex gap-2'>
        <div className=" flex relative  items-center flex-grow">
          <FaSearch className=' text-white  ml-1 text-3xl absolute' />
          <input onChange={filterContacts} type="text" className=" flex-grow h-10 bg-transparent border border-white rounded-r-md text-white pl-9" />
        </div>
        <div>
          <AiFillPlusCircle onClick={onOpen} className=' text-5xl text-white cursor-pointer' />
        </div>
      </div>
      <div className=' mt-4 gap-3 flex flex-col' >
        {contacts.length==0? <NotFoundContact/>:
          contacts.map(contact => (
           <ContactCard key={contact.id} contact={contact}/>
           ))}
      </div>
    </div>
    <AddAndUpdateContact
    onClose={onClose}
    isOpen={isOpen}
    />
    <ToastContainer position='bottom-center'/>
    </div>
  )
}

export default App
