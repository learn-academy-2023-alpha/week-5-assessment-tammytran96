# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: calling super in a Ruby class calls on the arguments in the super class to bring them to the sub class. A super class is a class that holds methods that you'll want to use over and over again for sub classes. 

Researched answer: Calling super in a Ruby class calls on the initialize method in the super class. The data wanted from the super class will be passed into the initialize method as well as the method called super. In super, you'll pass in arguments that were in the super class so you can now access them in the subclass. A super class is a class that holds behaviors that you'll want to use for multiple sub classes. A super class can pass information to a sub class which can then access the data from the super class. This passing of data is called inheritance. Once you create a super class you can then create sub classes that will inherit behaviors from the super class. The sub classes are able to have their own behaviors as well. 

2. What is a gem?

Your answer: a gem is a package manager in Ruby

Researched answer: A gem is a library of code functionality that is managed by RubyGems, which is a package manager. Gems are packaged Ruby code thats makes it easier to use common functionality within an application that someone else wrote and also makes it easier to share functionality with other developers. 

3. What is a relational database? Are there other kinds of databases?

Your answer: a relational database is a database that holds information about certain things. For example, a model of our cohort could contain information about each person such as their name, age, location. All of that together would be considered a relational database

Researched answer: A relational database is a database that holds information about certain things similar to an Excel spreadsheet where information is displayed in rows and columns. A table is one set of rows and columns and there can be many tables that have relationships to one another. For example, a table of our cohort could contain information about each person such as their name, age, location. Another type of database is a Class which holds information about a particular thing in attributes and key:value pairs.

4. What are primary keys? Why are they important?

Your answer: primary keys are specific keys that lets you know what that certain information belongs to. For example, if we had information about a mix of students from different cohorts, instead of typing out which cohort they belong to over and over again, we would have another database that has a list of all the different cohorts. We would then have the primary key of the mix of students be relational to their cohort's unique id.

Researched answer: Oops! In my original answer, I was thinking about foreign keys. Primary keys are a unique key that is assigned to each row of a database. Primary keys are important because if multiple rows have similar information, the primary key can distinguish between which instance you're referring to and eliminates any confusion. In Rails, the primary keys are named 'id' and it is unique and cannot be repeated. We can always tell instances apart by their ID.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: I don't remember off the top of my head what the HTTP verbs are, but I know that each verb corresponds to a CRUD action. The internet follows the CRUD model where you can read something on the screen, you can create something on the web, update something on the web, or delete/remove something off the internet.

Researched answer: The HTTP verbs are "get" request, which displays the content on a screen, "post" request, which creates content, "put" request which replaces content, "patch" request which edits content, and "delete" request which removes content. Each verbs' corresponding CRUD action are:
Create - "post" request
Read - "get" request
Update - "put" and "patch" request
Delete - "delete" request

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: REST (Representational State Transfer) is a pattern to follow when structuring routes between the server and client. RESTful routes attempt to bring the operations that can be applied to an object into HTTP requests.

2. Model validations: Model validations is a test-driven development to ensure that only useful and meaningful data are saved into the database of an application. Rails will run all model validations before content to added to the database and if it encounters an error, the content will not be saved.

3. Params: Parameters allow us to add more information to our program. We can do this by passing a value into the controller without hard coding it. Params make the page more dynamic.

4. ERB: erb stands for embedded Ruby and is an extension of a file. For example, file.html.erb . This will allow us to code in HTML and include Ruby code into the file. 

5. API: API stands for Application Programming Interface and it is an app that transmit data in the JSON form. When an app is only controllers and models (backend), it is called an API. One of the tools used to test our API is Postman. 
