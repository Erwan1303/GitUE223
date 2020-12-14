element = document.getElementById("btn_start");
element.addEventListener('click', function() 

        {
				alert ("coucou");
		});


        element = document.getElementById("case1");
element.addEventListener('click', function() 

        {
                alert ("coucou");
                var case1 = document.getElementById("case1");
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function (){
					console.log(this);
					if (this.readyState == 4 && this.status == 200){
						case1.innerHTML = this.responseText;
					}
				};

				xhr.open("GET", "assets/Php/Phpfile.php", true);
				xhr.responseText = "text";
				xhr.send();
                
		});
