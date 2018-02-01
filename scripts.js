var a = prompt ('podaj długośc boku a');
var h = prompt ('podaj wysokość h');

function getTriangleArea (a,h){

	if ((a > 0) && (h > 0)) {
		return (a*h/2);
	}else{
		return alert('nieprawidłowe dane');
	}
}
 alert (getTriangleArea(a,h)); 
 console.log (getTriangleArea (10,6));

 var triangle1Area = getTriangleArea(10, 15);
 var triangle2Area = getTriangleArea(8, 3);
 var triangle3Area = getTriangleArea(123, 97);
 
 

