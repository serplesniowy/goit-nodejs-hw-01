const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

// TEST

// async function testContacts() {
//   console.log("Testing listContacts:");
//   const allContacts = await listContacts();
//   console.table(allContacts);

//   console.log("Testing getContactById:");
//   const contact = await getContactById("AeHIrLTr6JkxGE6SN-0Rw");
//   console.log(contact);

//   console.log("Testing addContact:");
//   const newContact = await addContact(
//     "Jane Doe",
//     "jane.doe@example.com",
//     "555-555-5555"
//   );
//   console.log(newContact);

//   console.log("Testing removeContact:");
//   const updatedContacts = await removeContact(newContact.id);
//   console.table(updatedContacts);
// }

// testContacts();

const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = await listContacts();
      console.table(contacts);
      break;

    case "get":
      const contact = await getContactById(id);
      if (contact) {
        console.log(contact);
      } else {
        console.log(`Contact with ID ${id} not found.`);
      }
      break;

    case "add":
      const newContact = await addContact(name, email, phone);
      console.log("Contact added:", newContact);
      break;

    case "remove":
      const updatedContacts = await removeContact(id);
      console.log("Contact removed. Updated list:");
      console.table(updatedContacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
