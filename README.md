# M152-Movie-Database

## Run a Demo
I made a Simple 4 Steps programm on how to start the Application Demo.
### Step 1
Vertify that Docker and Docker-Compose are installed and that the Ports 1235 and 8080 are Free. You need an Active internet connection for the Build Process
### Step 2
Run the [docker-compose.yaml](docker-compose.yaml) File. Wait for it to start up.
### Step 3
Run the Following command.
### Step 4
Open this link [localhost:8080](http://localhost:8080)


## Getting Started

### Pull Requests
Dont Push into Master, it will not work.
Make a Pull-Request to keep the Code Clean.
Make sure your code meets the Eslint Requirements.
After Making you PR, add someone to Review it


### Local Development

#### IDEA
Use intellij or Webstorm, i made Run Configs.

#### ESL
I Added eslint, you can run it over the Run Config or the NPM command.
It will also run on every Push.

#### Database 
For the Database we use a Database on Docker. There is a Run Config.
If you dont run the Container over the Run Config make sure to name the Container "Movie-DB" and
the MYSQL_ROOT_PASSWORD "sml12345" and the MYSQL_ROOT_HOST "%" and use the Local Port 1235.
Passwort für die ersten beiden Benutzer ist sml12345


#### SQL
All the SQL Code to set up the Database needs to be in the [Init.sql File](init.sql).
If you started you docker container over the Run Config or with the correct name you can execute all the SQL statements inside the file with the following command

``` bash
docker exec -it Movie-DB mysql --password=sml12345 --user=root -e "$(cat init.sql)"
```