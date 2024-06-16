# Week-4-project-guestbook

creating a visitor book hosted through deploy that can store and display data from a postgreSQL database.

# Week 4 guestbook project.

## User Stories

🐿️ As a user, I want to visit the website and read the information on my phone or computer
🐿️ As a user, I want to be able to leave a message in the guestbook
🐿️ As a user, I want to be able to see all of the messages that have been left in the guestbook

## Requirements

🎯 Create a page containing a form to leave a message and a list of all the messages that have been left.
🎯 Style the form and the messages so they're easy to read on multiple kinds of device.
🎯 Create an API POST route to accept the text from your message input form
🎯 Create a database to store the messages, and create a seed file to create the table
🎯 Create an API GET route to retrieve all the messages from the database
🎯 Fetch the messages from your API in the browser and display them on the page.

## Reflection

I created a client using CSS, HTML and JS. My client has a title and some information about leaving a message. It has a form positioned centrally for ease of use. The form allows users to submit their name, a message, a reaction in the form of an emoji and whether they would return to the fictional property. There's a display of how many visitors have left a message total number of entries in the database. I have also included a filter form that allows users to show only messages that contain the specified reaction. I have created two layouts for the client so that if the user is on a mobile device or a computer it will suit their screen. The two layouts are rather similar but certain text changes size to better suit a larger screen. Also, some positioning is changed to make better use of a wider screen. The form, when submitted sends a post request through a server I made with Express. My database is a PostgreSQL database on Supabase, the request contains the information they entered formatted in JSON. This data is added to the table due to the database query attached to the post route. I created the table on the database using a database query in a seed file. In the seed file, I also inserted data into the first row of the table. To display the messages that have been submitted I use a get request I created that selects all the information I planned on using on the client. Their name, reaction, message and whether they would return in the future. I wrote JS to create many list items that display that information. Within this function, I added the ability to filter the results. You can choose a particular reaction and display all messages associated with it or all of the messages. I added the get messages function into my button submission so that when a user makes a submission their entry is added on the screen. I also added an effect that scrolls the window down when you use the submit button so the user can see their message.

I struggled to get the filter to work as I was a little confused by the filter method before I did some reading online. Also, each message is displayed with a small avatar image they are from an API that shows a random avatar image. I wanted to slightly delay each iteration of my forEach loop but I did not manage to get it working. I was messing with setTimeout I think but it was not working as intended. I think I could have done it with a for loop but I had already written it as a forEach and did not want to risk breaking it when it was already working.

I had an issue with messages not appearing as soon as they were submitted because I had a console log that I had been using earlier and was referencing that was now not defined and it was stopping the getMessages function from working.
