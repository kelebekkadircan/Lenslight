"use strict";
import nodemailer from 'nodemailer'

const getIndexPage = (req, res) => {

    res.render("index", {
        link: "index"
    })

}

const getAboutPage = (req, res) => {

    res.render("about", {
        link: "about"
    })
}

const getRegisterPage = (req, res) => {

    res.render("register", {
        link: "register"
    })
}

const getLoginPage = (req, res) => {

    res.render("login", {
        link: "login"
    })
}

const getLogout = (req, res) => {
    res.cookie("jwt", "", {
        maxAge: 1,
    });

    res.redirect("/");

}
const getContactPage = (req, res) => {

    res.render("contact", {
        link: "contact"
    })
}

const sendMail = (req, res) => {

    const htmlTemplate = `
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Simple Transactional Email</title>
        <style>
          /* -------------------------------------
              GLOBAL RESETS
          ------------------------------------- */
          
          /*All the styling goes here*/
          
          img {
            border: none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%; 
          }
    
          body {
            background-color: #f6f6f6;
            font-family: sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%; 
          }
    
          table {
            border-collapse: separate;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            width: 100%; }
            table td {
              font-family: sans-serif;
              font-size: 14px;
              vertical-align: top; 
          }
    
          /* -------------------------------------
              BODY & CONTAINER
          ------------------------------------- */
    
          .body {
            background-color: #f6f6f6;
            width: 100%; 
          }
    
          /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
          .container {
            display: block;
            margin: 0 auto !important;
            /* makes it centered */
            max-width: 580px;
            padding: 10px;
            width: 580px; 
          }
    
          /* This should also be a block element, so that it will fill 100% of the .container */
          .content {
            box-sizing: border-box;
            display: block;
            margin: 0 auto;
            max-width: 580px;
            padding: 10px; 
          }
    
          /* -------------------------------------
              HEADER, FOOTER, MAIN
          ------------------------------------- */
          .main {
            background: #ffffff;
            border-radius: 3px;
            width: 100%; 
          }
    
          .wrapper {
            box-sizing: border-box;
            padding: 20px; 
          }
    
          .content-block {
            padding-bottom: 10px;
            padding-top: 10px;
          }
    
    
        </style>
      </head>
      <body>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
          <tr>
            <td>&nbsp;</td>
            <td class="container">
              <div class="content">
    
                <!-- START CENTERED WHITE CONTAINER -->
                <table role="presentation" class="main">
    
                  <!-- START MAIN CONTENT AREA -->
                  <tr>
                    <td class="wrapper">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td>
                            <p>Email: ${req.body.email}</p>
                            <p>Name: ${req.body.name}</p>
                            <p>Message: ${req.body.message}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
    
                <!-- END MAIN CONTENT AREA -->
                </table>
                <!-- END CENTERED WHITE CONTAINER -->
    
    
              </div>
            </td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </body>
    </html>
    `


    try {



        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                user: process.env.MAIL_ADI,
                pass: process.env.MAIL_SIFRE,
            },
        });

        // async..await is not allowed in global scope, must use a wrapper
        async function main() {
            // send mail with defined transport object
            const info = await transporter.sendMail({

                to: "kelebekkadircan3@gmail.com", // list of receivers
                subject: `MAIL FROM ${req.body.email}`,
                html: htmlTemplate,
            });

            res.status(200).json({
                succeeded: true,

            })

            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

            //
            // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
            //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
            //       <https://github.com/forwardemail/preview-email>
            //
        }

        main().catch(console.error);


    } catch (error) {
        res.status(500).json({
            succeded: false,
            error
        })
    }



}



export { getIndexPage, getAboutPage, getRegisterPage, getLoginPage, sendMail, getLogout, getContactPage }