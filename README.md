### Built With
![alt text](https://camo.githubusercontent.com/268ac512e333b69600eb9773a8f80b7a251f4d6149642a50a551d4798183d621/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642 "Logo Title Text 1")

### Getting Started

#### Prerequisites
* npm

#### Installation
This project does not rely on any external dependencies or services.
1. Clone the repo ```git clone https://github.com/ggar46/Eventonica/tree/eventonicabranch <NAMENEWDIRECTORY>```
2. Install NPM packages ```npm install```
3. Add the database
    * Inside your server directory create a `.env` file and copy there the values that are in `.envexample`
    * Open a terminal window, and go to the psql terminal with the comand `psql`
    * Inside the psql prompt create your database eventonica with the command `create database eventonica;` (don't forget the semicolon!
    * Go inside the server directory of your project, and run the command `psql -d eventonica -f db.sql` that will create a table `events` with 5 rows inside your db eventonica. 


### Usage
Features
* Delete events by pressing the labelled delete buttons.
* Add events by filling out the event title and location, and select the date.
* Toggle favorited and unfavorited events by clicking the favorite button. The black heart will turn red when the event has been favorited.


### Contributing
If you have a suggestion that would make this better, please fork the repo and create a pull request:
    1. Fork the Project
    2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
    3. Commit your Changes (git commit -m 'Add some AmazingFeature')
    4. Push to the Branch (git push origin feature/AmazingFeature)
    5. Open a Pull Request


### License
Licensed by Gisselle


### Contact
Gisselle Garcia - email@example.com
Project Link - https://github.com/ggar46/Eventonica


### Acknowledgments

* Icons library [fontAwesomeLibrary](https://fontawesomeicons.com/heart)
* Base template by Yosolita1978 [Link to Github](https://github.com/Yosolita1978/2023EventonicaTemplate)

