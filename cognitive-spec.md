# Cognitive Chat Bot Track Spec - MEANHack '16

This is a chat bot application that will be able to ask the user questions and in return determine who from the Innovation Labs is available for the team to assist with the task. The bot should be able to handle context, multiple message contexts, socket based communication with the server and also backend integration with a NoSQL DB. Additionally the chat bot can be enabled to understand tone from Watson and respond accordingly.


## Technology Covered(Expectation)

• IBM Bluemix with Node JS (or) Java

• Angular JS (or) HTML for the UI

• Sockets and Watson Conversation for Chat Bot Capabilities

• Cloudant NoSQL DB and APIs for Data Layer

## Application Spec

The application has a single user facing model, (Chat bot capable of following)

• Bot needs to tell the user what he can do with the bot

•	User will ask for a resource, possibly even give a name, and will ask for a technology

•	Bot should be able to understand that, check the technology versus the resource versus availability and assign an available resource to the user

•	Bot should connect to the DB to check this availability and technology mapping data and also then log into the DB once the resource is assigned

•	Ability to send email to MIL Leads if no resource is available through its algorithm

•	Ability to take job id, resource name, (or) job title and give status of the job that was assigned by the particular user

The following items are optional,

• Build a dashboard for MIL Team members to go and see what jobs were assigned to them

•	Ability to view jobs assigned to various team members in a table

•	Ability to mark job completed

•	Ability to search through the jobs based on resource assigned to, completion status, data assigned, assigned by and job title

•	Ability to see dashboard of number of jobs that have come, average completion time, and technology based pie-chart for job distribution + Resource utilization at current real-time

•	Add new users/technology to the bot’s DB so that it can assign to people

•	Check unassigned jobs and assign to another resource (or) check assigned jobs and change the resource working on the job
