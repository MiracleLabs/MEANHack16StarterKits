# Enterprise Mobility Track Spec - MEANHack '16

This mobile app will be used for residents of Miracle City to be able to capture maintenance issues across the campus, geo-tag them, time-tag them and submit them to the maintenance admin desk. The app will also give a chance for the users and admins to check open issues, take pictures and add to the issue, mark issue as resolved, and comment in real-time on the issues. Real-Time commenting will act as a live chat area on a particular issue so that users and admins can chat about the exact problem and get it resolved. Additional futures that will work well are offline storage/sync of data, push notifications for chat messages when user is offline, and setup follow up appointment date/time for problem checkup.

## Technology Covered(Expectation)

• IBM Bluemix with Node JS (or) Java

• Ionic and Angular for Mobility

• Sockets and Push Notification for Collaboration

• Cloudant NoSQL DB and APIs for Data Layer

• Base64 Encoding Libraries for Image Management

## Application Spec

Build a 2-faced application, one for users and one for admins – The needs must satisfy the following for the two roles,

### For Users,

•	Ability to take pictures and post to the app as an issue(Issue must include Geo/Time tagging + extra information like title, description and more)

•	Ability to login to the application and remember me functionality(Optional)

•	Ability to comment/chat on the issue

•	Ability to store/view/edit data and sync to server in offline mode(Optional)

•	Ability to mark issue as resolved

•	Ability to poke the issue – sends reminder to the admin(Put limit on number of pokes per day so that the admin doesn’t get overwhelmed with pokes)

###	For Admins,

•	Ability to see all issues with a search, search based on employee name, issue name, issue date and status(Open/Closed)

•	Ability to comment/chat on the issue

•	Ability to login to the application and remember me functionality(Optional)

•	Ability to store/view/edit data and sync to server in offline mode(Optional)

•	Ability to mark issue as resolved

•	Ability to setup an appointment date/time for a handyman to check out the maintenance issue – Delegate to another admin/handyman basically

•	Ability to send text message to the Handyman in English (or) Telugu from the app in case Handyman does not have the Mobile App(Uses a basic phone) - (Optional)
