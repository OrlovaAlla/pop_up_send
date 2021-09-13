document.addEventListener('DOMContentLoaded', function(){
    function doSomething() {
        console.log('DOM загружен');
      }
      if (document.readyState === 'loading') {  // Загрузка ещё не закончилась
        document.addEventListener('DOMContentLoaded', doSomething);
      } else {  // `DOMContentLoaded` Уже сработал
        doSomething();
      }

      let button = document.querySelector(".button");
      let main_pop_up = document.querySelector(".main_pop-up");
      let close_pop_up = document.querySelector(".close_pop-up");
      let mobile_close_pop_up = document.querySelector(".mobile_close_pop-up");
      let button_pop_up = document.querySelector(".button_pop-up");

      var f_e_mail = document.querySelector("#f_e-mail");
      var f_phone = document.querySelector("#f_phone");
      
      const reg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
      const reg1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      /* открыть pop-up */
      button.addEventListener("click", function (){
        main_pop_up.style.display = "flex";
      }); 
      /* закрыть pop-up */
      close_pop_up.addEventListener("click", function(){
        main_pop_up.style.display = "none";
      });
      mobile_close_pop_up.addEventListener("click", function(){
        main_pop_up.style.display = "none";
      });

      /* маска для поля f_phone */
      f_phone.addEventListener('input', (e) => {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        e.target.value = !x[2] ? x[1] : (x[1]) + '(' + x[2] + ')' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
      });

      button_pop_up.addEventListener("click", function(){
        let f_e_mailv = f_e_mail.value;
        let f_phonev = f_phone.value;
        console.log(f_e_mail.value);
        console.log(f_phone.value);
        
        if(f_e_mailv == ""){
          alert("Не заполнено: e-mail");
          return false;
        } else if (reg1.test(f_e_mailv) == false){
          alert("Неверно заполнено поле email");
          return false;
        } else if (f_phonev.value == ""){
          alert("Не заполнено: телефон");
          return false;
        }
        let formData = new FormData ()
        formData.append("f_e_mailv", f_e_mailv);
        formData.append("f_phonev", f_phonev);
        

        let response = fetch('send.php', {
          method: 'POST',
          body: formData
        });


      });
    

});
