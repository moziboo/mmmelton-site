# BUNCH O' PROBLEMS

- #### SERVERLESS GO

  - build and zip without having to have duplicates of all dependencies 
  - cors handler package
  - serverless offline replacement dev environment
  - Makefile doesn't work in its current state on Windows

- #### SERVERLESS JS

  - deploy fails sometimes and says too many files open
  - what?

- #### TERRAFORM

  - can't get DNS records to deploy properly
  - have to set up domains and certs manually

- #### GENERALLY

  - add recap for current state of project for when I come back and don't know what's going on
  - identify and document all manual steps
  - Github Runners - How do they work?
  - think about how this is going to be used for other sites

### runningtheapp

- need to create an aws account
- create dynamodb table with some documents that fit the shapes found in the models package in the naws directory
- set up aws creds so that naws can access the table
- run "go run main.go" in the naws directory
- create .env file with REACT_APP_TEST and other variables used in react app
- run "npm install" and "npm start" to launch the frontend

### progress

- 08-17-2024-01 made blog feed with cards but need to figure out vertical sizing with truncated descriptions
- 08-18-2024-01 created another dynamo table for the purpose of holding user info, blog poasts, galleries, and media items
- 08-19-2024-01 I'm realizing now this probably needs to go in the root of the repo
- 08-19-2024-02 worked on hosting the site locally and making it publically accessible.
    it shows up @ <http://134.215.29.127> but TDS said it will change
- 08-20-2024-01 dear progress/diary, i didn't do much today, but i did relearn how to set up serverless for go by remaking
    all the .gitignored files
- 08-25-2024-01 pulled in my pretend aws tool for running go functions like lambdas and added a dynamo call
- 08-25-2024-02 we have our first usecase for the site framework.... kelly's portfolio site :0
- 08-31-2024-01 added the json instructions to the go struct and pulled the user into the app component state
- 09-02-2024-01 fyi you aren't handling the error scenario when the api is down in a graceful way
- 09-02-2024-02 added a models package to naws that will define the dynamo entries for each type
- 09-02-2024-03 I think it will help to have a .env file to load in config data
- 09-03-2024-01 Created Post object in Dynamo and wrote a Go function to retrieve them
- 09-03-2024-02 Made a React useEffect of the Blog component to retrieve and render the Posts array

### next

- click the postcard and go to the post page
- form to submit data to create posts
