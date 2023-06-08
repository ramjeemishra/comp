function sendEmail(){
    
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let number = document.getElementById("number").value;
        let message = document.getElementById("message").value;



        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "ramjeemishra77coder@gmail.com",
            Password : "20E1C345F13CCFE379FEB8E670080BCFAA28",
            To : 'ramjeemishra77coder@gmail.com',
            From : "ramjeemishra77coder@gmail.com",
            Subject : "New contact form enquiry",
            Body : "name:" + name + "<br/> user email:" + email + "<br/> number:" + number + "<br/> message:" + message

       

        }).then(
        message => alert(message)
        );
}