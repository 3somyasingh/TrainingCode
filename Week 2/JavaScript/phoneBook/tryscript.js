class Contact {
    constructor(id, name, phone) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }
}
 
class Phonebook {
    constructor() {
        this.contacts = [];
    }
 
    addContact(contact) {
        this.contacts.push(contact);
        console.log(this.contacts);
    }
 
    deleteContact(id) {
        this.contacts = this.contacts.filter(con => con.id !== id);
    }
 
    updateContact(contact) {
        const foundIndex = this.contacts.findIndex(con => con.id === contact.id);
        this.contacts[foundIndex] = contact;
    }
 
    getAllContacts() {
        return this.contacts;
    }
 
    getContactById(id) {
        return this.contacts.find(con => con.id === id);
    }
}
 
const myPhone = new Phonebook();
 
function addphone() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("contact").value;
    const newContact = new Contact(Date.now(), name, phone);
    if(name==''&& phone==""){
        alert("Add Name and number")
    }
    else{
        myPhone.addContact(newContact);
    }
   
    document.getElementById("name").value = "";
    document.getElementById("contact").value = "";
    displayData();
}
 
function updatephone(id) {
    const contactToUpdate = myPhone.getContactById(id);
    const newNameInput = document.querySelector('[placeholder="Update your Name"]');
    const newPhoneInput = document.querySelector('[placeholder="Update your Phone Number"]');
    const updateButton = document.getElementById('updateButton');
 
    newNameInput.value = contactToUpdate.name;
    newPhoneInput.value = contactToUpdate.phone;
 
    updateButton.onclick = function () {
        const updatedName = newNameInput.value;
        const updatedPhone = newPhoneInput.value;
        contactToUpdate.name = updatedName;
        contactToUpdate.phone = updatedPhone;
        myPhone.updateContact(contactToUpdate);
        displayData();
        updateButton.onclick = null;
        document.querySelector('[placeholder="Update your Name"]').value = "";
        document.querySelector('[placeholder="Update your Phone Number"]').value = "";
    };
}
 
function displayData() {
    const contactList = document.getElementById('contactList');
    const data = myPhone.getAllContacts();
 
    if (data.length === 0) {
        contactList.innerHTML = `<tr><td colspan="3">No contacts found</td></tr>`;
    } else {
        let html = '';
        data.forEach(contact => {
            html += `
          <tr>
            <td>${contact.id}</td>
            <td>${contact.name}</td>
            <td>${contact.phone}</td>
            <td>
              <button class="btn btn-success" onclick="updatephone(${contact.id})">Edit</button>
            <button class="btn btn-danger" onclick="deleteContact(${contact.id})">X</button>
            </td>
          </tr>
        `;
        });
        contactList.innerHTML = html;
    }
}
function deleteContact(id) {
    myPhone.deleteContact(id);
    displayData();
}
 
 
displayData();
 


















// class Contact {
//     constructor(id, name, phone) {
//         this.id = id;
//         this.name = name;
//         this.phone = phone;
//     }
// }

// class Phonebook {
//     constructor() {
//         this.contacts = [];
//     }

//     addContact(contact) {
//         this.contacts.push(contact);
//     }

//      updateContact(id) {
//         const foundIndex = this.contacts.findIndex(con => con.id === contact.id);
//         if (foundIndex !== -1) {
//             this.contacts[foundIndex] = contact;
//         }
//     }

//     deleteContact(id) {
//         this.contacts = this.contacts.filter(con => con.id !== id);
//     }

//     getAllContacts() {
//         return this.contacts;
//     }

//     getContactById(id) {
//         return this.contacts.find(con => con.id === id);
//     }
// }






// // // Example usage
// // if (typeof window !== 'undefined') {
// //     const myPhonebook = new Phonebook();

// //     // Add a new contact
// //     const newContact = new Contact(1, 'John Doe', '123-456-7890');
// //     myPhonebook.addContact(newContact);

// //     // Update the contact
// //     const updatedContact = new Contact(1, 'Jane Doe', '987-654-3210');
// //     myPhonebook.updateContact(updatedContact);

// //     // Delete the contact
// //     myPhonebook.deleteContact(1);

// //     // Display all contacts
// //     for (const contact of myPhonebook.getAllContacts()) {
// //         console.log(`ID: ${contact.id}, Name: ${contact.name}, Phone: ${contact.phone}`);
// //     }
// // }





// // // Example usage
// // if (require.main === module) {
// //     const phonebook = new Phonebook();

// //     // Create some contacts
// //     const contact1 = new Contact(1, "Alice", "123-456-7890");
// //     const contact2 = new Contact(2, "Bob", "987-654-3210");

// //     // Add contacts to the phonebook
// //     phonebook.addContact(contact1);
// //     phonebook.addContact(contact2);

// //     // Get all contacts
// //     const allContacts = phonebook.getAllContacts();
// //     for (const con of allContacts) {
// //         console.log(`Contact ${con.id}: ${con.name} (${con.phone})`);
// //     }

// //     // Update a contact
// //     const updatedContact = new Contact(1, "Alice Smith", "555-123-4567");
// //     phonebook.updateContact(updatedContact);

// //     // Get contact by ID
// //     const foundContact = phonebook.getContactById(1);
// //     if (foundContact) {
// //         console.log(`Found contact: ${foundContact.name} (${foundContact.phone})`);
// //     } else {
// //         console.log("Contact not found.");
// //     }
// // }

