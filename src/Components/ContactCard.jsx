import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config/Firebase';
import { useState } from 'react';
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { IoMdContact } from 'react-icons/io';
import AddAndUpdateContact from './AddAndUpdateContact';
import { toast } from 'react-toastify';

const ContactCard = ({ contact }) => {
  const[isOpen,setOpen ]  = useState(false)

  const onOpen =()=>{
    setOpen(true)
    
  }
  const onClose =()=>{
    setOpen(false)
    
  }
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, 'contacts', id));
      toast.success("Contact Deleted Successfully")
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div>
    <div key={contact.id} className="flex bg-yellow justify-between items-center p-2 rounded-lg">
      <div className="flex gap-2 items-center">
        <IoMdContact className="text-orange text-4xl" />
        <div>
          <h2 className="font-medium">{contact.name}</h2>
          <p className="">{contact.email}</p>
        </div>
      </div>
      <div className="flex gap-3 text-3xl">
        <FaEdit onClick={onOpen} className=" cursor-pointer" />
        <FaTrash onClick={() => deleteContact(contact.id)} className="text-orange cursor-pointer" />
      </div>
    </div>
    

    <AddAndUpdateContact isUpdate isOpen={isOpen} onClose={onClose} contact={contact}/>

    </div>
  );
};

export default ContactCard;
