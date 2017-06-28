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

		//variables que permiten modificar los atributos p de contador
		var pHour=document.getElementById('hour'),
			pMinute=document.getElementById('minute'),
			pSecond=document.getElementById('second'),
			pDayDate=document.getElementById('day'),
			pMonth=document.getElementById('month');

		//funcion de limpieza usada mas adelante
		var countValues=function(){
			month=0;
			dayDate=0;
			hour=0;
			minute=0;
			second=0;
		}

		//Calculo de la cuenta regresiva de s,min,h,dias,meses
		second=60-second;
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

		//Se modifican los p del contador
		if(month<10){
			pMonth.textContent="0"+month.toString();
		}else{
			pMonth.textContent=month.toString();
		};
		if(dayDate<10){
			pDayDate.textContent="0"+dayDate.toString();
		}else{
			pDayDate.textContent=dayDate.toString();
		};
		if(hour<10){
			pHour.textContent="0"+hour.toString();
		}else{
			pHour.textContent=hour.toString();
		};
		if(minute<10){
			pMinute.textContent="0"+minute.toString();
		}else{
			pMinute.textContent=minute.toString();
		};
		if(second<10){
			pSecond.textContent="0"+second.toString();
		}else{
			pSecond.textContent=second.toString();		
		};
		
	};

	actualizarHora();
	var intervalo = setInterval(actualizarHora, 1000);

}())