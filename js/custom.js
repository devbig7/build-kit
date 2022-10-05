'use strict';

window.addEventListener('load', function(){

    const body = document.querySelector('body');

    //Sidemar 

    document.querySelectorAll('.sidebar-button').forEach((i, n) => {
        i.addEventListener('click', function(){
            document.querySelector('#modal').setAttribute("class", "");
            let j = n + 1;
            document.querySelector('#modal').classList.add('modal-active', 'sb'+ j +'-active');
            if (n == 0) {
                document.querySelector('#modal').classList.add('t1');
            }
        });
    });

    document.querySelectorAll('.tab-modal-list a').forEach((i, n) => {
        i.addEventListener('click', function(){
            document.querySelector('#modal').setAttribute("class", "");
            let j = n + 1;
            document.querySelector('#modal').classList.add('modal-active', 'sb1-active', 't'+ j +'');
        });
    });


    document.querySelector('.modal-close-btn').addEventListener('click', function(){
        document.querySelector('#modal').setAttribute("class", "");
    });


    // Ster 1

    document.querySelector('.btn-efficacy').addEventListener('click', function(){
        body.classList.add('select-b', 'form1', 'step1');

        document.querySelector('.header-info h3').innerHTML= "RA Efficacy Data";

    });

    document.querySelector('.btn-safety').addEventListener('click', function(){
        body.classList.add('select-b', 'form2', 'step1');

        document.querySelector('.header-info h3').innerHTML= "RA Safety Data";
    });


    

    let checkbox = document.querySelectorAll('fieldset input');
    const btnSet = document.querySelector('.body-section-content-btn');

    checkbox.forEach(i => {
        i.addEventListener('click', function(){
            btnSet.classList.remove('disable');
        });
    });

    document.querySelector('.reset-btn').addEventListener('click', function(){
        if(body.classList.contains('form1', 'step1')) {
            checkbox.forEach(i => {
                i.checked = false;
            });
        }

        if(body.classList.contains('form1', 'step2')) {
            const formOneStepTwo = document.querySelector("#slider-f1s2");

            formOneStepTwo.value = 0

            formOneStepTwo.oninput =function(){            
                var valPercent = (formOneStepTwo.valueAsNumber  - parseInt(formOneStepTwo.min)) / 
                                    (parseInt(formOneStepTwo.max) - parseInt(formOneStepTwo.min));
                  var style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #C3113A), color-stop('+ valPercent+', #EFF0F0));';
                  formOneStepTwo.style = style;
                };
                formOneStepTwo.oninput();
        }

        btnSet.classList.add('disable');
    });

    document.querySelector('.next-btn').addEventListener('click', function(){
        document.querySelector('.body-section-content').classList.add('step-one');
        checkbox.forEach(i => {
            if(document.querySelector('.body-section-content').classList.contains('step-one')) {
                i.disabled = true;
            }
        });
    });

    document.querySelector('.additional-btn').addEventListener('click', function(){
        body.classList.add('additional-info');
        document.querySelector('#modal').setAttribute("class", "");
        document.querySelector('#modal').classList.add('modal-active', 'form-modal-active');
    });

    document.querySelector('.btn-next').addEventListener('click', function(){
        if(body.classList.contains('step1')) {
            removeStep(1);
            return;
        }

        if(body.classList.contains('step2')) {
            removeStep(2);
            return;
        }

        if(body.classList.contains('step3')) {
            removeStep(3);
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
    }

    document.querySelectorAll(".slider-renge").forEach(function(el) {       
        el.oninput =function(){            
        var valPercent = (el.valueAsNumber  - parseInt(el.min)) / 
                            (parseInt(el.max) - parseInt(el.min));
          var style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #C3113A), color-stop('+ valPercent+', #EFF0F0));';
          el.style = style;
        };
        el.oninput();
    });

    document.querySelectorAll(".slider-renge").forEach((i, n) => {
        i.addEventListener('change', (event) => {
                i.oninput =function(){            
                var valPercent = (i.valueAsNumber  - parseInt(i.min)) / 
                                    (parseInt(i.max) - parseInt(i.min));
                  var style = 'background-image: -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop('+ valPercent+', #C3113A), color-stop('+ valPercent+', #EFF0F0));';
                  i.style = style;

                  document.querySelector('.range-countf1s2 .range-count-one span').innerHTML = Math.trunc(valPercent * 100);
                };
                i.oninput();

                btnSet.classList.remove('disable'); 
        });

    });


    document.querySelector('.help-btn > a:nth-child(1)').addEventListener('click', function(){
        document.querySelector('#modal').setAttribute("class", "");
        document.querySelector('#modal').classList.add('modal-active', 'form-modal-help');
    });
    
});