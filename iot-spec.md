# Internet of Things Track Spec - MEANHack '16

This application will be a dashboard that any employee can see and can check the last recorded bus location, as well as track information in real-time as to who is on the bus, where they have boarded and what the overall usage of the bus route is. Additionally, an optional feature would be for chat rooms to be created on a bus, so that people can discuss regarding bus location and more in the chat room of the bus + Also another optional feature would be to be able to have the bus driver have a tablet as well which shows the bus capacity, stop requests and more details + Possibly as data aggregates the app can see past data, check leaves in Hubble and even be able to tell the users that the bus that is coming next is too busy 


## Technology Covered(Expectation)

• IBM Bluemix with Node JS (or) Java

• Angular JS (or) HTML for the UI

• Sockets for Collaboration Features
• Cloudant NoSQL DB and APIs for Data Layer

• Raspberry Pi, RFID and Watson IoT Platform

## Application Spec

Build a 3-faced applications (3rd face for bus drivers is optional),

### User Experience

• Ability to Scan RFID Tags before and after they get into the Bus

• Ability to build a feature where it sends a message to the Emergency Contact (Parents) when the User Scans the RFID and gets into the bus. Vice Versa need to send messages when they get down from the Bus

•	Ability to build the system where the RFID Tags emits time-stamp and Geo-location of that particular person when ever they get in and out from the Bus

•	Ability to build a login module for the users to check the status like where they got in and down, what was their past bus route and what was their boarding time and more

o	Ability to send alerts to User whenever they forget to scan their RFID Tags before getting down from the Bus - That way they can stop the trip to reduce the charges.

### Admin Experience

•	Ability to see both real-time and past data of the Bus based on the ID. That way he should be able to see last week or even month data.

•	Ability to build a event notification dashboard where it shows all the data regarding employee boarded and get off, and also the usage based on the employee ID like how many times on boarded and other aspects

### Driver Experience(Optional)

•	Able to see the bus capacity

•	Able to see Stop requests from Users

•	Able to start the the route and stop, this helps to know the location of the Bus based on GPS
