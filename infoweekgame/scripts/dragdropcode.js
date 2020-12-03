
//=======================EmailTo: azap_ad@yahoo.com 2020 ==============================
var correctCards = 0;
    var objectId = 0;    
    var uiObj = null;
    var gameOne;
    var gameTwo;
    var gameThree;
    var isFlip = false;
    var publicDocImg = "img/documentsPilePub.png";
    var confDocImg = "img/documentsPileConf.png";
    var restrDocImg = "img/documentsPileRest.png";
    var sensDocImg = "img/documentsPileSens.png";
    var publicDocImgFR = "img/documentsPilePub.png";
    var confDocImgFR = "img/documentsPileConf_FRA.png";
    var restrDocImgFR = "img/documentsPileRestreint_FRA.png";
    var sensDocImgFR = "img/documentsPileSensible_FRA.png";        
    
    $( init );
    var arrObjects = [
        {
            'game': {
                'maxItems': 4,
                'titleTxt': 'Digital medium: transporting documents off-site',
                'titleTxtFR': 'Transport hors site des documents sur support numérique',
                'gameTxt': 'Drag and drop the document of each class</br>to the most appropriate placeholder </br>'+
                            '(according to MUHC\'s information classification standards)' + 
                            '</br>when transporting documents off-site',
                'gameTxtFR': 'Glissez-déposez chaque document, </br>'+
                            'sur la clé USB la plus appropriée,</br>' + 
                            'selon les normes de classification de l\'information du CUSM </br>' +
                            'pour le transport hors site de documents stockés </br> sur un support numérique amovible',
                'gameTxtClass' : 'class-digitalMediumMsg',
                'imgSrc': 
                    [
                        {
                            id: 1, 
                            img:'<img src="' + publicDocImg + '" alt="publicPapers" width="190" height="150">',
                            imgFR:'<img src="' + publicDocImgFR + '" alt="publicPapers" width="190" height="150">',
                            level: 1
                        },
                        {
                            id: 3, 
                            img:'<img src="' + restrDocImg + '" alt="confidentialPapers" width="190" height="150">',
                            imgFR:'<img src="' + restrDocImgFR + '" alt="confidentialPapers" width="190" height="150">',
                            level: 3  
                        },
                        {                             
                            id: 4, 
                            img:'<img src="' + confDocImg + '" alt="restrictedPapers" width="190" height="150">',
                            imgFR:'<img src="' + confDocImgFR + '" alt="restrictedPapers" width="190" height="150">',
                            level: 4
                        },
                        {
                            id: 4,
                            img:'<img src="' + sensDocImg + '" alt="sensitivePapers" width="190" height="150">',
                            imgFR:'<img src="' + sensDocImgFR + '" alt="sensitivePapers" width="190" height="150">',
                            level: 4
                        }                        
                    ],
                'imgDest': 
                    [
                        { 
                            id: 1, 
                            img:'<img src="img/USB_drive.png" alt="JustUSBKey" width="70" height="150">', 
                            txt:'On any digital medium',
                            txtFR: 'Sur support amovible quelconque',
                            level: 1
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/frefDocImgFileBriefCase.png" alt="Briefcase" width="160" height="150">', 
                            txt:'Digital medium is in a bag or a briefcase',
                            txtFR: 'Sur support amovible dans une mallette ou un sac fermé',
                            level: 3  
                        },
                        {                             
                            id: 4, 
                            img:'<img src="img/USB_drive-Encryption.png" alt="Encrypted Digital Medium" width="100" height="150">', 
                            txt:'On an encrypted digital medium' ,
                            txtFR: 'Sur support amovible protégé </br> par chiffrement',
                            level: 4
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/USB_drive-Encryption.png" alt="Encrypted Digital Medium" width="100" height="150">', 
                            txt:'On an encrypted digital medium',
                            txtFR: 'Sur support amovible protégé </br> par chiffrement',
                            level: 4
                        }
                    ]
            }, 
            'backgColor' : '#E1F1DF'
        },
        {
            'game': {
                'maxItems': 4,
                'titleTxt': 'Sending documents by email',
                'titleTxtFR': 'Envoi de documents par courriel',
                'gameTxt': 'Drag and drop the document of each class </br>' +
                            'to the most appropriate email service </br>' +
                            '(according to MUHC\'s information classification standards)',
                'gameTxtFR': 'Glissez-déposez chaque document</br>'+
                            'comme pièce jointe, sur le service</br>'+
                            'de courriel électronique le plus approprié,</br>' + 
                            'selon les normes de classification</br>' +
                            'de l\'information du CUSM.',
                'gameTxtClass' : 'class-emailsMsg',
                'imgSrc': 
                    [
                        {
                            id: 1, 
                            img:'<img src="' + publicDocImg + '" alt="publicPapers" width="190" height="150">',
                            imgFR:'<img src="' + publicDocImgFR + '" alt="publicPapers" width="190" height="150">',
                            level: 1
                        },
                        {
                            id: 2, 
                            img:'<img src="' + restrDocImg + '" alt="restrictedPapers" width="190" height="150">',
                            imgFR:'<img src="' + restrDocImgFR + '" alt="confidentialPapers" width="190" height="150">',
                            level: 2
                        },
                        { 
                            id: 4, 
                            img:'<img src="' + confDocImg + '" alt="confidentialPapers" width="190" height="150">',
                            imgFR:'<img src="' + confDocImgFR + '" alt="restrictedPapers" width="190" height="150">',
                            level: 4
                        },
                        {
                            id: 4,
                            img:'<img src="' + sensDocImg + '" alt="sensitivePapers" width="190" height="150">',
                            imgFR:'<img src="' + sensDocImgFR + '" alt="sensitivePapers" width="190" height="150">',
                            level: 4
                        }                        
                    ],
                'imgDest': 
                    [
                        { 
                            id: 1, 
                            img:'<img src="img/refDoc_EmailANY.png" alt="RegularEmail" width="130" height="130">', 
                            txt:'Any available email service',
                            txtFR: 'Courrielleur quelconque',
                            level: 1
                        },
                        { 
                            id: 2, 
                            img:'<img src="img/refDoc_EmailMSOutlook.png" alt="microsoft-outlook-logo.png" width="130" height="130">', 
                            txt:'MUHC corporate email service',
                            txtFR: 'Outlook courrielleur institutionnel',  
                            level: 2
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/refDoc_EmailProtonEncrypt.png" alt="Proton_e2e-encryp" width="130" height="130">', 
                            txt:'ProtonMail or other end-to-end encrypted email service',
                            txtFR: 'ProtonMail ou autre courrielleur chiffré de bout-en-bout',
                            level: 4
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/refDoc_EmailProtonEncrypt.png" alt="Proton_e2e-encryp" width="130" height="130">', 
                            txt:'ProtonMail or other end-to-end encrypted email service',
                            txtFR: 'ProtonMail ou autre courrielleur chiffré de bout-en-bout',
                            level: 4
                        }
                    ]
            }, 
            'backgColor' : '#FFF8DC'
        },
        {
            'game': {
                'maxItems': 4,
                'titleTxt': 'Cloud storage for sharing documents',
                'titleTxtFR': 'Stockage dans le nuage pour partager des documents',
                'gameTxt': 'Drag and drop the document of each class </br>' +
                            'to the most appropriate cloud service </br>' +
                            '(according to MUHC\'s information classification standards)',
                'gameTxtFR': 'Glissez-déposez chaque document</br>'+
                            'sur le service infonuagique le plus approprié,</br>' + 
                            'selon les normes de classification de l\'information du CUSM.',
                'gameTxtClass' : 'class-cloudsMsg',
                'imgSrc': 
                    [
                        {
                            id: 1, 
                            img:'<img src="' + publicDocImg + '" alt="publicPapers" width="190" height="150">',
                            imgFR:'<img src="' + publicDocImg + '" alt="publicPapers" width="190" height="150">',
                            level: 1
                        },
                        {
                            id: 2, 
                            img:'<img src="' + restrDocImg + '" alt="restrictedPapers" width="190" height="150">',
                            imgFR:'<img src="' + restrDocImgFR + '" alt="restrictedPapers" width="190" height="150">',
                            level: 2                            
                        },
                        { 
                            id: 3, 
                            img:'<img src="' + confDocImg + '" alt="confidentialPapers" width="190" height="150">',
                            imgFR:'<img src="' + confDocImgFR + '" alt="restrictedPapers" width="190" height="150">',
                            level: 3
                        },
                        {
                            id: 4,
                            img:'<img src="' + sensDocImg + '" alt="sensitivePapers" width="190" height="150">',
                            imgFR:'<img src="' + sensDocImgFR + '" alt="sensitivePapers" width="190" height="150">',
                            level: 4
                        }                        
                    ],
                'imgDest': 
                    [
                        { 
                            id: 1, 
                            img:'<img src="img/refDoc_CloudANY.png" alt="cloud-storage" width="130" height="130">', 
                            txt:'Any cloud service accessible by employees',
                            txtFR: 'Solution infonuagique quelconque',
                            level: 1
                        },
                        { 
                            id: 2, 
                            img:'<img src="img/refDoc_CloudRestricted.png" alt="refDoc_CloudRestricted" width="130" height="130">', 
                            txt:'Only cloud services supporting file encryption',
                            txtFR: 'Solution infonuagique qui chiffre les données sur ses serveurs',
                            level: 2
                                                       
                        },
                        { 
                            id: 3, 
                            img:'<img src="img/refDoc_CloudMSTEAMS_MUHC.png" alt="refDoc_CloudConfidential" width="130" height="130">', 
                            txt:'MS TEAMS </br>MUHC corporate cloud',
                            txtFR: 'MS Teams </br> solution infonuagique corporative au CUSM',
                            level: 3 
                        },
                        { 
                            id: 4, 
                            img:'<img src="img/refDoc_CloudRestrictedNextCloud.png" alt="nextCloud" width="130" height="130">', 
                            txt:'NextCloud </br> MUHC protected cloud',
                            txtFR: 'NextCloud </br> Solution sécurisée </br> du CUSM',
                            level: 4
                        }
                    ]
            }, 
            'backgColor' : '#CCCCFF'
        }        
    ];
    
    // leftTopColMsg();

    function init() {
        //set initial images:      
                     
        var langTxt = document.getElementById("langTxt").textContent.trim();
         
       // console.log('Lang value langTxt:',langTxt);
        var docImg = []; //to store images for items to drag-n-drop
        var imgDest = []; //to store placeholders where to drop
        var gameText = arrObjects[objectId].game.gameTxt; // game message text               
        var titleTxt = "";
        gameTxtClass = arrObjects[objectId].game.gameTxtClass; // game message decoration class
        var langValue = document.getElementById("langID").value;

        if (langValue == 'FRA') {
            titleTxt = arrObjects[objectId].game.titleTxt;
            gameText = arrObjects[objectId].game.gameTxt; 
        } else {
            titleTxt = arrObjects[objectId].game.titleTxtFR;
            gameText = arrObjects[objectId].game.gameTxtFR; 
        }

        var maxItems = arrObjects[objectId].game.maxItems;
        for (let i = 0; i < arrObjects[objectId].game.imgSrc.length; i++) {
            docImg.push (arrObjects[objectId].game.imgSrc[i]);
                        
        }
        docImg = shuffle(docImg);
        //console.log('docImg[]: ', docImg);
        for (let i = 0; i < arrObjects[objectId].game.imgDest.length; i++) {            
            imgDest.push (arrObjects[objectId].game.imgDest[i]);
        }
        imgDest = shuffle(imgDest);
        //console.log('imgDest[]: ', imgDest);
        var backColor = arrObjects[objectId].backgColor;
        
        //show background div:
        // adding a class: class-backgroundDiv     
        $('#backgroundDiv').removeClass('class-dimBackground');
        $('#backgroundDiv').addClass('class-backgroundDiv');
        $('#backgroundDiv').show();               
        
        // show game selector:
        $('#selectGame').show();
        //hidePageObjecs();      
        $('#successMessage').hide();  // Hide the success message  
        $('#failedMessage').hide(); // Hide the failure message
        $('#infoMessage').hide();  // Hide info Message

        //setting correct css props for success messages
        $('#successMessage').css( {
            left: '85%',
            top: '250px',
            width: 0,
            height: 0
        } );
        //setting correct css props for failure messages  
        $('#failedMessage').css( {
            left: '85%',
            top: '250px',
            width: 0,
            height: 0
        } );
        //setting correct css props for info messages
        $('#infoMessage').css( {
            left: '85%',
            top: '250px',
            width: 0,
            height: 0
        } );

        // Reset the game
        correctCards = 0;
        failedTurn = 0;        
        $('#textMsg').html( '<h1>' + titleTxt + '</h1>');
        $('#cardPile').html( '' );
        $('#cardSlots').html( '' );
        $("#content").css("background-color", backColor);
        // Create the pile of shuffled cards
        for (let k = 0; k < maxItems; k++) {
            if (langValue == 'FRA') {
                $('<div>' + docImg[k].img + '</div>').data( 'numberLevel', {'number': docImg[k].id, 'level': docImg[k].level }).attr( 'id', 'card'+1 ).appendTo( '#cardPile' ).draggable( {
                    containment: '#content',
                    stack: '#cardPile div',
                    cursor: 'move',
                    revert: true
                    } );
            } else {
                $('<div>' + docImg[k].imgFR + '</div>').data( 'numberLevel', {'number': docImg[k].id, 'level': docImg[k].level }).attr( 'id', 'card'+1 ).appendTo( '#cardPile' ).draggable( {
                    containment: '#content',
                    stack: '#cardPile div',
                    cursor: 'move',
                    revert: true
                    } );
            }
            
            //$("#gameTextDiv").html(gameText);
            $("#textMessage").html('<h4>'+gameText+'</h4>');
            $("#textMessage").removeClass(); // removind all classes 'gameTxtClass' : 'class-emailsMsg',
            $("#textMessage").addClass(gameTxtClass);
            if (langValue == 'FRA') {
                $('<div>' + imgDest[k].img + '<h4 style="margin-top: -5px; z-index: 99;">' + imgDest[k].txt + '</h4></div>').data( 'numberLevel', {'number': imgDest[k].id, 'level': imgDest[k].level}).appendTo( '#cardSlots' ).droppable( {
                    accept: '#cardPile div',
                    hoverClass: 'hovered',
                    drop: handleCardDrop
                    } );
            } else {
                $('<div>' + imgDest[k].img + '<h4 style="margin-top: -5px; z-index: 99;">' + imgDest[k].txtFR + '</h4></div>').data( 'numberLevel', {'number': imgDest[k].id, 'level': imgDest[k].level}).appendTo( '#cardSlots' ).droppable( {
                    accept: '#cardPile div',
                    hoverClass: 'hovered',
                    drop: handleCardDrop
                    } );
            }

            // $('<div>' + imgDest[k].img + '<h4 style="margin-top: -10px;">' + imgDest[k].txt + '</h4></div>').data( 'number', imgDest[k].id ).appendTo( '#cardSlots' ).droppable( {
            //     accept: '#cardPile div',
            //     hoverClass: 'hovered',
            //     drop: handleCardDrop
            //     } );
        }   
    }

    function handleCardDrop( event, ui ) {
        var slotNumber = $(this).data( 'numberLevel' );
        var slotLevel  = $(this).data( 'numberLevel' );
        var cardNumber = ui.draggable.data( 'numberLevel' );
        var cardLevel  = ui.draggable.data( 'numberLevel' );     
        //console.log('slotNumber: ',slotNumber,', cardNumber: ',cardNumber);
        // If the card was dropped to the correct slot,
        // change the card colour, position it directly
        // on top of the slot, and prevent it being dragged
        // again  
        if ( slotNumber.number == cardNumber.number ) { 
            ui.draggable.addClass( 'correct' );
            ui.draggable.draggable( 'disable' );
            $(this).droppable( 'disable' );
            ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
            ui.draggable.draggable( 'option', 'revert', false );
            correctCards++;
            //console.log('Correct: ui: ',ui);
        }  else {
            var msgObj = '#failedMessage';
            if ( slotLevel.level > cardLevel.level) {
                //console.log(' slotLevel (',slotLevel.level,') is greater than cardLevel (',cardLevel.level,')');
                msgObj = '#infoMessage';
            } else {
                //console.log(' cardLevel (',cardLevel.level,') is greater than slotLevel (',slotLevel.level,')');
                msgObj = '#failedMessage';
            }
            // if this is incorrect card dropped:
            ui.draggable.addClass( 'incorrect' );
            uiObj = ui;
            //console.log('Incorrect: uiObj: ',uiObj);
            //ui.draggable.draggable( 'disable' );
            //$(this).droppable( 'disable' );
            //ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
            //ui.draggable.draggable( 'option', 'revert', false );
            $('#backgroundDiv').addClass('class-dimBackground');
            $('#backgroundDiv').show();  
            $(msgObj).show();
            $(msgObj).animate( {
                left: '35%',
                top: '200px',
                width: '400px',
                height: '100px',
                opacity: 1
            } );
            //ui.draggable.removeClass();
        }
        // If all the cards have been placed correctly then display a message
        // and reset the cards for another go
        if ( correctCards == 4 ) {
            $('#successMessage').show();
            $('#successMessage').animate( {
            left: '35%',
            top: '200px',
            width: '400px',
            height: '100px',
            opacity: 1
            } );
            //console.log(' objectId = ', objectId,' - time to swap the values!')
        }
        checkGameState(objectId);
    }

    function clearWrongDrop() {
        //console.log('Wrong placement!');
        $('#backgroundDiv').removeClass('class-dimBackground');
        $('#backgroundDiv').hide();
        $('#successMessage').hide();  // Hide the success message  
        $('#failedMessage').hide(); // Hide the failure message
        $('#infoMessage').hide(); // Hide the failure message
        //setting correct css props for success messages
        $('#successMessage').css( {
            left: '85%',
            top: '250px',
            width: 0,
            height: 0
        } );
        //setting correct css props for failure messages  
        $('#failedMessage').css( {
            left: '85%',
            top: '250px',
            width: 0,
            height: 0
        } );
        //setting correct css props for info messages  
        $('#infoMessage').css( {
            left: '85%',
            top: '250px',
            width: 0,
            height: 0
        } );
        //$('#card1').removeClass( 'incorrect' );
        uiObj.draggable.removeClass();
    }

    function leftTopColMsg() {   
        //   $("#rightTopColMsg").click(function(){
        //     $("#selectGame").hide();
        // });
        //showPageObjecs();
        objectId=0;
        init();
        $("#selectGame").hide();  
        $('#backgroundDiv').hide();
        $('#gameTextDiv').hide();
        $('#imgTxtMessage').removeClass("textMessageEmail");
      }
      function clickTopRight() { 
          // Manage Document Store and transportation + USB
        // $( init );
        //showPageObjecs();
        showPageObjecs();
        if ( isFlip === true ) {            
            m = $('#cardPile');
            n = $('#cardSlots');
            m.attr('id','cardSlots');
            n.attr('id','cardPile');
            $('#cardPile').hide();
            $('#cardSlots').hide();
            $('#cardPile').show();
            $('#cardSlots').show();
            isFlip = false;
        }        
        objectId=0;
        init();
        $("#selectGame").hide();
        $('#backgroundDiv').hide();
        $('#cardPile').removeClass("cardPileVertical");
        $('#cardSlots').removeClass("cardSlotsVertical");
        $('#cardPile').addClass("cardPile");
        $('#cardSlots').addClass("cardSlots");
        $('#gameTextDiv').removeClass("gameTextVerticalDiv");
        $('#imgTxtMessage').removeClass("textMessageFiles");
        $('#imgTxtMessage').removeClass("textMessageEmail");
        $('#imgTxtMessage').removeClass("textMessageCloud")
        $('#gameTextDiv').addClass("gameTextHorizDiv");
        $('#imgTxtMessage').addClass("textMessageFiles");
        $('#textMessage').addClass("imgTxtClear");

      }
      function leftBotColMsg() { 
        // $( init );
        showPageObjecs();
        if ( isFlip === true ) {            
                m = $('#cardPile');
                n = $('#cardSlots');
                m.attr('id','cardSlots');
                n.attr('id','cardPile');
                $('#cardPile').hide();
                $('#cardSlots').hide();
                $('#cardPile').show();
                $('#cardSlots').show();
                isFlip = false;
        }  
        objectId=1;
        init();
        $("#selectGame").hide();
        $('#backgroundDiv').hide();
        $('#cardPile').removeClass("cardPile");
        $('#cardSlots').removeClass("cardSlots");
        $('#cardPile').addClass("cardPileVertical");
        $('#cardSlots').addClass("cardSlotsVertical");
        $('#gameTextDiv').removeClass("gameTextHorizDiv");         
        $('#imgTxtMessage').removeClass("textMessageFiles");
        $('#imgTxtMessage').removeClass("textMessageEmail");
        $('#imgTxtMessage').removeClass("textMessageCloud");
        $('#gameTextDiv').addClass("gameTextVerticalDiv");
        $('#textMessage').addClass("imgTxtClear");
        $('#imgTxtMessage').addClass("textMessageEmail");  
      }

      function rightBotColMsg() { 
        // $( init );      
        showPageObjecs();
        $('#cardPile').removeClass();
        $('#cardSlots').removeClass();

        if ( isFlip === false ) {            
            m = $('#cardPile');
            n = $('#cardSlots');
            m.attr('id','cardSlots');
            n.attr('id','cardPile');
            $('#cardPile').hide();
            $('#cardSlots').hide();
            $('#cardPile').show();
            $('#cardSlots').show();            
            isFlip = true;
        }  
        objectId=2;
        init();
        $("#selectGame").hide();
        $('#backgroundDiv').hide();    
        
        $('#cardPile').removeClass("cardPileVertical");
        $('#cardSlots').removeClass("cardSlotsVertical");
        
        $('#cardPile').addClass("cardPile");
        $('#cardSlots').addClass("cardSlots");
        $('#gameTextDiv').removeClass("gameTextVerticalDiv");
        // $('#imgTxtMessage').removeClass("textMessageFiles");
        // $('#imgTxtMessage').removeClass("textMessageEmail");
        //$('#imgTxtMessage').removeClass("textMessageCloud")
        $('#gameTextDiv').addClass("gameTextHorizDiv");
        $('#imgTxtMessage').addClass("textMessageCloud");
        $('#textMessage').addClass("imgTxtClear");                
      }

      function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }      
        return array;
      }

function closeTheGame() {
    hidePageObjecs();
    checkGameState(objectId);

    $('#cardPile').removeClass("cardPileVertical");
    $('#cardSlots').removeClass("cardSlotsVertical");
    $('#gameTextDiv').removeClass("gameTextVerticalDiv");
    $('#imgTxtMessage').removeClass();

    if ( isFlip === true) {
        m = $('#cardPile');
        n = $('#cardSlots');
        m.attr('id','cardSlots');
        n.attr('id','cardPile');
        $('#cardPile').hide();
        $('#cardSlots').hide();
        $('#cardPile').show();
        $('#cardSlots').show();
        isFlip = false;
    }
    objectId=0;
    init();
}

function checkGameState (objId) {
    var starsString = "" ; 
    var blankStarString = "" ;
    var oldScore = 0;
    switch (objectId) {
        case 0:
            if ( gameOne === null || gameOne === undefined || typeof gameOne == "undefined") {
                gameOne = {
                    score : 0
                };                     
            }
            oldScore = gameOne.score;
            if (oldScore < correctCards ) {
                gameOne = {
                    score : correctCards
                };
            }
            var element = document.getElementById("gameOne");
            for (let i = 0; i < gameOne.score; i++) {
                starsString += "<span class='class-starYellow'>&#9733; </span>";        
            }
            for (let i = 0; i < (4 - gameOne.score); i++) {
                blankStarString +="<span class='class-starWhite'>&#9733; </span>";
            }
            element.innerHTML = starsString + blankStarString;  
            break;

        case 1:
            if ( gameTwo === null || gameTwo === undefined || typeof gameTwo == "undefined") {
                gameTwo = {
                    score : 0
                };                     
            }
            oldScore = gameTwo.score;
            if (oldScore < correctCards ) {
                gameTwo = {
                    score : correctCards
                };
            }   
            var element = document.getElementById("gameTwo");
            for (let i = 0; i < gameTwo.score; i++) {
                starsString += "<span class='class-starYellow'>&#9733; </span>";       
            }
            for (let i = 0; i < (4 - gameTwo.score); i++) {
                blankStarString +="<span class='class-starWhite'>&#9733; </span>";
            }            
            element.innerHTML = starsString + blankStarString;            
            break;    
        case 2:
            if ( gameThree === null || gameThree === undefined || typeof gameThree == "undefined") {
                gameThree = {
                    score : 0
                };                     
            }
            oldScore = gameThree.score;
            if (oldScore < correctCards ) {
                gameThree = {
                    score : correctCards
                };
            }   
            var element = document.getElementById("gameThree");
            for (let i = 0; i < gameThree.score; i++) {
                starsString += "<span class='class-starYellow'>&#9733; </span>";        
            }
            for (let i = 0; i < (4 - gameThree.score); i++) {
                blankStarString +="<span class='class-starWhite'>&#9733; </span>";
            }  
            element.innerHTML = starsString + blankStarString; 

        break;
        default:
            console.log("game State verification.... ");
            break;
    }
}

function hidePageObjecs() {
    // using jQuery
    //console.log('!!! Time to hide page content!');
    $('#pageHeader').hide();
    $("#content").hide(); 
    // $("#pageFoolter").hide();
    // $("#selectGame").hide();
    // $('#backgroundDiv').hide();     
    
    // $('#cardPile').hide();
    // $('#cardSlots').hide();
    // $('#gameTextDiv').hide();
    // $('#imgTxtMessage').hide();  
    // $('#textMessage').hide();
}

function showPageObjecs() {
    // using jQuery
    //console.log('!!! Time to show page content!');
    $('#pageHeader').show();
    $("#content").show(); 
    // $("#pageFoolter").show();
}


function changeLang () {
    var langObj = document.getElementById("langTxt");
    var titleObj = document.getElementById("titleTxt");
    
    var langTxt = document.getElementById("langTxt").innerHTML;
    var titleTxt = document.getElementById("titleTxt").innerHTML; 

    var langValue = document.getElementById("langID").value;

    var btnSuccess = document.getElementById("btnSuccess");
    var btnFail = document.getElementById("btnFail");
    var btnTryAgain = document.getElementById("btnTryAgain");

    var msgCongrats = document.getElementById("msgCongrats");
    var msgFail = document.getElementById("msgFail");
    var msgTryAgain = document.getElementById("msgTryAgain");

    // var col1Title = document.getElementById("col1Title");
    // var col2Title = document.getElementById("col2Title");
    // var col3Title = document.getElementById("col3Title");
    
    if (langValue == 'FRA') {
      langTxt = 'EN';
      //langObj.textContent = 'FR';
      titleTxt = "Appliquez les normes de classification</br>pour la sécurité de l\'information au CUSM";
      gameHintTitle = gameHintTitleFR;
      langValue = 'ENG';
      document.getElementById("col1Title").innerHTML = "Support </br> numérique";
      document.getElementById("col2Title").innerHTML = "Courriel </br> électronique";
      document.getElementById("col3Title").innerHTML = "Stockage </br> dans le nuage ";
      btnSuccess.innerText = "Jouer à un autre mini-jeu";
      btnFail.innerText = "Réessayez";
      btnTryAgain.innerText = "Réessayez";

      msgCongrats.innerHTML = "Bien joué !";
      msgFail.innerHTML = "Désolé, mauvaise réponse";
      msgTryAgain.innerHTML = "Ce choix est possible," + "</br> " + " mais il n'est pas optimal.";

      document.getElementById("langID").value = langValue;
      console.log('Next Lang Value: ',langValue);
      
    } else {
      langTxt = 'FR';
      //langObj.textContent = 'EN';
      titleTxt = "Practice MUHC\'s classification standards </br> for Information security";
      gameHintTitle = gameHintTitleEN;
      langValue = 'FRA';
      document.getElementById("col1Title").innerHTML = "Digital </br> medium";
      document.getElementById("col2Title").innerHTML = "Emails";
      document.getElementById("col3Title").innerHTML = "Cloud </br> storage";
      btnSuccess.innerText = "Play another minigame!";
      btnFail.innerText = "Try again!";
      btnTryAgain.innerText = "Try a better option!";

      msgCongrats.innerHTML = "Well done!";
      msgFail.innerHTML = "Sorry, incorrect answer!";
      msgTryAgain.innerHTML = "Although possible," + "</br> " + "this choice is suboptimal.";

      document.getElementById("langID").value = langValue;
      console.log('Next Lang Value: ',langValue);
      //langObj.innerHTML = langTxt;  
      // document.getElementById("titleTxt").innerHTML  = "Practice MUHC\'s classification standards for Information security";
    }

    titleObj.innerHTML = titleTxt;
    langObj.innerHTML = langTxt;   
    gameHintBox.innerHTML = '<h6>'+gameHintTitle+'</h6>';      
    console.log('Lang value langTxtL:',langTxt);
    
    //location.reload();
  }



function sleepNow() {
    // console.log(" ----> Sleep process!!! For ",duration," sec");

    tmr = false, cnt = 0;
            setInterval(function(){
                if(tmr) timer.innerText = ++cnt;
            },10);

	// return new Promise(resolve => {
	// 	setTimeout(() => {
	// 		resolve()
	// 	}, duration * 1000)
	// })
}  

function drawProgress() {
    console.log("==> Time to sleep for some period!");
    const barObjDiv = document.getElementById("progressBarDiv");
    barObjDiv.style.display = "block";
    var iBar = 0;
    function move() {
        if (iBar==0) {
            iBar = 1;
            var elem = document.getElementById("progressBar");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
                if ( width >= 100) {
                    clearInterval(id);
                    iBar = 0;
                } else {
                    width ++;
                    elem.style.width = width + "%";
                }
            }
        }
    }    
    barObjDiv.style.display = "none";
    console.log("==> Time to wake up!");
    // await sleepNow(15);
}