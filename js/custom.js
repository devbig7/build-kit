'use strict';

window.addEventListener('load', function(){
    var cancel;

    const body = document.querySelector('body'),
          modalSection = document.querySelector('#modal');

    //Sidemar Start

    document.querySelectorAll('.sidebar-button').forEach((i, n) => {
        i.addEventListener('click', function(){
            modalSection.setAttribute("class", "");
            body.classList.remove('add', 'add1', 'add2', 'add3', 'add4');
            let j = n + 1;
            modalSection.classList.add('modal-active', 'sb'+ j +'-active');
            if (n == 0) {
                modalSection.classList.add('t1');
            }
        });
    });

    //Sidebar End


    // Modal Start

    document.querySelectorAll('.tab-modal-list a').forEach((i, n) => {
        i.addEventListener('click', function(){
            modalSection.setAttribute("class", "");
            let j = n + 1;
            modalSection.classList.add('modal-active', 'sb1-active', 't'+ j +'');
        });
    });


    document.querySelector('.modal-close-btn').addEventListener('click', function(){
        modalSection.setAttribute("class", "");
    });

    // Modal End


    // Header Change Start 

    document.querySelector('.btn-efficacy').addEventListener('click', function(){
        body.classList.add('select-b', 'form1', 'step1');

        document.querySelector('.header-info h3').innerHTML= "RA Efficacy Data";
        document.querySelector('.step-info-text-coun').innerHTML= "Efficacy Questions Remaining";
        document.querySelector('.step-info-number-coun').innerHTML= "3";
    });

    document.querySelector('.btn-safety').addEventListener('click', function(){
        body.classList.add('select-b', 'form2', 'step1');

        document.querySelector('.header-info h3').innerHTML= "RA Safety Data";
        document.querySelector('.step-info-text-coun').innerHTML= "Safety Questions Remaining";
        document.querySelector('.step-info-number-coun').innerHTML= "3";
    });


    // Header Change End
    

    let checkbox = document.querySelectorAll('fieldset input');
    const btnSet = document.querySelector('.body-section-content-btn');

    // Checkbox Field Start

    checkbox.forEach(i => {
        i.addEventListener('click', function(){
            btnSet.classList.remove('disable');
        });
    });

    // Checkbox Field Start

    // Btn Reset Start

    document.querySelector('.reset-btn').addEventListener('click', function(){
        if(body.classList.contains('form1', 'step1')) {
            checkbox.forEach(i => {
                i.checked = false;
            });
        }

        if(body.classList.contains('form2', 'step1')) {
            checkbox.forEach(i => {
                i.checked = false;
            });
        }

        if(body.classList.contains('form2', 'step4')) {
            checkbox.forEach(i => {
                i.checked = false;
            });
        }

        btnSet.classList.add('disable');
    });

    // Btn Reset End 

    document.querySelector('.next-btn').addEventListener('click', function(){
        document.querySelector('.body-section-content').classList.add('step-one');
        if(body.classList.contains('form1')) {
            if(body.classList.contains('step2')) {
                if(document.querySelector('.body-section-content').classList.contains('step-one')) {
                   document.querySelector('#slider-f1s2').disabled = true;
                }
            }
            if(body.classList.contains('step3')) {
                if(document.querySelector('.body-section-content').classList.contains('step-one')) {
                   document.querySelector('#slider-f1s3').disabled = true;
                }
            }
            if(body.classList.contains('step4')) {
                if(document.querySelector('.body-section-content').classList.contains('step-one')) {
                   document.querySelector('#slider-f1s41').disabled = true;
                   document.querySelector('#slider-f1s42').disabled = true;
                }
            }    
        } else {
            if(body.classList.contains('step2')) {
                if(document.querySelector('.body-section-content').classList.contains('step-one')) {
                   document.querySelector('#slider-f2s21').disabled = true;
                   document.querySelector('#slider-f2s22').disabled = true;
                }
            }
            if(body.classList.contains('step3')) {
                if(document.querySelector('.body-section-content').classList.contains('step-one')) {
                   document.querySelector('#slider-f2s21').disabled = true;
                   document.querySelector('#slider-f2s22').disabled = true;
                }
            }
        }
        checkbox.forEach(i => {
            if(document.querySelector('.body-section-content').classList.contains('step-one')) {
                i.disabled = true;
            }
        });
    });

    // Btn Next info Start

    document.querySelector('.btn-next').addEventListener('click', function(){
        if(body.classList.contains('step2')){
            if(body.classList.contains('form1')){
                document.querySelector('.step-info-text-coun').innerHTML= "Efficacy Question Remaining";
            }
            if(body.classList.contains('form2')){
                document.querySelector('.step-info-text-coun').innerHTML= "Safety Question Remaining";
            }
        }

        if(body.classList.contains('step3')){
            if(body.classList.contains('form1')){
                document.querySelector('.step-info-text-coun').innerHTML= "Efficacy Questions Remaining";
            }
            if(body.classList.contains('form2')){
                document.querySelector('.step-info-text-coun').innerHTML= "Safety Questions Remaining";
            }
        }

        if(body.classList.contains('step1')) {
            removeStep(1);
            document.querySelector('.step-info-number-coun').innerHTML= "2";
            // if(body.querySelector('.body-section').classList.contains('repeat-step3')){
            //     document.querySelector('.body-section-content').classList.add('step-one'); 
            // }
            // if(body.querySelector('.body-section').classList.contains('repeat-step4')){
            //     document.querySelector('.body-section-content').classList.add('step-one'); 
            // }
            return;
        }

        if(body.classList.contains('step2')) {
            removeStep(2);
            document.querySelector('.step-info-number-coun').innerHTML= "1";
            // if(body.querySelector('.body-section').classList.contains('repeat-step3-one')){
            //     document.querySelector('.body-section-content').classList.add('step-one'); 
            // }
            // if(body.querySelector('.body-section').classList.contains('repeat-step4')){
            //     document.querySelector('.body-section-content').classList.add('step-one'); 
            // }
            return;
        }

        if(body.classList.contains('step3')) {
            removeStep(3);
            document.querySelector('.step-info-number-coun').innerHTML= "0";
            // if(body.querySelector('.body-section').classList.contains('repeat-step3')){
            //     document.querySelector('.body-section').classList.remove('repeat-step3'); 
            // }
            // if(body.querySelector('.body-section').classList.contains('repeat-step3-one')){
            //     document.querySelector('.body-section').classList.remove('repeat-step3-one'); 
            // }
            // if(body.classList.contains('repeat-step4-one')){
            //     document.querySelector('.body-section-content').classList.add('step-one'); 
            // }
            return;
        }

        if(body.classList.contains('step4')) {
            removeStep(4);
            return;
        }
    });

    function removeStep(number) {
        let nextNumber = number + 1;
        body.classList.remove('additional-info');
        btnSet.classList.add('disable');
        document.querySelector('#modal').setAttribute("class", "");
        document.querySelector('.body-section-content').classList.remove('step-one');
        body.classList.remove('step' + number);
        body.classList.add('step'+ nextNumber);
        checkbox.forEach(i => {
            i.disabled = false;
        });
    }

    // Btn Next info End 

    // Btn Compleat Start

    document.querySelector('.btn-compleat').addEventListener('click', function(){
        if(document.querySelector('.body-section').classList.contains('repeat-step4')){
            document.querySelector('.body-section').classList.remove('repeat-step4'); 
        }
        if(document.querySelector('.body-section').classList.contains('repeat-step4-one')){
            document.querySelector('.body-section').classList.remove('repeat-step4-one'); 
        }
        modalSection.setAttribute("class", "");
        document.querySelector('.body-section-content').classList.remove('step-one');
       if(body.classList.contains('form1')) {
        document.querySelector('.compleat-block h4 span').innerHTML = 'XELJANZ RA Efficacy Data!'; 
        document.querySelector('.compleat-block p span').innerHTML = 'XELJANZ RA Safety Data.'; 
        document.querySelector('.compleat-block a').classList.add('btn-f2-start');
       } else {
        document.querySelector('.compleat-block h4 span').innerHTML = 'XELJANZ RA Safety Data!'; 
        document.querySelector('.compleat-block p span').innerHTML = 'XELJANZ RA Efficacy Data.';
        document.querySelector('.compleat-block a').classList.add('btn-f1-start'); 
       }
       if(body.classList.contains('finish')){
            body.setAttribute("class", "");
            body.classList.add('compleat', 'finish');
       } else {
            body.setAttribute("class", "");
            body.classList.add('compleat');
       }
        checkbox.forEach(i => {
            i.disabled = false;
            i.checked = false;
        });
    });

    document.querySelector('.compleat-block a').addEventListener('click', function(){
        if(document.querySelector('.compleat-block a').classList.contains('btn-f2-start')){
            body.setAttribute("class", "");
            body.classList.add('select-b', 'form2', 'step1', 'finish');
            document.querySelector('.btn-f2-start').classList.remove('btn-f2-start');
            document.querySelector('.header-info h3').innerHTML= "RA Safety Data";
        document.querySelector('.step-info-text-coun').innerHTML= "Safety Questions Remaining";
        document.querySelector('.step-info-number-coun').innerHTML= "3";
        } else {
            body.setAttribute("class", "");
            body.classList.add('select-b', 'form1', 'step1', 'finish');
            document.querySelector('.btn-f1-start').classList.remove('btn-f1-start');
            document.querySelector('.header-info h3').innerHTML= "RA Efficacy Data";
        document.querySelector('.step-info-text-coun').innerHTML= "Efficacy Questions Remaining";
        document.querySelector('.step-info-number-coun').innerHTML= "3";
        }
    });

    // Btn Compleat End

    document.querySelectorAll(".group-range").forEach(i => { 

        let n = i.querySelector('.slider-renge');
        n.oninput = function() {            
            var valPercent = (n.valueAsNumber  - parseInt(n.min)) / (parseInt(n.max) - parseInt(n.min));
            var style = 'background-color: transparent; background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #C3113A), color-stop('+ valPercent+', #eff0f000));';
            n.style = style;
        };
        n.oninput();
        
        n.addEventListener('change', (event) => {
            n.oninput =function(){            
                var valPercent = (n.valueAsNumber  - parseInt(n.min)) / (parseInt(n.max) - parseInt(n.min));
                var style = 'background-color: transparent; background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #C3113A), color-stop('+ valPercent+', #eff0f000));';
                n.style = style;

                if(body.classList.contains('form1', 'step3')){
                    i.querySelector('.range-count .range-count-one span').innerHTML = n.valueAsNumber;
                    i.querySelector('.range-count .range-count-you span').innerHTML = n.valueAsNumber;
                }else {
                    i.querySelector('.range-count .range-count-one span').innerHTML = Math.trunc(valPercent * 100);
                    i.querySelector('.range-count .range-count-you span').innerHTML = Math.trunc(valPercent * 100);
                }
    
            };
            n.oninput();
    
            btnSet.classList.remove('disable'); 
    
        });

        document.querySelector('.reset-btn').addEventListener('click', function(){
            n.value = 0;
            n.oninput = function() {            
                var valPercent = 0;
                var style = 'background-color: transparent; background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #C3113A), color-stop('+ valPercent+', #eff0f000));';
                n.style = style;
            };
            n.oninput();
            i.querySelector('.range-count .range-count-one span').innerHTML = 0;
            i.querySelector('.range-count .range-count-you span').innerHTML = 0;
        });

    });

    document.querySelectorAll('.slider-rengev2').forEach((i, b) => {
        let n = i;
        n.oninput = function() {            
            var valPercent = (n.valueAsNumber  - n.min) / (n.max - n.min);
            var style = 'background-color: transparent; background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #C3113A), color-stop('+ valPercent+', #eff0f000));';
            n.style = style;
        };
        n.oninput();
        
        n.addEventListener('change', (event) => {
            n.oninput =function(){            
                var valPercent = (n.valueAsNumber - n.min) / (n.max - n.min);
                var style = 'background-color: transparent; background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #C3113A), color-stop('+ valPercent+', #eff0f000));';
                n.style = style;

                if(b == 0){
                    document.querySelector('.range-countsv21 .range-count-one span').innerHTML = n.valueAsNumber.toFixed(2);
                    document.querySelector('.range-countsv21 .range-count-you span').innerHTML = n.valueAsNumber.toFixed(2);
                }
                if(b == 1){
                    document.querySelector('.range-countsv22 .range-count-one span').innerHTML = n.valueAsNumber.toFixed(2);
                    document.querySelector('.range-countsv22 .range-count-you span').innerHTML = n.valueAsNumber.toFixed(2);
                }

    
            };
            n.oninput();
    
            btnSet.classList.remove('disable'); 
    
        });
    });


    document.querySelectorAll('.slider-rengev3').forEach((i, b) => {
        let n = i;
        n.oninput = function() {            
            var valPercent = (n.valueAsNumber  - n.min) / (n.max - n.min);
            var style = 'background-color: transparent; background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #eff0f000), color-stop('+ valPercent+', #eff0f000));';
            n.style = style;
        };
        n.oninput();
        
        n.addEventListener('change', (event) => {
            n.oninput =function(){            
                var valPercent = (n.valueAsNumber - n.min) / (n.max - n.min);
                var style = 'background-color: transparent; background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #eff0f000), color-stop('+ valPercent+', #eff0f000));';
                n.style = style;

                if(b == 0){
                    document.querySelector('.range-countsv31 .range-count-one span').innerHTML = n.valueAsNumber.toFixed(2);
                    document.querySelector('.range-countsv31 .range-count-you span').innerHTML = n.valueAsNumber.toFixed(2);
                }
                if(b == 1){
                    document.querySelector('.range-countsv32 .range-count-one span').innerHTML = n.valueAsNumber.toFixed(2);
                    document.querySelector('.range-countsv32 .range-count-you span').innerHTML = n.valueAsNumber.toFixed(2);
                }

                if(n.valueAsNumber === 2){
                    n.classList.add('input-max');
                }else {
                    n.classList.remove('input-max');
                }

                if(n.valueAsNumber === 0){
                    n.classList.add('input-min');
                }else {
                    n.classList.remove('input-min');
                }
            };
            n.oninput();
    
            btnSet.classList.remove('disable'); 
    
        });
    });


    // Information Step Start

    let heightElementToScroll = document.querySelector('.form-modal-block > div:nth-child(1) > div');
    let heightElementScroll = document.querySelector('.form-modal-block > div:nth-child(1)');

    document.querySelector('.additional-btn').addEventListener('click', function(){
        body.classList.add('additional-info');
        modalSection.setAttribute("class", "");
        modalSection.classList.add('modal-active', 'form-modal-active');
        document.querySelector('.form-modal-block > div:nth-child(1)').scrollTop = 0;
        document.querySelector('.btn-next').classList.add('disable');
        document.querySelector('.btn-compleat').classList.add('disable');
        if(heightElementScroll.scrollTop >= (heightElementToScroll.offsetHeight - heightElementScroll.offsetHeight)){
            document.querySelector('.btn-next').classList.remove('disable');
            document.querySelector('.btn-compleat').classList.remove('disable');
        } else {
            document.querySelector('.btn-next').classList.add('disable');
            document.querySelector('.btn-compleat').classList.add('disable');
        }
    });

    heightElementScroll.addEventListener('scroll', function(){
        if(heightElementScroll.scrollTop >= (heightElementToScroll.offsetHeight - heightElementScroll.offsetHeight)){
            document.querySelector('.btn-next').classList.remove('disable');
            document.querySelector('.btn-compleat').classList.remove('disable');
        } else {
            document.querySelector('.btn-next').classList.add('disable');
            document.querySelector('.btn-compleat').classList.add('disable');
        }
    });

    // Information Step Start


    // Help set Block Btn Start

    document.querySelector('.help-btn > a:nth-child(1)').addEventListener('click', function(){
        body.classList.remove('add', 'add1', 'add2', 'add3', 'add4');
        modalSection.setAttribute("class", "");
        modalSection.classList.add('modal-active', 'form-modal-help');
    });


    document.querySelector('.btn-contine-q').addEventListener('click', function(){
        modalSection.setAttribute("class", "");
        clearTimeout(cancel);
    });


    document.querySelector('.go_to_f2').addEventListener('click', function(){
        body.setAttribute("class", "");
        body.classList.add('select-b', 'form2', 'step1');
        document.querySelector('.header-info h3').innerHTML= "RA Safety Data";
        document.querySelector('.step-info-text-coun').innerHTML= "Safety Questions Remaining";
        document.querySelector('.step-info-number-coun').innerHTML= "3";
    });

    document.querySelector('.go_to_f1').addEventListener('click', function(){
        body.setAttribute("class", "");
        body.classList.add('select-b', 'form1', 'step1');
        document.querySelector('.header-info h3').innerHTML= "RA Efficacy Data";
        document.querySelector('.step-info-text-coun').innerHTML= "Efficacy Questions Remaining";
        document.querySelector('.step-info-number-coun').innerHTML= "3";
    });

    //  Help set Block Btn End

    // Go Home Start

    document.querySelector('.header-logo').addEventListener('click', function(){
        location.reload();
    });

    document.querySelector('.btn-finish').addEventListener('click', function(){
        location.reload();
    });

    document.querySelector('.btn-exit-session').addEventListener('click', function(){
        location.reload();
    });

    // Go Home End 

    let time, time2;

    let inactivityTime = function () {
        window.onload = resetTimer;
        document.onload = resetTimer;
        document.onmousemove = resetTimer;
        document.onmousedown = resetTimer; // touchscreen presses
        document.ontouchstart = resetTimer;
        document.onclick = resetTimer; // touchpad clicks
        document.onkeypress = resetTimer;
        document.addEventListener('scroll', resetTimer, true); // improved; see comments
        
        function logout() {
            if(body.classList.contains('select-b')){
                body.classList.remove('add', 'add1', 'add2', 'add3', 'add4');
                modalSection.setAttribute("class", "");
                modalSection.classList.add('modal-active', 'form-deactive');
                var seconds = 30;
                var el = document.querySelector('.inactive-modal .count');

                function incrementSeconds() {
                    seconds -= 1;
                    el.innerText =  seconds;
                }
                clearTimeout(cancel);
                cancel = setInterval(incrementSeconds, 1000);
                clearTimeout(time2);
                time2 = setTimeout(exitGlobal, 30000);
            }
        }

        function resetTimer() {
          clearTimeout(time);
          time = setTimeout(logout, 30000);
        }

        function exitGlobal() {
            location.reload();
        }
    };

    document.querySelector('.btn-contine-q').addEventListener('click', function(){
        clearTimeout(time2);
    });

    // document.querySelectorAll('.nav-dots > div').forEach((i, n) => {
    //     i.addEventListener('click', function(){
    //         if(body.classList.contains('step2') && n == 0){
    //             body.classList.remove('step2');
    //             body.classList.add('step1');
    //             document.querySelector('.body-section-content').classList.add('step-one');
    //             document.querySelector('.body-section-content-btn').classList.remove('disable');
    //         }
    //         if(body.classList.contains('step3') && n == 0){
    //             body.classList.remove('step3');
    //             body.classList.add('step1');
    //             if(document.querySelector('.body-section-content').classList.contains('step-one')) {
    //                 body.querySelector('.body-section').classList.add('repeat-step3-one');
    //             }else {
    //                 body.querySelector('.body-section').classList.add('repeat-step3');
    //             }
    //             document.querySelector('.body-section-content').classList.add('step-one');
    //             document.querySelector('.body-section-content-btn').classList.remove('disable');
    //         }
    //         if(body.classList.contains('step4') && n == 0){
    //             body.classList.remove('step4');
    //             body.classList.add('step1');
    //             if(document.querySelector('.body-section-content').classList.contains('step-one')) {
    //                 body.querySelector('.body-section').classList.add('repeat-step4-one');
    //             }else {
    //                 body.querySelector('.body-section').classList.add('repeat-step4');
    //             }
    //             document.querySelector('.body-section-content').classList.add('step-one');
    //             document.querySelector('.body-section-content-btn').classList.remove('disable');
    //         }

    //         if(body.classList.contains('step3') && n == 1){
    //             body.classList.remove('step3');
    //             body.classList.add('step2');
    //             if(document.querySelector('.body-section-content').classList.contains('step-one')) {
    //                 body.querySelector('.body-section').classList.add('repeat-step3-one');
    //             }else {
    //                 body.querySelector('.body-section').classList.add('repeat-step3');
    //             }
    //             document.querySelector('.body-section-content').classList.add('step-one');
    //             document.querySelector('.body-section-content-btn').classList.remove('disable');
    //         }
    //         if(body.classList.contains('step4') && n == 1){
    //             body.classList.remove('step4');
    //             body.classList.add('step2');
    //             if(document.querySelector('.body-section-content').classList.contains('step-one')) {
    //                 body.querySelector('.body-section').classList.add('repeat-step4-one');
    //             }else {
    //                 body.querySelector('.body-section').classList.add('repeat-step4');
    //             }
    //             document.querySelector('.body-section-content').classList.add('step-one');
    //             document.querySelector('.body-section-content-btn').classList.remove('disable');
    //         }
    //         if(body.classList.contains('step4') && n == 2){
    //             body.classList.remove('step4');
    //             body.classList.add('step3');
    //             if(document.querySelector('.body-section-content').classList.contains('step-one')) {
    //                 body.querySelector('.body-section').classList.add('repeat-step4-one');
    //             }else {
    //                 body.querySelector('.body-section').classList.add('repeat-step4');
    //             }
    //             document.querySelector('.body-section-content').classList.add('step-one');
    //             document.querySelector('.body-section-content-btn').classList.remove('disable');
    //         }

            
    //     });
    // });

    document.querySelectorAll('.nav-dots > div').forEach((i, n) => {
        i.addEventListener('click', function(){
            if(body.classList.contains('step2')){
                if(n == 0) {
                    body.classList.add('add1', 'add');
                    modalSection.classList.add('modal-active');
                    modalSection.classList.add('madd');
                }
            }
            if(body.classList.contains('step3')){
                if(n == 0) {
                    body.classList.add('add1', 'add');
                    modalSection.classList.add('modal-active');
                    modalSection.classList.add('madd');
                }
                if(n == 1) {
                    body.classList.add('add2', 'add');
                    modalSection.classList.add('modal-active');
                    modalSection.classList.add('madd');
                }
            }
            if(body.classList.contains('step4')){
                if(n == 0) {
                    body.classList.add('add1', 'add');
                    modalSection.classList.add('modal-active');
                    modalSection.classList.add('madd');
                }
                if(n == 1) {
                    body.classList.add('add2', 'add');
                    modalSection.classList.add('modal-active');
                    modalSection.classList.add('madd');
                }
                if(n == 2) {
                    body.classList.add('add3', 'add');
                    modalSection.classList.add('modal-active');
                    modalSection.classList.add('madd');
                }
            }

            
        });
    });

    document.querySelector('.btn-nav-next').addEventListener('click', function(){
        body.classList.add('add-step-next');
        document.querySelector('.btn-nav-close').classList.add('disable');
        modalInfoScroll.forEach((i, n) => {
            i.scrollTop = 0;
            if(i.scrollTop >= (i.querySelector('div').offsetHeight - i.offsetHeight)){
                document.querySelector('.btn-nav-close').classList.remove('disable');
            } else {
                document.querySelector('.btn-nav-close').classList.add('disable');
            }
        });
    });

    const modalInfoScroll = document.querySelectorAll('.nav-info > div > div > .nav-info-s2');

    modalInfoScroll.forEach((i, n) => {
        i.addEventListener('scroll', function(){
            if(i.scrollTop >= (i.querySelector('div').offsetHeight - i.offsetHeight)){
                document.querySelector('.btn-nav-close').classList.remove('disable');
            } else {
                document.querySelector('.btn-nav-close').classList.add('disable');
            }
        });
    });

    document.querySelector('.btn-nav-close').addEventListener('click', function(){
        body.classList.remove('add-step-next', 'add');
        modalSection.classList.remove('modal-active');
        modalSection.classList.remove('madd');
        if( body.classList.contains('add1')) {
            body.classList.remove('add1');
        }
        if( body.classList.contains('add2')) {
            body.classList.remove('add2');
        }
        if( body.classList.contains('add3')) {
            body.classList.remove('add3');
        }
        if( body.classList.contains('add4')) {
            body.classList.remove('add4');
        }
    });

    // function resetRenge() {
    //     alert(document.querySelectorAll('input[type=range]').length);
    //     document.querySelectorAll('input[type=range]').forEach((i, n) => {
    //         i.value = 0;
    //         i.removeAttribute("disabled");
    //     });
    // }

    inactivityTime1();
    
});