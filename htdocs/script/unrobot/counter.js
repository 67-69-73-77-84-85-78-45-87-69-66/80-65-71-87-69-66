(function(){
	var countContinue=1;
	var actualizarHora=function(){

		//los valores de estas variable definen la fecha limite, con mes, dia, y hora.
		var limMonth=7,
			limDayDate=28,
			limHour=7;

		//Manera de obtener las fechas automaticamente
		var date=new Date(),
			hour=parseInt(date.getHours()),
			minute=parseInt(date.getMinutes()),
			second=parseInt(date.getSeconds()),
			dayDate=parseInt(date.getDate()),
			month=parseInt(date.getMonth());

		//variables que permiten modificar los atributos p de los numeros del contador
		var pHour=document.getElementById('hour'),
			pHour2=document.getElementById('hour2'),
			pMinute=document.getElementById('minute'),
			pMinute2=document.getElementById('minute2'),
			pSecond=document.getElementById('second'),
			pSecond2=document.getElementById('second2'),
			pDayDate=document.getElementById('day'),
			pDayDate2=document.getElementById('day2'),
			pMonth=document.getElementById('month'),
			pMonth2=document.getElementById('month2');

		//variables que permiten modificar los atributos p de el texto debajo de los numeros
		var pUHour=document.getElementById('uHour'),
			pUMinute=document.getElementById('uMinute'),
			pUSecond=document.getElementById('uSecond'),
			pUDayDate=document.getElementById('uDay'),
			pUMonth=document.getElementById('uMonth');

		//funcion de limpieza usada mas adelante
		var countValues=function(){
			month=0;
			dayDate=0;
			hour=0;
			minute=0;
			second=0;
		}

		//variables tipo string que seran iguales a los valores de date,month,day,etc.(la s es de String)
		var sMonth,
			sDay,
			sHour,
			sMinute,
			sSecond;

		//Variables para identificar cuando cambian los valores numericos y animar (n de number)
		var nMonth,
			nDay,
			nHour,
			nMinute,
			nSecond;


		nMonth=month;
		nDay=dayDate;
		nHour=hour;
		nMinute=minute;
		nSecond=document.getElementById('second');

		//Calculo de la cuenta regresiva de s,min,h,dias,meses
		second=60-second;
		$('.s2').css({
			'animation':'rotate'+' '+'1s'+' '+'linear'				
		})
		if(second<60){
			minute++;
		}
		minute=60-minute;
		if(minute<60){
			hour++;
		};
		hour=24-hour;
		if(hour<24){
			dayDate++;
		}
		dayDate=30-dayDate;
		if(dayDate<29){
			month++;
		};
		month=limMonth-month;

		//Limpia los valores para evitar errores y poder evaluar cuando el mes es 0;
		if(month<0){
			month=0;
		};
		if(dayDate<0){
			dayDate=0;
		};
		if(hour<0){
			hour=0;
		};
		if(minute<0){
			minute=0;
		};

		//Actua para calcular el tiempo resttante cuando el mes es 0
		if(month==0){
			dayDate=parseInt(date.getDate());
			dayDate=limDayDate-dayDate;
			if(dayDate==0){
				hour=parseInt(date.getHours());
				if(minute<60){
					hour++;
				}
				hour=limHour-hour;
				if(hour==0 & minute==0 & second==0){
					countValues();
				};
			};
		};
		//Es un seguro, si se llegara agragar una fecha que ya ha pasado,esto deja todo automaticamente en 0
		if(month<0||dayDate<0||hour<0||minute<0||second<0){
			countValues();
		}

		//Se modifican los p con menos de 2 cifras para que aparezcan 0x en el contador, y se guardan una variable string
		if(month<10){
			sMonth="0"+month.toString();
		}else{
			sMonth=month.toString();
		};
		if(dayDate<10){
			sDay="0"+dayDate.toString();
		}else{
			sDay=dayDate.toString();
		};
		if(hour<10){
			sHour="0"+hour.toString();
		}else{
			sHour=hour.toString();
		};
		if(minute<10){
			sMinute="0"+minute.toString();
		}else{
			sMinute=minute.toString();
		};
		if(second<10){
			sSecond="0"+second.toString();
		}else{
			sSecond=second.toString();		
		};

		//Se pasan a char y guardan las variables string
		pMonth.textContent=sMonth.charAt(0);
		pMonth2.textContent=sMonth.charAt(1);
		pDayDate.textContent=sDay.charAt(0);
		pDayDate2.textContent=sDay.charAt(1);
		pHour.textContent=sHour.charAt(0);
		pHour2.textContent=sHour.charAt(1);
		pMinute.textContent=sMinute.charAt(0);
		pMinute2.textContent=sMinute.charAt(1);
		pSecond.textContent=sSecond.charAt(0);
		pSecond2.textContent=sSecond.charAt(1);
	

		if(month==1){
			pUMonth.textContent="mes";
		}else{
			pUMonth.textContent="meses";
		};
		if(dayDate==1){
			pUDayDate.textContent="dia";
		}else{
			pUDayDate.textContent="dias";
		};
		if(hour==1){
			pUHour.textContent="hora";
		}else{
			pUHour.textContent="horas";
		};
		if(minute==1){
			pUMinute.textContent="minuto";
		}else{
			pUMinute.textContent="minutos";
		};
		if(second==1){
			pUSecond.textContent="segundo";
		}else{
			pUSecond.textContent="segundos"		
		};


	};

	actualizarHora();
	var intervalo = setInterval(actualizarHora, 1000);

}())