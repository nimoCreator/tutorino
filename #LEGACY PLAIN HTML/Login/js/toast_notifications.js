document.addEventListener("DOMContentLoaded", (event) => {
    toast_notification({
		type:"alert", 
		time:"20", 
		label:"Zaloguj się!", 
		content:"Aby w pełni muc korzystać z funkcji systemu należy założyć <b>darmowe</b> konto."
	});
});

ToastID = 0;
function delete_script_element() {
	document.getElementById(id).remove();
}
function minimalizeToast(evt) {
	if (!evt.currentTarget.classList.contains('closing') && evt.currentTarget != undefined) {
		evt.currentTarget.classList.toggle("minimalized");
		evt.currentTarget.classList.toggle("maximalized");
	}
}
function closeToastEvt(evt)
{
	closeToast(evt.currentTarget.parentNode.parentNode);
}
function closeToast(task) {
	task.classList.add("closing");
	task.classList.remove("maximalized");
	task.classList.remove("minimalized");
	task.classList.add("closed");
	setTimeout( () => { task.remove();}, 501);
}
function waittodelete(task, time)
{
	setTimeout( () => closeToast(task), time);
}
function toast_notification(param) {
	if (localStorage.getItem("nimodevmode") == null) devmodeaccess = 0; else devmodeaccess = localStorage.getItem("nimodevmode");
	if (param.dev == undefined) param.dev = 0;
	if (devmodeaccess >= param.dev && param.dev >= 2 )
		{ console.log(param); }
	else if (devmodeaccess >= param.dev && param.dev >= 0 )
	{
		notifications_div = document.getElementById("toast_notifications");
		if (notifications_div == undefined) {
			notifications_div = document.createElement("Div");
			notifications_div.id = "toast_notifications";
			document.body.appendChild(notifications_div);
		}

		switch (param.type) {
			case "information":
			case "info":
			case "i":
				iconsvg = "info.svg";
				classname = "information";
				break;
			case "success":
			case "good":
			case "s":
				iconsvg = "success.svg";
				classname = "success";
				break;
			case "alert":
			case "a":
				iconsvg = "alert.svg";
				classname = "alert";
				break;
			case "error":
			case "bad":
			case "e":
				iconsvg = "error.svg";
				classname = "error";
				break;
			case "nimo":
			case "n":
				iconsvg = "nimo.svg";
				classname = "nimo";
				break;
			default:
				iconsvg = "notification.svg";
				classname = "notification";
				break;
		}
		if (param.label != undefined && param.label != null && param.label != "")
			labeltext = param.label;
		else if (param.type != undefined && param.type != null && param.type != "")
			labeltext = classname;
		else labeltext = "notification";

		notification = document.createElement("div");
		notification.className = classname;
		if (param.minimalized == 1) notification.className += " minimalized"; else notification.className += " maximalized";
		notification.id = "notification " + ToastID;
		notification.addEventListener('click', (evt) => minimalizeToast(evt));
		notification.Param1 = "ToastNotification-"+ToastID;

		header = document.createElement("div");
		header.className = "header";

		icon = document.createElement("div");
		icon.className = "icon";
		icon.innerHTML = "<img src=\"https://nimoweb.ddns.net/elements/toastnotifications/img/" + iconsvg + "\" alt=\"" + iconsvg + "\"> </img>";
		header.appendChild(icon);

		label = document.createElement("div");
		label.className = "label";
		label.innerHTML = labeltext;
		header.appendChild(label);

		close = document.createElement("div");
		close.className = "button close";
		close.innerHTML = "<img src=\"https://nimoweb.ddns.net/elements/toastnotifications/img/close.svg\" alt=\"close\"> </img>";
		close.addEventListener('click', (evt) => { closeToastEvt(evt); evt.stopPropagation();}); close.Param1 = ToastID;
		header.appendChild(close);

		notification.appendChild(header);

		if (param.time != undefined && param.time != null && param.time != "") {

			timeline = document.createElement("div");
			timeline.className = "timeline";
			timeline.style.animationDuration = param.time+"s";
				left = document.createElement("div");
				left.className = "left";
				left.style.animationDuration = param.time+"s";
				timeline.appendChild(left);
			notification.appendChild(timeline);
			waittodelete(notification, param.time*1000);
		}
		if (param.content != undefined && param.content != null && param.content != "") {
			text = document.createElement("div");
			text.className = "content";
			text.innerHTML = param.content;
			notification.appendChild(text);
		}


		notifications_div.appendChild(notification);


		ToastID++;
	}
}