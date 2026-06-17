const nodemailer=require('nodemailer')

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"jayanthilluru@gmail.com",
        pass:"puyjpnyqtkkxfqmu"

    }
});

const mailOptions={
    from:"jayanthilluru@gmail.com",
    to:"mukteshnaidu07@gmail.com",
    subject:"Test Mail",
    text:"This is a test email sent from Node.js!"

};

transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.log(error)
    }else{
        console.log("Email sent: "+info.response)
    }
});