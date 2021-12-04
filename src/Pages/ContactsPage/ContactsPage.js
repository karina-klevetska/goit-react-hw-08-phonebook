import ContactForm from 'Components/ContactForm/ContactForm'
import Filter from 'Components/Filter/Filter'
import ContactList from 'Components/ContactList/ContactList'
import ContactItem from 'Components/ContactItem/ContactItem'

const ContactsPage = () => {
  return (
    <>
      <div className='phonebook-wrapper'>
        <div className='contact-form-wrapper'>
          <ContactForm />
        </div>
        <div className='contacts-wrapper'>
          <h2 className='isHidden'>Contacts</h2>
          <Filter />
          <ContactList>
            <ContactItem />
          </ContactList>
        </div>
      </div>
    </>
  )
}

export default ContactsPage
