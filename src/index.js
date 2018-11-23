class NavigationBar {
	
	constructor(args) {
		
		this.height = args.height;
		this.backgroundColor = args.backgroundColor;
		this.imageSource = args.imageSource;
		this.enableShadow = args.enableShadow;
		this.shadowOpacity = args.shadowOpacity;
		this.shadowBlur = args.shadowBlur;
		this.imagePadding = args.imagePadding;
		
		this.buildNavBar();
		
	}
	
	buildNavBar() {
		
		this.navigationBar = document.createElement("header");
		this.navigationBarMain = document.createElement("main");
		this.navigationBarImage = document.createElement("img");
		
		this.navigationBar.style.height = this.height;
		this.navigationBar.style.backgroundColor = this.backgroundColor;
		this.navigationBar.style.width = "100%";
		this.navigationBarImage.style.boxSizing = "border-box";
		this.navigationBarImage.src = this.imageSource;
		this.navigationBar.style.position = "fixed";
		this.navigationBar.style.overflow = "hidden";
		this.navigationBar.style.boxShadow = "0px 0px " + this.shadowBlur + " 0px hsla(0, 0%, 0%, " + this.shadowOpacity + ")";
		this.navigationBarImage.style.height = "100%";
		this.navigationBarImage.style.left = "50%";
		this.navigationBarImage.style.position = "absolute";
		this.navigationBarImage.style.transform = "translateX(-50%)";
		this.navigationBarImage.style.padding = this.imagePadding + " 0px";
		this.navigationBar.style.top = "0px";
		this.navigationBar.style.left = "0px";
		this.navigationBar.style.display = "flex";
		this.navigationBar.style.justifyContent = "center";
		this.navigationBarMain.style.width = "100%";
		this.navigationBarMain.style.height = "100%";
		this.navigationBarMain.style.position = "relative";
		
		document.body.appendChild(this.navigationBar);
		this.navigationBar.appendChild(this.navigationBarMain);
		this.navigationBarMain.appendChild(this.navigationBarImage);
		
	}
	
}