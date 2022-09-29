const setToLocalStorage = (id) => {
	localStorage.setItem('break-time', id);
};
const getFromLocalStorage = () => {
	const value = localStorage.getItem('break-time');
	return value;
};

export { setToLocalStorage, getFromLocalStorage };
