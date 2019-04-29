import React from 'react';
import Users from './Users';
import './App.css';
const payload = {
  users: [
      {
          id: 1,
          firstName: "Muhammad",
          lastName: "Hannan",
          gender: "Male",
          dateOfBirth: "20-05-1990",
          joiningDate: "09-12-2012",
          occupation: "Software Engineer",
          loggedInAt: "27-04-2018 9:30:45 pm",
          active: true,
          disabilities: [],
          languages: [
              {
                  id: 1,
                  name: "Urdu",
                  experties: {
                      speak: 100,
                      write: 80,
                      understand: 100,
                      read: 90
                  }
              },
              {
                  id: 2,
                  name: "English",
                  experties: {
                      speak: 50,
                      write: 60,
                      understand: 95,
                      read: 70
                  }
              },
              {
                  id: 3,
                  name: "Punjabi",
                  experties: {
                      speak: 100,
                      write: 20,
                      understand: 100,
                      read: 30
                  }
              }
          ],
          contactNumbers: [
              {
                  id: 1,
                  type: "Home",
                  number: "+92 300 1234567"
              },
              {
                  id: 2,
                  type: "Work",
                  number: "+92 321 1234567"
              },
              {
                  id: 3,
                  type: "Mobile1",
                  number: "+92 345 1234567"
              },
              {
                  id: 4,
                  type: "Mobile2",
                  number: "+92 346 1234567"
              }
          ],
          addresses: [
              {
                  id: 1,
                  type: "Home1",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 2,
                  type: "Home2",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 3,
                  type: "Work1",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 4,
                  type: "Work2",
                  address: "House #10, Block B, Aziz Garden",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              }
          ]
      },
      {
          id: 2,
          firstName: "Muhammad",
          lastName: "Kashif",
          gender: "Male",
          dateOfBirth: "20-05-1990",
          joiningDate: "09-12-2012",
          occupation: "Software Engineer",
          loggedInAt: "27-04-2018 9:30:45 pm",
          active: true,
          disabilities: [],
          languages: [
              {
                  id: 1,
                  name: "Urdu",
                  experties: {
                      speak: 100,
                      write: 80,
                      understand: 100,
                      read: 90
                  }
              },
              {
                  id: 2,
                  name: "English",
                  experties: {
                      speak: 50,
                      write: 60,
                      understand: 95,
                      read: 70
                  }
              },
              {
                  id: 3,
                  name: "Punjabi",
                  experties: {
                      speak: 100,
                      write: 20,
                      understand: 100,
                      read: 30
                  }
              }
          ],
          contactNumbers: [
              {
                  id: 1,
                  type: "Home",
                  number: "+92 300 1234567"
              },
              {
                  id: 2,
                  type: "Work",
                  number: "+92 321 1234567"
              },
              {
                  id: 3,
                  type: "Mobile1",
                  number: "+92 345 1234567"
              },
              {
                  id: 4,
                  type: "Mobile2",
                  number: "+92 346 1234567"
              }
          ],
          addresses: [
              {
                  id: 1,
                  type: "Home1",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 2,
                  type: "Home2",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 3,
                  type: "Work1",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 4,
                  type: "Work2",
                  address: "House #10, Block B, Aziz Garden",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              }
          ]
      },
      {
          id: 3,
          firstName: "Hafiz",
          lastName: "Ali Raza",
          gender: "Male",
          dateOfBirth: "20-05-1990",
          joiningDate: "09-12-2012",
          occupation: "Software Engineer",
          loggedInAt: "27-04-2018 9:30:45 pm",
          active: true,
          disabilities: [],
          languages: [
              {
                  id: 1,
                  name: "Urdu",
                  experties: {
                      speak: 100,
                      write: 80,
                      understand: 100,
                      read: 90
                  }
              },
              {
                  id: 2,
                  name: "English",
                  experties: {
                      speak: 50,
                      write: 60,
                      understand: 95,
                      read: 70
                  }
              },
              {
                  id: 3,
                  name: "Punjabi",
                  experties: {
                      speak: 100,
                      write: 20,
                      understand: 100,
                      read: 30
                  }
              }
          ],
          contactNumbers: [
              {
                  id: 1,
                  type: "Home",
                  number: "+92 300 1234567"
              },
              {
                  id: 2,
                  type: "Work",
                  number: "+92 321 1234567"
              },
              {
                  id: 3,
                  type: "Mobile1",
                  number: "+92 345 1234567"
              },
              {
                  id: 4,
                  type: "Mobile2",
                  number: "+92 346 1234567"
              }
          ],
          addresses: [
              {
                  id: 1,
                  type: "Home1",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 2,
                  type: "Home2",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 3,
                  type: "Work1",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 4,
                  type: "Work2",
                  address: "House #10, Block B, Aziz Garden",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              }
          ]
      },
      {
          id: 4,
          firstName: "Haider",
          lastName: "Shah",
          gender: "Male",
          dateOfBirth: "20-05-1990",
          joiningDate: "09-12-2012",
          occupation: "Software Engineer",
          loggedInAt: "27-04-2018 9:30:45 pm",
          active: true,
          disabilities: [],
          languages: [
              {
                  id: 1,
                  name: "Urdu",
                  experties: {
                      speak: 100,
                      write: 80,
                      understand: 100,
                      read: 90
                  }
              },
              {
                  id: 2,
                  name: "English",
                  experties: {
                      speak: 50,
                      write: 60,
                      understand: 95,
                      read: 70
                  }
              },
              {
                  id: 3,
                  name: "Punjabi",
                  experties: {
                      speak: 100,
                      write: 20,
                      understand: 100,
                      read: 30
                  }
              }
          ],
          contactNumbers: [
              {
                  id: 1,
                  type: "Home",
                  number: "+92 300 1234567"
              },
              {
                  id: 2,
                  type: "Work",
                  number: "+92 321 1234567"
              },
              {
                  id: 3,
                  type: "Mobile1",
                  number: "+92 345 1234567"
              },
              {
                  id: 4,
                  type: "Mobile2",
                  number: "+92 346 1234567"
              }
          ],
          addresses: [
              {
                  id: 1,
                  type: "Home1",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 2,
                  type: "Home2",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 3,
                  type: "Work1",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 4,
                  type: "Work2",
                  address: "House #10, Block B, Aziz Garden",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              }
          ]
      },
      {
          id: 5,
          firstName: "Syed",
          lastName: "Murtza",
          gender: "Male",
          dateOfBirth: "20-05-1990",
          joiningDate: "09-12-2012",
          occupation: "Software Engineer",
          loggedInAt: "27-04-2018 9:30:45 pm",
          active: false,
          disabilities: [],
          languages: [
              {
                  id: 1,
                  name: "Urdu",
                  experties: {
                      speak: 100,
                      write: 80,
                      understand: 100,
                      read: 90
                  }
              },
              {
                  id: 2,
                  name: "English",
                  experties: {
                      speak: 50,
                      write: 60,
                      understand: 95,
                      read: 70
                  }
              },
              {
                  id: 3,
                  name: "Punjabi",
                  experties: {
                      speak: 100,
                      write: 20,
                      understand: 100,
                      read: 30
                  }
              }
          ],
          contactNumbers: [
              {
                  id: 1,
                  type: "Home",
                  number: "+92 300 1234567"
              },
              {
                  id: 2,
                  type: "Work",
                  number: "+92 321 1234567"
              },
              {
                  id: 3,
                  type: "Mobile1",
                  number: "+92 345 1234567"
              },
              {
                  id: 4,
                  type: "Mobile2",
                  number: "+92 346 1234567"
              }
          ],
          addresses: [
              {
                  id: 1,
                  type: "Home1",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 2,
                  type: "Home2",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 3,
                  type: "Work1",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 4,
                  type: "Work2",
                  address: "House #10, Block B, Aziz Garden",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              }
          ]
      },
      {
          id: 6,
          firstName: "Muhammad",
          lastName: "Murtza",
          gender: "Male",
          dateOfBirth: "20-05-1990",
          joiningDate: "09-12-2012",
          occupation: "Software Engineer",
          loggedInAt: "27-04-2018 9:30:45 pm",
          active: false,
          disabilities: [],
          languages: [
              {
                  id: 1,
                  name: "Urdu",
                  experties: {
                      speak: 100,
                      write: 80,
                      understand: 100,
                      read: 90
                  }
              },
              {
                  id: 2,
                  name: "English",
                  experties: {
                      speak: 50,
                      write: 60,
                      understand: 95,
                      read: 70
                  }
              },
              {
                  id: 3,
                  name: "Punjabi",
                  experties: {
                      speak: 100,
                      write: 20,
                      understand: 100,
                      read: 30
                  }
              }
          ],
          contactNumbers: [
              {
                  id: 1,
                  type: "Home",
                  number: "+92 300 1234567"
              },
              {
                  id: 2,
                  type: "Work",
                  number: "+92 321 1234567"
              },
              {
                  id: 3,
                  type: "Mobile1",
                  number: "+92 345 1234567"
              },
              {
                  id: 4,
                  type: "Mobile2",
                  number: "+92 346 1234567"
              }
          ],
          addresses: [
              {
                  id: 1,
                  type: "Home1",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 2,
                  type: "Home2",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 3,
                  type: "Work1",
                  address: "House #18, Block A Lahore",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              },
              {
                  id: 4,
                  type: "Work2",
                  address: "House #10, Block B, Aziz Garden",
                  city: "Lahore",
                  state: "Punjab",
                  country: "Pakistan"
              }
          ]
      }
  ]
}
class App extends React.Component{
  render(){
    return(
      <div>
          <Users users={payload.users} />
      </div>
    )
  }
}
export default App;
