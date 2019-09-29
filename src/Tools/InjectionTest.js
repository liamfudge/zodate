export const InjectionTest = (e) => {
	for(let i = 0; i < e.length; i++){
		if(e[i] === ";" || e[i] === "'"){
			return false;
		}
		if(e[i] === '-' && e[i-1] === '-'){
			return false;
		}
	}
	return true;
}