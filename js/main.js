import { SendMail } from "./components/mailer.js";

(() => {
    const { createApp } = Vue

    createApp({
        data() {
            return {
                message: 'Hello Vue!'
            }
        },

        methods: {
            processMailFailure(result) {
                // show a failure message in the UI
                // use this.$refs to connect to the elements on the page and mark any empty fields/inputs with an error class
                this.$refs.popUpMessage.innerHTML = "Something went wrong with the form";
                console.log(result);
                // show some errors in the UI here to let the user know the mail attempt was successful
            },
            processMailSuccess(result) {
                // show a success message in the UI
                this.$refs.popUpMessage.innerHTML = "Sucess!! Thanks for emailing me :)";   
                // show some UI here to let the user know the mail attempt was successful
            },

            processMail(event) {        
                // use the SendMail component to process mail
                SendMail(this.$el.parentNode)
                    .then(data => this.processMailSuccess(data))
                    .catch(err => this.processMailFailure(err));
            }
        }
    }).mount('#mail-form')
})();