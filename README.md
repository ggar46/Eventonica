# Quick-setup 

#### Once you have successfully setup this template and initial database, the view will look like this:

![Initial View of the project](https://raw.githubusercontent.com/Yosolita1978/screenshoots/50a5573f21c1265d20d838a36b98588f9b4eefce/2023/H1/Screen%20Shot%202023-03-09%20at%208.03.32%20PM.png)
### Your First Express and React App with a DB connection

1. Go to your source directory in your terminal and run the command `git clone https://github.com/Yosolita1978/2023EventonicaTemplate.git <NAMENEWDIRECTORY>`
![You will see something like this in your terminal.]

> <img width="768" alt="Screen Shot 2023-03-10 at 11 10 34 AM" src="https://user-images.githubusercontent.com/102179075/224608432-5e3d18bd-7cf5-4576-8b3f-2e903106abe1.png">

2. To clean your folder from the owner's git, run the command `rm -rf .git` inside the folder <NAMENEWDIRECTORY>. Then re-initialize as the owner with `git init`.

3. Go to the server folder in the project (`cd server`) and run the command `npm install`

4. Go to the client folder (`cd .. and cd client`) and run the command `npm install`

5. This template has two servers already working. Both servers should start simultaneously, or "concurrently", by running `npm run dev` from within the server directory in your terminal. Please note that your backend server will run from port 8080, and your frontend React server will run from port 3000 .

6. To add a Postgres DB - you will need another terminal window for this part

6.1 Inside your server directory create a `.env` file and copy there the values that are in `.envexample`

* In a different terminal window go to the psql terminal with the comand `psql`
* Inside the psql prompt create your database eventonica with the command `create database eventonica;` (don't forget the semicolon!)

![You will see something like this](https://raw.githubusercontent.com/Yosolita1978/screenshoots/b6b7e47b8ccda4b9f709d20e94cacb6506d4dc13/2023/H1/Screen%20Shot%202023-03-13%20at%2011.13.13%20AM.png)

Back in the terminal window with the project go inside the server directory and run the command `psql -d eventonica -f db.sql` that will create a table `events` with 5 rows inside your db eventonica. 
![This will be the result of that command](https://raw.githubusercontent.com/Yosolita1978/screenshoots/b6b7e47b8ccda4b9f709d20e94cacb6506d4dc13/2023/H1/Screen%20Shot%202023-03-13%20at%2011.12.29%20AM.png)

Your DB should look like this inside the psql terminal
![Your DB should look like this](https://raw.githubusercontent.com/Yosolita1978/screenshoots/696689a627eb5ca206b5a2eaebec7cc1efa15ffc/2023/H1/Screen%20Shot%202023-03-09%20at%208.25.54%20PM.png)


# Installation
This project does not rely on any external dependencies or services.
1. Clone the repo `git clone https://github.com/ggar46/Eventonica/tree/eventonicabranch <NAMENEWDIRECTORY>`


# Usage
Features
* Delete events by pressing the labelled delete buttons.
* Add events by filling out the event title and location, and select the date.
* Toggle favorited and unfavorited events by clicking the favorite button. The black heart will turn red when the event has been favorited.


# Contributing
If you have a suggestion that would make this better, please fork the repo and create a pull request:
    1. Fork the Project
    2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
    3. Commit your Changes (git commit -m 'Add some AmazingFeature')
    4. Push to the Branch (git push origin feature/AmazingFeature)
    5. Open a Pull Request


# License
Licensed by Gisselle


# Contact
Gisselle Garcia - email@example.com
Project Link - https://github.com/ggar46/Eventonica


# Acknowledgments

* Icons library [fontAwesomeLibrary](https://fontawesomeicons.com/heart)
* Base template by Yosolita1978 [Link to Github](https://github.com/Yosolita1978/2023EventonicaTemplate)

