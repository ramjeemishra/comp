function sendEmail(){
    
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let number = document.getElementById("number").value;
        let message = document.getElementById("message").value;



        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "ramjeemishra23@gmail.com",
            Password : "EF8FED79EB91EED53BBFC252EA934C0A87AB",
            To : 'ramjeemishra77coder@gmail.com',
            From : "ramjeemishra23@gmail.com",
            Subject : "New contact form enquiry",
            Body : "name:" + name + "<br/> user email:" + email + "<br/> number:" + number + "<br/> message:" + message

       

        }).then(
        message => alert(message)
        );
}