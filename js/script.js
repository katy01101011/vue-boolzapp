console.log(window);
dayjs.extend(window.dayjs_plugin_customParseFormat);

const app = new Vue(
    {
        el: '#app',
        data: {
            myContacts: [
                {
                    name: 'Vitantonio',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus expedita numquam dolor quaerat error et rem tenetur libero accusantium ut deleniti magni optio inventore, iusto dicta dolorem possimus eaque veritatis.',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Nicola',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Carlo',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'Take your time',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'PERSONAAAA',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Adriano G.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Matteo',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Olga D.',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novit???',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Alex',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Loris B.',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            currentContact: 0,
            newTextMessage: '',
            searchContact: '',
        },
        methods: {
            activeContact(index) {
                this.currentContact = index;
                const activeCont = this.myContacts[index];
                // console.log(this.myContacts[index].messages[messages.length - 1]);
                document.querySelector('.chat-time').style.display = "inline-block";

                setTimeout(function() {
                    document.querySelector('.chat-time').style.display = "none";
                }, 2000);
            },

            sendNewMessage: function() {
                const newMsg = {
                    date: this.getCurrentTime(),
                    message: this.newTextMessage,
                    status: 'sent'
                }
                this.myContacts[this.currentContact].messages.push(newMsg);

                this.newTextMessage = '';
                
                setTimeout(() => {
                    const answer = {
                        date: this.getCurrentTime(),
                        message: 'Ok',
                        status: 'received'
                    }
                    this.myContacts[this.currentContact].messages.push(answer);
                }, 2000);
            },

            getCurrentTime() {
                return dayjs(new Date()).format('DD-MM-YYYY HH:mm:ss')
            },

            getTheTime(date) {
                date = dayjs(date, 'DD-MM-YYYY HH:mm:ss');
                return date.format('HH:mm')
            },

            searchInContact() {
                this.myContacts.forEach( element => {
                    const lowerCaseContact = element.name.toLowerCase();
                    const lowerCaseSearchContact = this.searchContact.toLowerCase();

                    if (lowerCaseContact.includes(lowerCaseSearchContact)) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    };
                })                
            },
            cutMessage(message) {
                const cuttedMessage = message.substr(0, 27) + '...';
                if (message.length > 27) {
                    message = cuttedMessage
                } else {
                    message
                }
                return message
            }
        }
    }
)

const chatTimeNone = setTimeout(function() {
    document.querySelector('.chat-time').style.display = "none";
}, 2000);

const nowDate = dayjs('10/01/2020 15:30:55', 'DD-MM-YYYY HH:mm:ss');
