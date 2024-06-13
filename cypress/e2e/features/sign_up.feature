Feature: Sign up
    One user wants to sign up is demoblaze

    Background: 
        Given a user is on the sign up page

    Scenario: A user sign up with a non existing user
        When the user type the username and password
        Then validate a submit pop up shows the message "Sign up successful."
        #And validate user can login with same credentials

    Scenario: Show validation message when form is submitted empty
        When a user leaves the sign up form blank and press the submit button
        Then validate a submit pop up shows the message "Please fill out Username and Password."

    Scenario: A user sign up with an existing user
        When the user type the username "admin" and password "admin"
        Then validate a submit pop up shows the message "This user already exist."